export type AnalyticsEventMap = {
  class_finder_started: { entry_step: "age" };
  class_finder_step: { step_number: 1 | 2 | 3; step_name: "age" | "interest" | "details"; selected_value: string };
  class_finder_recommendation: { program_name: string; monthly_tuition: number; criteria_matched: string };
  class_finder_reset: { last_completed_step: "age" | "interest" | "details" };
  cta_click: { label: string; placement: "hero" | "header_desktop" | "mobile_dock" | "finder_result" | "programs_grid" | "tuition_section" | "final_conversion" | "footer" };
  tuition_viewed: { tier: "daytime" | "standard" | "advanced" | "all"; action: "viewed" | "find_class_clicked" };
  iclasspro_handoff: { program_name: string; monthly_tuition: number; source_section: string; destination_url: string };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;
export type AnalyticsEvent = {
  [Name in AnalyticsEventName]: { event: Name; parameters: AnalyticsEventMap[Name] }
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
let initialized = false;

function trackingAllowed() {
  if (typeof window === "undefined") return false;
  const dnt = navigator.doNotTrack ?? String((window.navigator as Navigator & { msDoNotTrack?: string }).msDoNotTrack ?? "");
  return dnt !== "1" && dnt.toLowerCase() !== "yes";
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
  const event = { event: name, parameters } as AnalyticsEvent;

  if (window.gtag) window.gtag("event", name, parameters);
  else window.dataLayer?.push({ event: name, ...parameters });

  window.gageAnalyticsCallbacks?.forEach((listener) => listener(event));
  if (import.meta.env.DEV) console.info(`[GAGE analytics] ${name}`, parameters);
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
  trackEvent("iclasspro_handoff", input);
}