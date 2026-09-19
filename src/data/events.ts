import birthday from "@/assets/gage-birthday.jpg";
import hero from "@/assets/gage-hero.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import competitive from "@/assets/gage-competitive.jpg";

export type GageEvent = {
  title: string;
  type: "Camps" | "Parent Night Out" | "Special Events" | "Meets";
  timing: string;
  description: string;
  image: string;
};

export const events: GageEvent[] = [
  { title: "School-Out Camps", type: "Camps", timing: "On district no-school days", description: "A full day of movement, games, and new friendships.", image: hero.url },
  { title: "Kids' Night at GAGE", type: "Parent Night Out", timing: "Select Friday nights", description: "Big gym energy for them. A free evening for you.", image: birthday },
  { title: "Skill Clinics", type: "Special Events", timing: "Seasonal weekends", description: "Focused coaching to unlock the next skill safely.", image: ninja.url },
  { title: "Home Meets", type: "Meets", timing: "Competition season", description: "Come feel the energy and cheer on Team GAGE.", image: competitive },
];