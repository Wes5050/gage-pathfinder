import heroVault from "@/assets/clinic/cc-hero-vault.jpg.asset.json";
import vault from "@/assets/clinic/cc-vault.jpg.asset.json";
import bars from "@/assets/clinic/cc-bars.jpg.asset.json";
import floorLeap from "@/assets/clinic/cc-floor-leap.jpg.asset.json";
import beam from "@/assets/clinic/cc-beam.jpg.asset.json";
import coachTeam from "@/assets/clinic/cc-coach-team.jpg.asset.json";
import barsPair from "@/assets/clinic/cc-bars-pair.jpg.asset.json";

/**
 * Licensed stock photos (Wikimedia Commons) for the Christmas Clinic page.
 * These are NOT GAGE athletes or coaches — alt text must never claim GAGE identity.
 */
export const clinicPhotos = {
  heroVault: { src: heroVault.url, alt: "Gymnast in a pink leotard pushing off a vault table during competition", credit: "Martin Rulsch, Wikimedia Commons — CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:2019-06-29_1st_FIG_Artistic_Gymnastics_JWCH_Women%27s_Apparatus_finals_Vault_(Martin_Rulsch)_040.jpg" },
  vault: { src: vault.url, alt: "Junior gymnast in a red leotard flying onto the vault table", credit: "Martin Rulsch, Wikimedia Commons — CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:2022-04-09_25th_Rheintalcup_2022_P6_Junior_competition_Subdivision_2_Vault_(Martin_Rulsch)_063.jpg" },
  bars: { src: bars.url, alt: "Gymnast supporting her body on the uneven bar with straight arms", credit: "J. Rachel Spencer — Public domain", href: "https://commons.wikimedia.org/wiki/File:Stockvault-gymnast-practicing203466.jpg" },
  floorLeap: { src: floorLeap.url, alt: "Gymnast in a red leotard performing a split leap during floor training", credit: "Martin Rulsch, Wikimedia Commons — CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:2019-06-26_1st_FIG_Artistic_Gymnastics_JWCH_Women%27s_Podium_Training_Floor_exercise_(Martin_Rulsch)_127.jpg" },
  beam: { src: beam.url, alt: "Gymnast holding a handstand on the balance beam", credit: "Miguel Angel Omaña Rojas — CC0", href: "https://commons.wikimedia.org/wiki/File:Canadian_gymnast_at_the_2020_Gymnix_Cup_beam_routine.jpg" },
  coachTeam: { src: coachTeam.url, alt: "Gymnastics coach talking with team gymnasts beside the vault", credit: "Erin Costa — CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:TWU_Gymnastics_(Vault)_Coach_(5694026903).jpg" },
  barsPair: { src: barsPair.url, alt: "Two gymnasts preparing on the uneven bars with a coach nearby", credit: "TwoWings — Public domain", href: "https://commons.wikimedia.org/wiki/File:Two_Russian_gymnasts.JPG" },
} as const;
