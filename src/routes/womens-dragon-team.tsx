import { createFileRoute } from "@tanstack/react-router";
import { TeamLayout, TeamPoints } from "@/components/team-page";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/womens-dragon-team")({
  head: () => ({ meta: [
    { title: "Women's Dragon Team | GAGE Center Blue Springs" },
    { name: "description", content: "GAGE's Women's Dragon Team, led by Al Fong and Armine Barutyan-Fong. Ask about team placement." },
    { property: "og:title", content: "Women's Dragon Team | GAGE Center" },
    { property: "og:description", content: "A GAGE tradition since 1979. Ask about team placement." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WomensDragonTeam,
});

function WomensDragonTeam() {
  return (
    <TeamLayout eyebrow="Women's teams · Dragon Team" title="Women's Dragon Team." intro="Led by coaches Al Fong and Armine Barutyan-Fong, the Women's Dragon Team has been part of GAGE since 1979." image={photos.coaching.src} team="womens_dragon_team" inquiry="womens">
      <p className="eyebrow">About the team</p>
      <h2 className="section-title mt-4">A legacy of champions.</h2>
      <TeamPoints points={[
        { title: "Since 1979", text: "The team has produced state, regional, national, and world champions, and many athletes have earned scholarships to top universities." },
        { title: "Leadership for life", text: "Beyond medals, GAGE is committed to developing life-long leadership skills in every athlete." },
        { title: "Personal goals matter", text: "Coaches support every athlete's own goals, as well as the team's big ones." },
        { title: "How placement works", text: "Team spots are by coach invitation. Contact GAGE to ask about an evaluation." },
      ]} />
    </TeamLayout>
  );
}
