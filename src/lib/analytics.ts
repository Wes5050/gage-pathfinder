export type AnalyticsEventMap = {
  class_finder_started: { entry_step: "age" };
  class_finder_step: { step_number: 1 | 2 | 3; step_name: "age" | "interest" | "details"; selected_value: string };
  class_finder_recommendation: { program_name: string; monthly_tuition: number; criteria_matched: string };
  class_finder_reset: { last_completed_step: "age" | "interest" | "details" };
  cta_click: { label: string; placement: "hero" | "header_desktop" | "mobile_dock" | "finder_result" | "programs_grid" | "tuition_section" | "final_conversion" | "footer" };
  tuition_viewed: { tier: "daytime" | "standard" | "advanced" | "all"; action: "viewed" | "find_class_clicked" };
  iclasspro_handoff: { program_name: string; monthly_tuition: number; source_section: string; destination_url: string; utm_source?: string; utm_medium?: string };
};

export type CampaignAttribution = Partial<Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term", string>>;

export type AnalyticsEventName = keyof AnalyticsEventMap;
export type AnalyticsEvent = {
  [Name in AnalyticsEventName]: { event: Name; parameters: AnalyticsEventMap[Name] & CampaignAttribution }
}[AnalyticsEventName];
export type AnalyticsListener = (event: AnalyticsEvent) => void;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
    gageAnalyticsCallbacks?: AnalyticsListener[];
  }
}

const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const attributionStorageKey = "gage_campaign_attribution";
let initialized = false;
let memoryAttribution: CampaignAttribution = {};

function trackingAllowed() {
  if (typeof window === "undefined") return false;
  const dnt = navigator.doNotTrack ?? String((window.navigator as Navigator & { msDoNotTrack?: string }).msDoNotTrack ?? "");
  return dnt !== "1" && dnt.toLowerCase() !== "yes";
}

function sanitizeCampaignValue(value: string | null) {
  if (!value) return "";
  const sanitized = value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 200);
  const looksLikeEmail = /\b[^\s@]+@[^\s@]+\.[^\s@]+\b/.test(sanitized);
  const looksLikePhone = /(?:\+?\d[\s().-]*){8,}/.test(sanitized);
  return looksLikeEmail || looksLikePhone ? "" : sanitized;
}

function readStoredAttribution(): CampaignAttribution {
  try {
    const stored = window.sessionStorage.getItem(attributionStorageKey);
    if (!stored) return memoryAttribution;
    const parsed = JSON.parse(stored) as Record<string, unknown>;
    return Object.fromEntries(attributionKeys.flatMap((key) => typeof parsed[key] === "string" ? [[key, parsed[key]]] : [])) as CampaignAttribution;
  } catch {
    return memoryAttribution;
  }
}

export function getCampaignAttribution(): CampaignAttribution {
  if (!trackingAllowed()) {
    memoryAttribution = {};
    try { window.sessionStorage.removeItem(attributionStorageKey); } catch { /* Storage may be unavailable. */ }
    return {};
  }
  const incoming = new URLSearchParams(window.location.search);
  const captured = Object.fromEntries(attributionKeys.flatMap((key) => {
    const value = sanitizeCampaignValue(incoming.get(key));
    return value ? [[key, value]] : [];
  })) as CampaignAttribution;
  const attribution = Object.keys(captured).length ? captured : readStoredAttribution();
  memoryAttribution = attribution;
  if (Object.keys(captured).length) {
    try { window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution)); } catch { /* In-memory fallback remains active. */ }
  }
  return attribution;
}

export function withCampaignAttribution(destination: string) {
  if (typeof window === "undefined") return destination;
  const url = new URL(destination, window.location.origin);
  Object.entries(getCampaignAttribution()).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

function initializeGa() {
  if (initialized || !measurementId || !trackingAllowed()) return;
  initialized = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag() { window.dataLayer?.push(arguments); };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "denied",
    security_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  if (!document.querySelector(`script[data-gage-analytics="${measurementId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.gageAnalytics = measurementId;
    document.head.appendChild(script);
  }
}

export function trackEvent<Name extends AnalyticsEventName>(name: Name, parameters: AnalyticsEventMap[Name]) {
  if (!trackingAllowed()) return;
  initializeGa();
  const enrichedParameters = { ...parameters, ...getCampaignAttribution() };
  const event = { event: name, parameters: enrichedParameters } as AnalyticsEvent;

  if (window.gtag) window.gtag("event", name, enrichedParameters);
  else window.dataLayer?.push({ event: name, ...enrichedParameters });

  window.gageAnalyticsCallbacks?.forEach((listener) => listener(event));
  if (import.meta.env.DEV) console.info(`[GAGE analytics] ${name}`, enrichedParameters);
}

export function subscribeToAnalytics(listener: AnalyticsListener) {
  if (typeof window === "undefined") return () => undefined;
  window.gageAnalyticsCallbacks = window.gageAnalyticsCallbacks ?? [];
  window.gageAnalyticsCallbacks.push(listener);
  return () => {
    window.gageAnalyticsCallbacks = window.gageAnalyticsCallbacks?.filter((entry) => entry !== listener);
  };
}

export function trackCta(label: string, placement: AnalyticsEventMap["cta_click"]["placement"]) {
  trackEvent("cta_click", { label, placement });
}

export function trackIclassProHandoff(input: AnalyticsEventMap["iclasspro_handoff"]) {
  const attribution = getCampaignAttribution();
  trackEvent("iclasspro_handoff", {
    ...input,
    destination_url: withCampaignAttribution(input.destination_url),
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
  });
}

export function forwardIclassProHandoff(event: { currentTarget: HTMLAnchorElement }, input: Omit<AnalyticsEventMap["iclasspro_handoff"], "destination_url"> & { destination_url: string }) {
  const destination = withCampaignAttribution(input.destination_url);
  event.currentTarget.href = destination;
  trackIclassProHandoff({ ...input, destination_url: destination });
}