import Link from "next/link";

/** Fills the trailing slot in the work grid with a call to action. */
export function ContactCard() {
  return (
    <Link href="/contact" className="project-card project-card--cta">
      <span className="project-card__disc">Next</span>
      <h3>Have a project, or a role to fill?</h3>
      <p>
        I build brand, front end, and automation end to end — and I&apos;m open
        to junior and contract work.
      </p>
      <span className="project-card__link">
        Get in touch&nbsp;<span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
