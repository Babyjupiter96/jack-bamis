import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { HeroHeadline } from "@/components/HeroHeadline";

const doItems = [
  {
    title: "Design the brand",
    body: "Palette, type system, and layout rules that make a small business look like it belongs in the room.",
  },
  {
    title: "Build the front end",
    body: "Hand-coded, responsive, accessible, fast. React and Next.js, or plain HTML/CSS/JS when that's the right call.",
  },
  {
    title: "Wire the automation",
    body: "Forms, follow-up, and AI chat that respond to a lead before it goes cold — connected to the tools the business already uses.",
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
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">{site.role}</span>
          <HeroHeadline />
          <Reveal delay={360}>
            <p className="hero__sub">{site.tagline}</p>
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
          <SectionHead num="01" title="Selected work" />
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
            I&apos;m a self-taught designer and developer who ships real client
            work.
          </p>
          <p
            style={{
              color: "var(--ink-soft)",
              maxWidth: "52ch",
              marginTop: "20px",
            }}
          >
            Three live sites, a working AI chat widget in production, and my own
            web practice — all built end to end. I&apos;m looking for a junior or
            contract role where I can work alongside senior developers and get
            sharper faster.
          </p>
          <Link href="/about" className="btn" style={{ marginTop: "24px" }}>
            More about me
          </Link>
        </Reveal>
      </section>

      <section className="section--tight wrap">
        <Reveal className="contact-band">
          <h2>Let&apos;s talk.</h2>
          <p>
            Hiring for a junior or contract web role, or need a site built? I&apos;d
            like to hear about it.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn--accent">
            {site.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
