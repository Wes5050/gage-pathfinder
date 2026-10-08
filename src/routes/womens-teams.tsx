import { createFileRoute } from "@tanstack/react-router";
import { TeamCards, TeamLayout } from "@/components/team-page";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/womens-teams")({
  head: () => ({ meta: [
    { title: "Women's Gymnastics Teams | GAGE Center Blue Springs" },
    { name: "description", content: "Two competitive pathways for girls at GAGE Center: the Women's Dragon Team and the Inferno Dragon Xcel Team." },
    { property: "og:title", content: "Women's Teams | GAGE Center" },
    { property: "og:description", content: "Compare the Women's Dragon Team and Xcel pathways at GAGE Center." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WomensTeams,
});

function WomensTeams() {
  return (
    <TeamLayout eyebrow="Women's teams" title="Two paths. One team spirit." intro="GAGE offers two competitive pathways for girls. Our coaches help each family find the one that fits." image={photos.rehero.src} team="womens_overview">
      <p className="eyebrow">Two pathways</p>
      <h2 className="section-title mt-4">Find the right fit.</h2>
      <TeamCards items={[
        { to: "/womens-dragon-team", title: "Women's Dragon Team", text: "GAGE's long-standing women's team, led by coaches Al Fong and Armine Barutyan-Fong.", image: photos.coaching.src, imageAlt: photos.coaching.alt },
        { to: "/xcel-team", title: "Inferno Dragon Xcel Team", text: "A competitive team for girls 5 and older that leaves room to pursue other passions.", image: photos.rec.src, imageAlt: photos.rec.alt },
      ]} />
    </TeamLayout>
  );
}
