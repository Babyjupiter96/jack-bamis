import { site } from "@/content/site";
import { asset } from "@/lib/base";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <span>
          &copy; {year} {site.name}
        </span>
        <span style={{ display: "flex", gap: "20px" }}>
          <a href={`mailto:${site.email}`}>Email</a>
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
              Résumé
            </a>
          )}
        </span>
      </div>
      <div className="wrap site-footer__colophon">
        <p>
          Built with Next.js, TypeScript, and React. Hand-written CSS, no UI
          library. Static-exported and deployed to GitHub Pages by GitHub
          Actions on every commit.{" "}
          <a href={`${site.links.github}/jack-bamis`} target="_blank" rel="noreferrer">
            Source
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
