import { createFileRoute } from "@tanstack/react-router";
import { TeamCards, TeamLayout } from "@/components/team-page";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/competitive-teams")({
  head: () => ({ meta: [
    { title: "Competitive Gymnastics Teams | GAGE Center Blue Springs" },
    { name: "description", content: "Explore GAGE Center's women's and men's competitive gymnastics teams in Blue Springs, MO, and ask about team placement." },
    { property: "og:title", content: "Competitive Teams | GAGE Center" },
    { property: "og:description", content: "Women's Dragon Team, Xcel, and the Men's Dragon Team at GAGE Center." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CompetitiveTeams,
});

function CompetitiveTeams() {
  return (
    <TeamLayout eyebrow="Competitive teams" title="Ready for the next challenge." intro="For athletes who love the gym and want to compete, GAGE offers women's and men's team pathways. Placement is by coach invitation." image={photos.coaching.src} team="competitive_overview" inquiry="both">
      <p className="eyebrow">Choose a pathway</p>
      <h2 className="section-title mt-4">Our teams.</h2>
      <TeamCards items={[
        { to: "/womens-teams", title: "Women's Teams", text: "Two pathways for girls: the Women's Dragon Team and the Inferno Dragon Xcel Team.", image: photos.rec.src, imageAlt: photos.rec.alt },
        { to: "/mens-team", title: "Men's Dragon Team", text: "An invitation-only team for boys and young men ages 6–18.", image: photos.boys.src, imageAlt: photos.boys.alt },
      ]} />
    </TeamLayout>
  );
}
