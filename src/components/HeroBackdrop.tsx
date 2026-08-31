import { asset } from "@/lib/base";

/**
 * The Perseus/Medusa plate behind a hero — the same signature treatment as the
 * Forge site: a classical engraving pushed almost to black, with a warm glow
 * and fine grain over it. Purely decorative.
 */
export function HeroBackdrop() {
  return (
    <div className="hero__backdrop" aria-hidden="true">
      <img
        className="hero__backdrop-img"
        src={asset("/media/perseus-medusa.jpg")}
        alt=""
        loading="eager"
      />
    </div>
  );
}
