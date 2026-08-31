import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies — brand systems, websites, and automation built end to end for service businesses.",
};

export default function WorkPage() {
  return (
    <>
      <section className="hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">Work</span>
          <h1>Shipped, live, and running today.</h1>
          <p className="hero__sub">
            Every project below is a real business. Each case study covers the
            brief, exactly what I did, the stack, and what shipped.
          </p>
        </div>
      </section>

      <section className="section wrap">
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
    </>
  );
}
