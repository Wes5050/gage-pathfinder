import { createFileRoute } from "@tanstack/react-router";
import { TeamLayout, TeamPoints } from "@/components/team-page";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/mens-team")({
  head: () => ({ meta: [
    { title: "Men's Dragon Team | GAGE Center Blue Springs" },
    { name: "description", content: "GAGE's invitation-only Men's Dragon Team for ages 6–18, led by Head Coach Wally Meierarend. Ask about team placement." },
    { property: "og:title", content: "Men's Dragon Team | GAGE Center" },
    { property: "og:description", content: "Invitation-only men's gymnastics team for ages 6–18 at GAGE Center." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MensTeam,
});

function MensTeam() {
  return (
    <TeamLayout eyebrow="Competitive teams · Men's" title="Men's Dragon Team." intro="An invitation-only gymnastics team for boys and young men ages 6–18." image={photos.boys.src} team="mens_team" inquiry="mens">
      <p className="eyebrow">About the team</p>
      <h2 className="section-title mt-4">A brotherhood that pushes each other.</h2>
      <TeamPoints points={[
        { title: "Head Coach Wally Meierarend", text: "Coach Wally has coached at GAGE for three decades and also directs the recreational program." },
        { title: "Local to national meets", text: "The team competes from local meets to regional and national competitions." },
        { title: "College opportunities", text: "Team gymnasts have gone on to compete in college on scholarships." },
        { title: "How placement works", text: "The team is invitation-only. Contact GAGE to ask about placement." },
      ]} />
    </TeamLayout>
  );
}
