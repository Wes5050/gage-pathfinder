const PORTAL = "https://portal.iclasspro.com/dragongym";

export const siteConfig = {
  name: "GAGE Center",
  phoneDisplay: "(816) 229-7775",
  phoneHref: "tel:+18162297775",
  email: "office@gagecenter.com",
  registrationFee: 44,
  address: "1101 NW Jefferson St, Blue Springs, MO 64015",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=GAGE+Center+1101+NW+Jefferson+St+Blue+Springs+MO+64015",
  external: {
    // Verified GAGE (dragongym) iClassPro destinations. Registration, scheduling,
    // trials, and billing all happen in iClassPro — never in this site.
    booking: `${PORTAL}/booking`,
    classes: `${PORTAL}/classes`,
    parentPortal: PORTAL,
    parentLogin: `${PORTAL}/login`,
    boysGymnasticsClasses: `${PORTAL}/classes?genders=1&programs=20`,
    girlsGymnasticsClasses: `${PORTAL}/classes?genders=0&programs=20`,
    ninjaClasses: `${PORTAL}/classes?genders=2&programs=163`,
    // Verified against the live GAGE class list (Oct 2026): program 180 = Tumbling only;
    // program 17 + ages=1 = Parent Participation (Parent / Tot) only.
    tumblingClasses: `${PORTAL}/classes?programs=180`,
    parentTotClasses: `${PORTAL}/classes?programs=17&ages=1`,
    // Interim partner destinations until GAGE publishes in-portal party booking.
    // Bump City ROLLER destinations (verified from bump-city.com/events).
    parentNightOut: "https://ecom.roller.app/bumpcity/booknow/en-us/product/1479642",
    rollerEvents: "https://ecom.roller.app/bumpcity/booknow/en-us/home",
    // Interim: Bump City camp page until the Adventure Club ROLLER product link is confirmed.
    adventureClub: "https://www.bump-city.com/summer-camp",
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
  "Girls Gymnastics Level 1": siteConfig.external.girlsGymnasticsClasses,
  "Ninja Warrior Training": siteConfig.external.ninjaClasses,
  "Parent / Tot": siteConfig.external.parentTotClasses,
  "Parent / Tot Daytime": siteConfig.external.parentTotClasses,
  "Tumbling Level 1": siteConfig.external.tumblingClasses,
  "Tumbling Level 2": siteConfig.external.tumblingClasses,
  "Tumbling Level 3": siteConfig.external.tumblingClasses,
};

export function resolveProgramUrl(programName: string) {
  return programUrlOverrides[programName] ?? siteConfig.external.classes;
}

/** No verified daytime Ninja classes exist yet — these programs route to a Contact inquiry instead of booking. */
export const inquiryPrograms: Record<string, string> = {
  "Ninja Warrior Training Daytime": "Ask About Daytime Ninja",
};
