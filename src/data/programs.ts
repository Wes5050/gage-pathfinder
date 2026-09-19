import hero from "@/assets/gage-hero.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import competitive from "@/assets/gage-competitive.jpg";
import { siteConfig } from "@/data/config";

export type ProgramCategory = "Gymnastics" | "Preschool" | "Ninja" | "Tumbling";
export type ProgramGender = "All" | "Girls" | "Boys";

export type Program = {
  name: string;
  category: ProgramCategory;
  ageMin: number;
  ageMax: number;
  gender: ProgramGender;
  level: string;
  invitationOnly: boolean;
  daytime: boolean;
  duration: number;
  monthlyTuition: number;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  heroImage: string;
  trialAvailable: boolean;
  iclassProUrl: string;
  featured: boolean;
  displayOrder: number;
};

const classesUrl = siteConfig.external.classes;
const shared = {
  duration: 55,
  trialAvailable: true,
  iclassProUrl: classesUrl,
};

const programSeed: Program[] = [
  { ...shared, name: "Parent Tot Ages 1–3 Daytime", category: "Preschool", ageMin: 1, ageMax: 3, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Move, play, and build confidence together.", longDescription: "A coach-led first movement class with a parent or caregiver alongside every little athlete.", benefits: ["Balance and coordination", "Parent-child connection", "Comfort in the gym"], heroImage: preschool.url, featured: true, displayOrder: 1 },
  { ...shared, name: "Parent Tot Ages 1–3", category: "Preschool", ageMin: 1, ageMax: 3, gender: "All", level: "Beginner", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "A playful first step into movement.", longDescription: "An active parent-and-child class designed around safe exploration, listening, and joyful movement.", benefits: ["Strength through play", "Early social skills", "Guided exploration"], heroImage: preschool.url, featured: false, displayOrder: 2 },
  { ...shared, name: "Gymnastics Ages 3–4 Daytime", category: "Preschool", ageMin: 3, ageMax: 4, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Independent movement for growing confidence.", longDescription: "A welcoming daytime class that introduces foundational shapes, rolls, balance, and safe landings.", benefits: ["Independent learning", "Body awareness", "Foundational skills"], heroImage: preschool.url, featured: true, displayOrder: 3 },
  { ...shared, name: "Gymnastics Ages 3–4", category: "Preschool", ageMin: 3, ageMax: 4, gender: "All", level: "Beginner", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Big movement for little humans.", longDescription: "A positive introduction to gymnastics that turns energy into confidence and coordination.", benefits: ["Listening and turn-taking", "Balance and flexibility", "Confident independence"], heroImage: preschool.url, featured: true, displayOrder: 4 },
  { ...shared, name: "Gymnastics Ages 3–5 Daytime", category: "Preschool", ageMin: 3, ageMax: 5, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Daytime gymnastics built for curious kids.", longDescription: "Progressive circuits help preschoolers learn at their pace while building strength and confidence.", benefits: ["Coordination", "Safe risk-taking", "School readiness"], heroImage: preschool.url, featured: false, displayOrder: 5 },
  { ...shared, name: "Girls Gymnastics Level 1", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "Girls", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "A welcoming start on every event.", longDescription: "Beginner gymnastics across bars, beam, floor, and vault with progressions that make every win visible.", benefits: ["Whole-body strength", "Four-event fundamentals", "Confidence through progress"], heroImage: hero.url, featured: true, displayOrder: 6 },
  { ...shared, name: "Boys Gymnastics Level 1", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "Boys", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Build strength, control, and courage.", longDescription: "A beginner-friendly pathway through foundational men's gymnastics skills and body control.", benefits: ["Upper-body strength", "Coordination", "Safe skill progressions"], heroImage: hero.url, featured: true, displayOrder: 7 },
  { ...shared, name: "Homeschool Gymnastics", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Movement and community during the day.", longDescription: "A flexible daytime class for homeschool athletes of varied experience levels.", benefits: ["Physical education", "Social connection", "Progressive instruction"], heroImage: hero.url, featured: true, displayOrder: 8 },
  { ...shared, name: "Ninja Warrior Training Daytime", category: "Ninja", ageMin: 5, ageMax: 18, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Climb, swing, and conquer the course.", longDescription: "Daytime obstacle training that channels energy into agility, grip strength, and problem-solving.", benefits: ["Agility", "Grip strength", "Creative problem-solving"], heroImage: ninja.url, featured: true, displayOrder: 9 },
  { ...shared, name: "Ninja Warrior Training", category: "Ninja", ageMin: 5, ageMax: 18, gender: "All", level: "All levels", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Climb. Conquer. Repeat.", longDescription: "Fast-moving obstacle training for kids who love to climb, race, and test what they can do.", benefits: ["Strength and agility", "Resilience", "Team energy"], heroImage: ninja.url, featured: true, displayOrder: 10 },
  { ...shared, name: "Tumbling Level 1", category: "Tumbling", ageMin: 5, ageMax: 18, gender: "All", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Build the skills. Land the moment.", longDescription: "A beginner pathway through rolls, handstands, cartwheels, and the body shapes behind powerful tumbling.", benefits: ["Safe foundations", "Core strength", "Confident landings"], heroImage: tumbling.url, featured: true, displayOrder: 11 },
  { ...shared, name: "Tumbling Level 2", category: "Tumbling", ageMin: 6, ageMax: 18, gender: "All", level: "Level 2", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Connect skills with confidence.", longDescription: "Progressive tumbling for athletes ready to build connected skills and stronger technique.", benefits: ["Back walkover progressions", "Power and control", "Technique"], heroImage: tumbling.url, featured: false, displayOrder: 12 },
  { ...shared, name: "Tumbling Level 3", category: "Tumbling", ageMin: 7, ageMax: 18, gender: "All", level: "Level 3", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Turn power into precision.", longDescription: "Advanced recreational tumbling focused on dynamic skills, connection, and clean technique.", benefits: ["Advanced progressions", "Explosive power", "Air awareness"], heroImage: tumbling.url, featured: false, displayOrder: 13 },
  { ...shared, name: "Boys Gymnastics Level 2", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Boys", level: "Level 2", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "The next step for placed athletes.", longDescription: "An evaluation-based class for boys ready for more complex skills and disciplined progressions.", benefits: ["Advanced fundamentals", "Strength development", "Coach-guided placement"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 20 },
  { ...shared, name: "Girls Gymnastics Level 2", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Girls", level: "Level 2", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "Progress with purposeful placement.", longDescription: "An evaluation-based next level across all four events for athletes who have mastered Level 1 foundations.", benefits: ["Skill connections", "Strength and form", "Coach-guided placement"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 21 },
  { ...shared, name: "Girls Gymnastics Level 3", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Girls", level: "Level 3", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "Stronger skills. Sharper technique.", longDescription: "An evaluation-based level for gymnasts ready to deepen technique and connect harder skills.", benefits: ["Technical development", "Event confidence", "Coach-guided placement"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 22 },
  { ...shared, name: "Girls Gymnastics Level 4", category: "Gymnastics", ageMin: 7, ageMax: 18, gender: "Girls", level: "Level 4", invitationOnly: true, daytime: false, monthlyTuition: 137, shortDescription: "Advanced training for placed athletes.", longDescription: "A longer, evaluation-based class for gymnasts ready for advanced recreational progressions.", benefits: ["Extended training", "Advanced technique", "Coach-guided placement"], heroImage: competitive, trialAvailable: false, duration: 85, featured: false, displayOrder: 23 },
];

export const programs = programSeed.sort((a, b) => a.displayOrder - b.displayOrder);

export function recommendProgram(ageRange: string, interest: string, gender?: string) {
  const ageMap: Record<string, number> = { "1–3": 2, "3–4": 3.5, "5–7": 6, "8–12": 10, "13+": 14 };
  const age = ageMap[ageRange];
  if (age === undefined) return null;
  const category = interest === "Not Sure" ? (age < 5 ? "Preschool" : "Ninja") : interest;
  const candidates = programs.filter((program) => {
    const ageMatches = age >= program.ageMin && age <= program.ageMax;
    const categoryMatches = program.category === category || (category === "Gymnastics" && age < 5 && program.category === "Preschool");
    const genderMatches = !gender || program.gender === "All" || program.gender === gender;
    return ageMatches && categoryMatches && genderMatches && !program.invitationOnly && program.trialAvailable;
  });
  return candidates[0] ?? null;
}