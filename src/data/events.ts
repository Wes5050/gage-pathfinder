import birthdayPhoto from "@/assets/gage-preschool.jpg.asset.json";
const birthday = birthdayPhoto.url;
import hero from "@/assets/gage-hero.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import competitivePhoto from "@/assets/gage-hero.jpg.asset.json";
const competitive = competitivePhoto.url;

export type GageEvent = {
  title: string;
  type: "Camps" | "Parent Night Out" | "Toddler Play" | "Meets";
  availability: string;
  description: string;
  image: string;
};

export const events: GageEvent[] = [
  { title: "Dragon Invites & Meets", type: "Meets", availability: "Seasonal registration", description: "Exciting events, proud moments, and plenty of reasons to cheer on Team GAGE. Details are posted when confirmed.", image: competitive },
  { title: "Bump City Toddler Fun", type: "Toddler Play", availability: "Check current availability", description: "A bright, playful space where little movers can explore, make discoveries, and smile.", image: hero.url },
  { title: "GAGE Camps", type: "Camps", availability: "Seasonal registration", description: "Big adventures, active days, and new friends they'll talk about all the way home.", image: ninja.url },
  { title: "Parent Night Out", type: "Parent Night Out", availability: "Dates announced seasonally", description: "A night packed with movement, games, friends, and fun for kids — plus an evening out for parents.", image: birthday },
];