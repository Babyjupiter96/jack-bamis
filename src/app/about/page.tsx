import type { Metadata } from "next";
import Link from "next/link";
import { site, skills } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { HeroFilmBackdrop } from "@/components/HeroFilmBackdrop";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught web designer and front-end developer in Phoenix, AZ. Three live client sites and a working AI chat widget in production.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <HeroFilmBackdrop />
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1 className="about-lede">
            I learn by shipping — real sites, for real businesses.
          </h1>
          <p className="hero__film-note">
            {/* TODO: swap in your real sport + level. */}
            Competed in football before I wrote a line of code. Same habit
            carried over: watch the film, find what isn&apos;t working, run it
            back better.
          </p>
        </div>
      </section>

      <section className="section wrap">
        <div className="about-cols">
          <Reveal as="div">
            <p>
              I'm {site.name}, a web designer and front-end developer based in
              {" "}
              {site.location}. I taught myself by taking on client projects and
              building them all the way to launch — brand, front end, copy, and
              the automation behind the site.
            </p>
            <p>
              So far that's three live sites, a working AI chat widget running in
              production, and my own web practice, Forge Digital. I hand-code
              most of my work; I reach for React and Next.js when a project
              earns it, and plain HTML/CSS/JS when it doesn't.
            </p>
            <p>
              I'm looking for a junior or contract role now. Working solo has
              taken me a long way, but I want code review, a real PR workflow,
              and senior developers to learn from. I pick things up fast and I
              like the parts of the job other people find tedious — the
              accessibility pass, the responsive edge cases, the performance
              budget.
            </p>
            <p>
              Outside of client work I'm usually rebuilding something of mine to
              try a new tool, or reading through other people's source to see how
              they solved a problem.
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
