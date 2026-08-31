import { site } from "@/content/site";

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
        </span>
      </div>
    </footer>
  );
}
