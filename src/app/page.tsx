import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { HeroHeadline } from "@/components/HeroHeadline";
import { HeroBackdrop } from "@/components/HeroBackdrop";

const doItems = [
  {
    title: "Design",
    body: "Brand, type, layout. The rules that make a small business look like it belongs.",
  },
  {
    title: "Build",
    body: "Hand-coded. Responsive, accessible, fast. React when the job earns it, plain HTML when it doesn't.",
  },
  {
    title: "Automate",
    body: "Forms, follow-up, AI chat. The site keeps working after the visitor leaves.",
  },
];

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Accessibility",
  "Vercel",
  "Git",
  "LLM APIs",
  "Performance",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroBackdrop />
        <div className="wrap">
          <span className="eyebrow">{site.role}</span>
          <HeroHeadline />
          <Reveal delay={360}>
            <p className="hero__sub">{site.tagline}</p>
            <p className="hero__note">{site.note}</p>
            <p className="hero__avail">{site.availability}</p>
            <div className="hero__actions">
              <Link href="/work" className="btn">
                See the work
              </Link>
              <Link href="/contact" className="btn btn--accent">
                Get in touch
              </Link>
            </div>
            <span className="scroll-cue">Scroll</span>
          </Reveal>
        </div>
      </section>

      <Marquee items={tools} />

      <section className="section wrap">
        <Reveal>
          <SectionHead num="01" title="Builds" />
          <p className="section-intro">
            Sites I designed and built start to finish. Every one is live — the
            links go to the real thing, not a case-study mockup.
          </p>
        </Reveal>
        <div className="work-grid work-grid--two">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          <Reveal delay={projects.length * 90}>
            <ContactCard />
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <Reveal>
            <SectionHead num="02" title="What I do" />
          </Reveal>
        </div>
        <div className="do-grid">
          {doItems.map((d, i) => (
            <Reveal key={d.title} className="do-cell" delay={i * 90}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <Reveal>
          <SectionHead num="03" title="About" />
          <p className="about-lede">
            Self-taught. Everything here is client work.
          </p>
          <p
            style={{
              color: "var(--ink-soft)",
              maxWidth: "54ch",
              marginTop: "20px",
            }}
          >
            I came to the web through sales and revenue operations — I kept
            needing pages and systems built, so I built them. Now it&apos;s the
            work. Three sites are live. I want a junior or contract seat on a
            team with people to learn from.
          </p>
          <Link href="/about" className="btn" style={{ marginTop: "24px" }}>
            More about me
          </Link>
        </Reveal>
      </section>

      <section className="section--tight wrap">
        <Reveal className="contact-band">
          <h2>Get in touch.</h2>
          <p>
            Hiring for a junior or contract role, or need a site built? Email is
            fastest. I answer within a day.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn--accent">
            {site.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
