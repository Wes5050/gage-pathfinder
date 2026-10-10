import { createFileRoute } from "@tanstack/react-router";
import { TeamLayout, TeamPoints } from "@/components/team-page";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/xcel-team")({
  head: () => ({ meta: [
    { title: "Inferno Dragon Xcel Team | GAGE Center Blue Springs" },
    { name: "description", content: "GAGE's Inferno Dragon Xcel Team gives girls 5 and older a competitive challenge with room for other passions." },
    { property: "og:title", content: "Inferno Dragon Xcel Team | GAGE Center" },
    { property: "og:description", content: "Competitive gymnastics for girls 5 and up. Ask about team placement." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: XcelTeam,
});

function XcelTeam() {
  return (
    <TeamLayout eyebrow="Women's teams · Xcel" title="Inferno Dragon Xcel Team." intro="For girls who crave a bigger challenge and want to compete, while keeping time for other passions." image={photos.rec.src} team="xcel_team" inquiry="womens">
      <p className="eyebrow">About the team</p>
      <h2 className="section-title mt-4">Compete and keep balance.</h2>
      <TeamPoints points={[
        { title: "Girls 5 and older", text: "Xcel welcomes girls ages 5 and up in a supportive yet competitive environment." },
        { title: "Room for other passions", text: "The program is built with the flexibility to pursue other activities alongside gymnastics." },
        { title: "Meets close to home", text: "Athletes compete in GAGE-hosted meets and other Kansas City area competitions." },
        { title: "How placement works", text: "Placement is by coach evaluation. Contact GAGE to ask about the next opportunity." },
      ]} />
    </TeamLayout>
  );
}
