import type { Metadata } from "next";
import { site } from "@/content/site";
import { commits, branches, languages } from "@/content/career";
import { Reveal } from "@/components/Reveal";
import { HeroFilmBackdrop } from "@/components/HeroFilmBackdrop";
import { asset } from "@/lib/base";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Career as a commit log — football, then revenue operations, then the web.",
};

const branchColor: Record<string, string> = {
  web: "var(--gold)",
  "revenue-ops": "var(--steel)",
  athletics: "#a08a5c",
  main: "var(--muted)",
};

// Language bar uses its own labels; map each to a branch colour.
const langColor: Record<string, string> = {
  "Front-End & Design": "var(--gold)",
  "Revenue Operations": "var(--steel)",
  Athletics: "#a08a5c",
};

export default function CareerPage() {
  return (
    <>
      <section className="hero">
        <HeroFilmBackdrop />
        <div className="wrap">
          <span className="eyebrow">Career</span>
          <div className="repo-line">
            <span className="repo-name">
              jack-bamis<span>/</span>career
            </span>
            <span className="repo-badge">Public</span>
          </div>
          <p className="hero__sub">
            Football, then revenue operations, then the web. Read it as a commit
            log — newest first.
          </p>

          <div className="lang-bar" aria-hidden="true">
            {languages.map((l) => (
              <span
                key={l.label}
                style={{
                  width: `${l.pct}%`,
                  background: langColor[l.label] ?? "var(--muted)",
                }}
              />
            ))}
          </div>
          <ul className="lang-key">
            {languages.map((l) => (
              <li key={l.label}>
                <span
                  className="dot"
                  style={{ background: langColor[l.label] ?? "var(--muted)" }}
                />
                {l.label} <span className="pct">{l.pct}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap">
        <ol className="commit-log">
          {commits.map((c, i) => (
            <Reveal as="li" key={c.hash + c.title} delay={Math.min(i, 6) * 60}>
              <div className="commit__rail">
                <span
                  className="commit__dot"
                  style={{ background: branchColor[branches[c.branch]] }}
                />
              </div>
              <div className="commit__body">
                <div className="commit__head">
                  <h2>{c.title}</h2>
                  <code className="commit__hash">{c.hash.slice(0, 7)}</code>
                </div>
                <p className="commit__meta">
                  <span
                    className="commit__branch"
                    style={{ color: branchColor[branches[c.branch]] }}
                  >
                    {branches[c.branch]}
                  </span>
                  <span>{c.org}</span>
                  <span>{c.date}</span>
                  {c.place && <span>{c.place}</span>}
                </p>
                <p className="commit__detail">{c.detail}</p>
                {c.link && (
                  <a
                    className="commit__link"
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Public record ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="repo-foot">
          <p>
            Code lives on{" "}
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            . Résumé as a{" "}
            <a href={asset(site.links.resume)} target="_blank" rel="noreferrer">
              PDF
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
