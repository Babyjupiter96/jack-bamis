import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Sites designed and built start to finish. Every one is live — the links go to the real thing.",
};

export default function WorkPage() {
  return (
    <>
      <section className="hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">Builds</span>
          <h1>Everything here is live.</h1>
          <p className="hero__sub">
            Real businesses, not exercises. Each case study covers the brief,
            what I did, the stack, and what shipped — and the link goes to the
            site itself.
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
