import rec from "@/assets/photos/rec.asset.json";
import ninja from "@/assets/photos/ninja.asset.json";
import tumble from "@/assets/photos/tumble.asset.json";
import preschool from "@/assets/photos/preschool.asset.json";
import camp from "@/assets/photos/camp.asset.json";
import party from "@/assets/photos/party.asset.json";
import friends from "@/assets/photos/friends.asset.json";
import partyextra from "@/assets/photos/partyextra.asset.json";
import social from "@/assets/photos/social.asset.json";
import beginner from "@/assets/photos/beginner.asset.json";
import play from "@/assets/photos/play.asset.json";
import tucoach from "@/assets/photos/tucoach.asset.json";
import prehero from "@/assets/photos/prehero.asset.json";
import preroom from "@/assets/photos/preroom.asset.json";
import rehero from "@/assets/photos/rehero.asset.json";
import careerhero from "@/assets/photos/careerhero.asset.json";
import boys from "@/assets/photos/boys.asset.json";
import nihero from "@/assets/photos/nihero.asset.json";
import obstacles from "@/assets/photos/obstacles.asset.json";
import ring from "@/assets/photos/ring.asset.json";
import tuhero from "@/assets/photos/tuhero.asset.json";
import facility from "@/assets/photos/facility.asset.json";
import cahero from "@/assets/photos/cahero.asset.json";
import totday from "@/assets/photos/totday.asset.json";
import tot from "@/assets/photos/tot.asset.json";
import teaching from "@/assets/photos/teaching.asset.json";
import coaching from "@/assets/photos/coaching.asset.json";
import viewing from "@/assets/photos/viewing.asset.json";

/** GAGE-approved photos keyed by placement-map asset key. */
export const photos = {
  rec: { src: rec.url, alt: "Young gymnast practicing on a bar with an attentive coach" },
  ninja: { src: ninja.url, alt: "Child balancing across padded obstacles" },
  tumble: { src: tumble.url, alt: "Young athlete running along a blue tumbling track" },
  preschool: { src: preschool.url, alt: "Young child balancing on a low beam" },
  camp: { src: camp.url, alt: "Children playing a ball game together" },
  party: { src: party.url, alt: "Children celebrating a birthday around a cake" },
  friends: { src: friends.url, alt: "Three children laughing together between games" },
  partyextra: { src: partyextra.url, alt: "Children gathered around a birthday cake in the party room" },
  social: { src: social.url, alt: "Two children enjoying scarf play along a low padded beam" },
  beginner: { src: beginner.url, alt: "Coach leading young gymnasts in an arms-up warmup" },
  play: { src: play.url, alt: "Child enjoying a colorful indoor slide" },
  tucoach: { src: tucoach.url, alt: "Coach explaining arm positions beside a padded trampoline lane" },
  prehero: { src: prehero.url, alt: "Young child smiling while balancing on a low beam" },
  preroom: { src: preroom.url, alt: "Colorful low equipment and mats in the preschool room" },
  rehero: { src: rehero.url, alt: "Coach supervising a young gymnast at a bar" },
  careerhero: { src: careerhero.url, alt: "Coach explaining an activity to children beside padded equipment" },
  boys: { src: boys.url, alt: "Two boys practicing with low round gymnastics equipment" },
  nihero: { src: nihero.url, alt: "Child stepping across colorful padded obstacles" },
  obstacles: { src: obstacles.url, alt: "Children using the monkey bars and hanging obstacles above thick padding" },
  ring: { src: ring.url, alt: "Child gripping a yellow obstacle ring above thick padding" },
  tuhero: { src: tuhero.url, alt: "Young athlete moving along the blue tumbling track" },
  facility: { src: facility.url, alt: "Blue tumbling tracks and colorful activity equipment in the indoor gym" },
  cahero: { src: cahero.url, alt: "Children enjoying an active game on a blue court" },
  totday: { src: totday.url, alt: "Toddler walking across low stepping stones with an adult nearby" },
  tot: { src: tot.url, alt: "Toddler taking a small step on a padded mat with adults nearby" },
  teaching: { src: teaching.url, alt: "Coach leading children in a standing warmup" },
  coaching: { src: coaching.url, alt: "Coach sharing an encouraging moment with a young gymnast" },
  viewing: { src: viewing.url, alt: "Gym activity with families visible on the viewing mezzanine" },
} as const;
export type PhotoKey = keyof typeof photos;
