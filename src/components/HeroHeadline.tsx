/**
 * Home hero headline. Lines rise in on load via pure CSS (see globals.css:
 * `.hero__line`), so there's no hidden-until-JS state. The global
 * reduced-motion rule collapses the animation for users who ask for that.
 */
export function HeroHeadline() {
  return (
    <h1 className="hero__headline">
      <span className="hero__line">
        <span>Design, build,</span>
      </span>
      <span className="hero__line">
        <span>
          <span className="sheen">ship.</span>
        </span>
      </span>
    </h1>
  );
}
