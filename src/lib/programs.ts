import preschool from "@/assets/gage-preschool.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import hero from "@/assets/gage-hero.jpg.asset.json";

export type ClassSlot = {
  name: string;
  ages: string;
  days: string;
  time: string;
  program: string;
  openings: number;
};

export const PROGRAMS = [
  {
    slug: "/preschool-gymnastics",
    name: "Preschool Gymnastics",
    ages: "Ages 1–5",
    img: preschool.url,
    blurb: "Parent-and-me through independent classes that build coordination and courage.",
  },
  {
    slug: "/recreational-gymnastics",
    name: "Recreational & Tumbling",
    ages: "Ages 6–14",
    img: tumbling.url,
    blurb: "Skill-level classes on bars, beam, floor and vault — plus dedicated tumbling.",
  },
  {
    slug: "/dragon-ninja",
    name: "Dragon Ninja",
    ages: "Ages 5–14",
    img: ninja.url,
    blurb: "Obstacle training that turns energy into strength, agility and confidence.",
  },
  {
    slug: "/camps-and-events",
    name: "Camps & Events",
    ages: "All ages",
    img: hero.url,
    blurb: "School-out camps, open gyms and birthday parties in the same trusted gym.",
  },
];

export const SCHEDULE: ClassSlot[] = [
  { name: "Tiny Dragons (Parent & Me)", ages: "1–2", days: "Tue / Thu", time: "9:30 AM", program: "Preschool", openings: 4 },
  { name: "Little Dragons", ages: "3–4", days: "Mon / Wed", time: "10:15 AM", program: "Preschool", openings: 3 },
  { name: "Preschool Prep", ages: "4–5", days: "Tue", time: "4:30 PM", program: "Preschool", openings: 6 },
  { name: "Rec Gymnastics Level 1", ages: "6–8", days: "Mon", time: "5:15 PM", program: "Recreational", openings: 5 },
  { name: "Rec Gymnastics Level 2", ages: "8–11", days: "Wed", time: "6:00 PM", program: "Recreational", openings: 2 },
  { name: "Tumbling Basics", ages: "6–10", days: "Thu", time: "5:15 PM", program: "Tumbling", openings: 7 },
  { name: "Advanced Tumbling", ages: "11–14", days: "Thu", time: "6:30 PM", program: "Tumbling", openings: 3 },
  { name: "Dragon Ninja Rookie", ages: "5–8", days: "Fri", time: "5:00 PM", program: "Ninja", openings: 8 },
  { name: "Dragon Ninja Elite", ages: "9–14", days: "Fri", time: "6:15 PM", program: "Ninja", openings: 4 },
  { name: "Saturday All-Levels Rec", ages: "6–14", days: "Sat", time: "9:00 AM", program: "Recreational", openings: 6 },
];
