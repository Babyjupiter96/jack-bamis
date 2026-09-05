import { asset } from "@/lib/base";

/**
 * The Perseus/Medusa plate, sliced and pinned to the left/right margins
 * beside the live-builds grid — same engraving as the hero backdrops, just
 * living in the gutter instead of behind the headline. Only shows once the
 * viewport is wide enough to have real margin to put it in.
 */
export function WorkFlank() {
  return (
    <div className="work-flank" aria-hidden="true">
      <img
        className="work-flank__img work-flank__img--left"
        src={asset("/media/perseus-medusa.jpg")}
        alt=""
        loading="lazy"
      />
      <img
        className="work-flank__img work-flank__img--right"
        src={asset("/media/perseus-medusa.jpg")}
        alt=""
        loading="lazy"
      />
    </div>
  );
}
