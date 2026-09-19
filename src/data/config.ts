const PORTAL = "https://portal.iclasspro.com/dragongym";

export const siteConfig = {
  name: "GAGE Center",
  phoneDisplay: "(816) 229-7775",
  phoneHref: "tel:+18162297775",
  email: "info@gagecenter.com",
  address: "1101 NW Jefferson St, Blue Springs, MO 64015",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1101+NW+Jefferson+St+Blue+Springs+MO+64015",
  external: {
    // Verified GAGE (dragongym) iClassPro destinations. Registration, scheduling,
    // trials, and billing all happen in iClassPro — never in this site.
    booking: `${PORTAL}/booking`,
    classes: `${PORTAL}/classes`,
    parentPortal: PORTAL,
    parentLogin: `${PORTAL}/login`,
    boysGymnasticsClasses: `${PORTAL}/classes?genders=1&programs=20`,
    // Interim partner destinations until GAGE publishes in-portal party booking.
    birthdayParties: "https://www.bump-city.com/birthday-parties",
    bumpCity: "https://www.bump-city.com/",
  },
  registration: {
    provider: "iClassPro",
    trialLinkVerified: true,
    trialNote: "Choose a class that works for your family, then select Request a Trial.",
  },
  hours: [
    "Monday: 9:00 AM–8:30 PM",
    "Tuesday: 9:00 AM–8:30 PM",
    "Wednesday: 9:00 AM–10:00 PM",
    "Thursday: 9:00 AM–8:30 PM",
    "Friday: 9:00 AM–8:30 PM",
    "Saturday: 9:00 AM–6:00 PM",
    "Sunday: 1:00 PM–5:00 PM",
  ],
} as const;

/**
 * Program-name → verified filtered iClassPro URL.
 * Add entries here as GAGE publishes more filtered links; everything else
 * safely falls back to the general class list. Never invent filter params.
 */
export const programUrlOverrides: Record<string, string> = {
  "Boys Gymnastics Level 1": siteConfig.external.boysGymnasticsClasses,
};

export function resolveProgramUrl(programName: string) {
  return programUrlOverrides[programName] ?? siteConfig.external.classes;
}
