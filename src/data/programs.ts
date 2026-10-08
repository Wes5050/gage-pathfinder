import hero from "@/assets/GAGE-Recreational-Gymnastics.png.asset.json";
import ninja from "@/assets/GAGE-Dragon-Ninja.png.asset.json";
import preschool from "@/assets/GAGE-Preschool-Gymnastics.png.asset.json";
import tumbling from "@/assets/GAGE-Tumbling.png.asset.json";
import competitivePhoto from "@/assets/GAGE-Recreational-Gymnastics.png.asset.json";
const competitive = competitivePhoto.url;
import { resolveProgramUrl, siteConfig } from "@/data/config";

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
  { ...shared, name: "Parent / Tot Daytime", category: "Preschool", duration: 45, ageMin: 1, ageMax: 2, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Move, play, and build confidence together.", longDescription: "A coach-led first movement class with a parent or caregiver alongside every little athlete.", benefits: ["Balance and coordination", "Parent-child connection", "Comfort in the gym"], heroImage: preschool.url, featured: true, displayOrder: 1 },
  { ...shared, name: "Parent / Tot", category: "Preschool", duration: 45, ageMin: 1, ageMax: 2, gender: "All", level: "Beginner", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "A playful first step into movement.", longDescription: "An active parent-and-child class designed around safe exploration, listening, and joyful movement.", benefits: ["Strength through play", "Early social skills", "Guided exploration"], heroImage: preschool.url, featured: false, displayOrder: 2 },
  { ...shared, name: "Gymnastics Ages 3–4 Daytime", category: "Preschool", duration: 45, ageMin: 2.5, ageMax: 4, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Independent movement for growing confidence.", longDescription: "A welcoming daytime class that introduces foundational shapes, rolls, balance, and safe landings.", benefits: ["Independent learning", "Body awareness", "Foundational skills"], heroImage: preschool.url, featured: true, displayOrder: 3 },
  { ...shared, name: "Gymnastics Ages 3–4", category: "Preschool", duration: 45, ageMin: 2.5, ageMax: 4, gender: "All", level: "Beginner", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Big movement for little humans.", longDescription: "A positive introduction to gymnastics that turns energy into confidence and coordination.", benefits: ["Listening and turn-taking", "Balance and flexibility", "Confident independence"], heroImage: preschool.url, featured: true, displayOrder: 4 },
  { ...shared, name: "Gymnastics Ages 3–5 Daytime", category: "Preschool", duration: 45, ageMin: 2.5, ageMax: 5, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Daytime gymnastics built for curious kids.", longDescription: "Progressive circuits help preschoolers learn at their pace while building strength and confidence.", benefits: ["Coordination", "Safe risk-taking", "School readiness"], heroImage: preschool.url, featured: false, displayOrder: 5 },
  { ...shared, name: "Girls Gymnastics Level 1", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "Girls", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Cartwheels, confidence, new friends, and a whole lot of fun.", longDescription: "A welcoming beginner class where kids jump, roll, balance, swing, and celebrate every new milestone.", benefits: ["Joyful movement", "New friendships", "Confidence through trying"], heroImage: hero.url, featured: true, displayOrder: 6 },
  { ...shared, name: "Boys Gymnastics Level 1", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "Boys", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Jump, swing, roll, and discover something new.", longDescription: "A beginner-friendly class filled with movement, encouragement, friends, and fun.", benefits: ["Active fun", "Confidence", "New friendships"], heroImage: hero.url, featured: true, displayOrder: 7 },
  { ...shared, name: "Homeschool Gymnastics", category: "Gymnastics", ageMin: 5, ageMax: 18, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Movement and community during the day.", longDescription: "A flexible daytime class for homeschool athletes of varied experience levels.", benefits: ["Physical education", "Social connection", "Progressive instruction"], heroImage: hero.url, featured: true, displayOrder: 8 },
  { ...shared, name: "Ninja Warrior Training Daytime", category: "Ninja", ageMin: 5, ageMax: 14, gender: "All", level: "Beginner", invitationOnly: false, daytime: true, monthlyTuition: 85, shortDescription: "Climb, jump, and let that energy loose.", longDescription: "A daytime obstacle adventure where kids move, problem-solve, and cheer each other on.", benefits: ["Active adventure", "Confidence", "Team energy"], heroImage: ninja.url, featured: true, displayOrder: 9 },
  { ...shared, name: "Ninja Warrior Training", category: "Ninja", ageMin: 5, ageMax: 14, gender: "All", level: "All levels", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Climb, jump, conquer obstacles, and have a blast.", longDescription: "A fast-moving adventure for kids who love to climb, race, explore, and celebrate every win.", benefits: ["Active fun", "Confidence", "New friends"], heroImage: ninja.url, featured: true, displayOrder: 10 },
  { ...shared, name: "Tumbling Level 1", category: "Tumbling", ageMin: 5, ageMax: 18, gender: "All", level: "Level 1", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Big flips, little victories, and something new to celebrate.", longDescription: "A welcoming place to roll, cartwheel, try new skills, and feel proud of every first.", benefits: ["Exciting first skills", "Confidence", "Celebrating progress"], heroImage: tumbling.url, featured: true, displayOrder: 11 },
  { ...shared, name: "Tumbling Level 2", category: "Tumbling", ageMin: 6, ageMax: 18, gender: "All", level: "Level 2", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "More skills. More confidence. More to celebrate.", longDescription: "A positive next step for kids excited to connect the skills they already love.", benefits: ["New skill combinations", "Confidence", "Proud milestones"], heroImage: tumbling.url, featured: false, displayOrder: 12 },
  { ...shared, name: "Tumbling Level 3", category: "Tumbling", ageMin: 7, ageMax: 18, gender: "All", level: "Level 3", invitationOnly: false, daytime: false, monthlyTuition: 95, shortDescription: "Keep moving, learning, and surprising yourself.", longDescription: "A lively class for experienced tumblers who are excited to keep learning and growing together.", benefits: ["Fresh challenges", "Confidence", "Shared wins"], heroImage: tumbling.url, featured: false, displayOrder: 13 },
  { ...shared, name: "Boys Gymnastics Level 2", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Boys", level: "Level 2", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "The next step when a coach says they're ready.", longDescription: "An invitation-only class for boys ready to keep building on their progress.", benefits: ["New challenges", "Confidence", "Coach support"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 20 },
  { ...shared, name: "Girls Gymnastics Level 2", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Girls", level: "Level 2", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "The next step when a coach says they're ready.", longDescription: "An invitation-only class for girls ready to keep building on their progress.", benefits: ["New challenges", "Confidence", "Coach support"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 21 },
  { ...shared, name: "Girls Gymnastics Level 3", category: "Gymnastics", ageMin: 6, ageMax: 18, gender: "Girls", level: "Level 3", invitationOnly: true, daytime: false, monthlyTuition: 95, shortDescription: "Keep growing and celebrating what comes next.", longDescription: "An invitation-only class for gymnasts ready for fresh challenges with familiar support.", benefits: ["Fresh challenges", "Confidence", "Coach support"], heroImage: competitive, trialAvailable: false, featured: false, displayOrder: 22 },
  { ...shared, name: "Girls Gymnastics Level 4", category: "Gymnastics", ageMin: 7, ageMax: 18, gender: "Girls", level: "Level 4", invitationOnly: true, daytime: false, monthlyTuition: 137, shortDescription: "More time to move, learn, and grow.", longDescription: "A longer, invitation-only class for gymnasts ready to continue their journey.", benefits: ["More time in class", "Fresh challenges", "Coach support"], heroImage: competitive, trialAvailable: false, duration: 85, featured: false, displayOrder: 23 },
];

export const programs = programSeed
  .map((program) => ({ ...program, iclassProUrl: resolveProgramUrl(program.name) }))
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const finderAgeGroups = ["2 & under", "2.5–4 years", "5–6 years", "7–9 years", "10 & up"] as const;
export type FinderAgeGroup = (typeof finderAgeGroups)[number];
export const finderAgeBounds: Record<FinderAgeGroup, [number, number]> = {
  "2 & under": [0, 2],
  "2.5–4 years": [2.5, 4],
  "5–6 years": [5, 6],
  "7–9 years": [7, 9],
  "10 & up": [10, 18],
};

/** Beginner, trial-eligible programs that fit an age group (used for "Not Sure"). */
export function beginnerProgramsForAge(ageGroup: string) {
  const bounds = finderAgeBounds[ageGroup as FinderAgeGroup];
  if (!bounds) return [];
  const [min, max] = bounds;
  const seen = new Set<ProgramCategory>();
  return programs.filter((program) => {
    if (program.invitationOnly || !program.trialAvailable) return false;
    if (!(program.ageMin <= max && program.ageMax >= min)) return false;
    // Preschool classes are never suggested once a child is 5 or older.
    if (program.category === "Preschool" && min >= 5) return false;
    if (seen.has(program.category)) return false;
    seen.add(program.category);
    return true;
  }).map((program) => program.gender === "All" ? program : { ...program, iclassProUrl: siteConfig.external.classes });
}

/** Single recommendation for a specific interest. "Not Sure" never auto-picks a program. */
export function recommendProgram(ageGroup: string, interest: string, gender?: string) {
  if (interest === "Not Sure") return null;
  const bounds = finderAgeBounds[ageGroup as FinderAgeGroup];
  if (!bounds) return null;
  const [min, max] = bounds;
  const candidates = programs.filter((program) => {
    const ageMatches = program.ageMin <= max && program.ageMax >= min;
    const categoryMatches = program.category === interest || (interest === "Gymnastics" && max < 5 && program.category === "Preschool");
    const genderMatches = !gender || program.gender === "All" || program.gender === gender;
    return ageMatches && categoryMatches && genderMatches && !program.invitationOnly && program.trialAvailable;
  });
  return candidates[0] ?? null;
}
