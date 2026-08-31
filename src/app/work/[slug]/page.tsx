import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Reveal } from "@/components/Reveal";
import { VideoFrame } from "@/components/VideoFrame";
import { asset } from "@/lib/base";
import { HeroBackdrop } from "@/components/HeroBackdrop";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="case-hero">
        <HeroBackdrop />
        <div className="wrap">
          <Link href="/work" className="back">
            &larr; All work
          </Link>
          <h1>{project.name}</h1>
          <p className="case-hero__tagline">{project.tagline}</p>
        </div>
      </section>

      <div className="wrap">
        <dl className="case-meta">
          <div>
            <dt>Discipline</dt>
            <dd>{project.discipline}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>
              <ul>
                {project.role.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Live site</dt>
            <dd>
              {project.liveConfirmed ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {project.liveUrl.replace(/^https?:\/\//, "")} &#8599;
                </a>
              ) : (
                <span className="note">Link pending confirmation</span>
              )}
            </dd>
          </div>
        </dl>

        <div className="case-body">
          <Reveal as="div">
            <p className="lede">{project.summary}</p>
          </Reveal>

          {project.slug === "forge-digital" && (
            <Reveal as="div">
              <p className="note">
                The chat widget in the corner of this site is the one I built for
                Forge — same script, same backend. Open it.
              </p>
            </Reveal>
          )}

          <Reveal as="div">
            <h2>Context</h2>
            <p>{project.context}</p>
          </Reveal>

          <Reveal as="div">
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </Reveal>

          {project.mediaReady && project.media && project.media.length > 0 && (
            <Reveal as="div">
              {project.media.map((m) => (
                <figure className="case-media" key={m.src}>
                  {m.type === "video" ? (
                    <VideoFrame
                      src={asset(m.src)}
                      poster={m.poster ? asset(m.poster) : undefined}
                      label={m.caption}
                      ratio={m.ratio}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={asset(m.src)} alt={m.caption} />
                  )}
                  <figcaption>{m.caption}</figcaption>
                </figure>
              ))}
            </Reveal>
          )}

          <Reveal as="div">
            <h2>What I did</h2>
            <ul className="work-steps">
              {project.work.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div">
            <h2>Stack</h2>
            <div className="pill-row">
              {project.stack.map((s) => (
                <span className="pill" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="div">
            <h2>What shipped</h2>
            <ul className="outcome-list">
              {project.outcome.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <section className="section--tight wrap">
        <Reveal className="contact-band">
          <h2>Want something like this?</h2>
          <p>I build brand, site, and automation end to end. Let's talk.</p>
          <Link href="/contact" className="btn btn--accent">
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
