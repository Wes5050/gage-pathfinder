import birthday from "@/assets/gage-birthday.jpg";
import hero from "@/assets/gage-hero.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import competitive from "@/assets/gage-competitive.jpg";

export type GageEvent = {
  title: string;
  type: "Camps" | "Parent Night Out" | "Toddler Play" | "Meets";
  availability: string;
  description: string;
  image: string;
};

export const events: GageEvent[] = [
  { title: "Dragon Invites & Meets", type: "Meets", availability: "Seasonal registration", description: "Competition events and opportunities to cheer on Team GAGE. Current details are posted when confirmed.", image: competitive },
  { title: "Bump City Toddler Fun", type: "Toddler Play", availability: "Check current availability", description: "Active play for little movers. Confirm the current session in the GAGE parent portal.", image: hero.url },
  { title: "GAGE Camps", type: "Camps", availability: "Seasonal registration", description: "Movement, games, and new friendships when camp registration is open.", image: ninja.url },
  { title: "Parent Night Out", type: "Parent Night Out", availability: "Dates announced seasonally", description: "Big gym energy for them and an evening out for you. Registration opens for announced events.", image: birthday },
];