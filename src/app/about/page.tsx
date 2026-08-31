import type { Metadata } from "next";
import Link from "next/link";
import { site, skills } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { HeroFilmBackdrop } from "@/components/HeroFilmBackdrop";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught designer and front-end developer in Phoenix. Everything on the site is client work. D1 football, then sales, then this.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <HeroFilmBackdrop />
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1 className="about-lede">
            Self-taught. Everything here is client work.
          </h1>
          <p className="hero__film-note">
            Played{" "}
            <a
              href="https://govandals.com/sports/football/roster/jack-bamis/4910"
              target="_blank"
              rel="noreferrer"
            >
              Division I football at Idaho
            </a>{" "}
            &mdash; running back and linebacker &mdash; plus a freshman year in
            track as a jumper. The habit stuck: watch the film, find what
            isn&apos;t working, run it back better.
          </p>
        </div>
      </section>

      <section className="section wrap">
        <div className="about-cols">
          <Reveal as="div">
            <h2 className="about-sub">How I got here</h2>
            <p>
              Business degree from Idaho, Spanish minor, four years of football
              in the middle of it. Then sales: cold outbound at a training
              company, and revenue operations for a fitness brand where I built
              the CRM, the funnels, and the automations myself. That&apos;s where
              the web work started. I kept needing pages and systems built, so I
              built them — and then it was the thing I wanted to do.
            </p>

            <h2 className="about-sub">What I do now</h2>
            <p>
              Client sites, start to finish. Design in Figma, build by hand,
              write the copy, wire up the forms and follow-up. Three are live. I
              reach for React and Next when a project earns it and plain HTML
              when it doesn&apos;t.
            </p>

            <h2 className="about-sub">What I want</h2>
            <p>
              A junior or contract seat on a team with people to learn from —
              code review, a real PR workflow, someone senior catching my
              mistakes before a client does. Working solo has a ceiling and
              I&apos;ve found it. I pick things up fast and I don&apos;t mind the
              tedious parts: the accessibility pass, the responsive edge cases,
              the performance budget.
            </p>

            <h2 className="about-sub">Off the clock</h2>
            <p>
              Rebuilding something of mine to try a new tool, or reading other
              people&apos;s source to see how they solved a problem.
            </p>

            <Link href="/contact" className="btn" style={{ marginTop: "12px" }}>
              Get in touch
            </Link>
          </Reveal>

          <Reveal as="div" delay={120}>
            {skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li className="pill" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
