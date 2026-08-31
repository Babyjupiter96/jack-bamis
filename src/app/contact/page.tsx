import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about junior / contract web roles or a site build.`,
};

export default function ContactPage() {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow">Contact</span>
        <h1>Tell me what you're working on.</h1>
        <p className="hero__sub">
          Hiring for a junior or contract web role, or need a site built? Email
          is the fastest way to reach me — I reply within a day.
        </p>

        <p style={{ marginTop: "32px" }}>
          <a
            href={`mailto:${site.email}`}
            className="btn btn--accent"
            style={{ fontSize: "13px" }}
          >
            {site.email}
          </a>
        </p>

        <div className="contact-detail">
          <span>{site.location}</span>
          {site.links.github && (
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {site.links.linkedin && (
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {site.links.resume && (
            <a href={site.links.resume} target="_blank" rel="noreferrer">
              Résumé (PDF)
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
