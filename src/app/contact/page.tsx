import type { Metadata } from "next";
import { site } from "@/content/site";
import { asset } from "@/lib/base";

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
        <h1>Tell me what you&apos;re building.</h1>
        <p className="hero__sub">
          Hiring for a junior or contract role, or need a site built? Email is
          fastest. I answer within a day.
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
            <a href={asset(site.links.resume)} target="_blank" rel="noreferrer">
              Résumé (PDF)
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
