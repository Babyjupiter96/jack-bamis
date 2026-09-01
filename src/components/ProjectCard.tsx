import Link from "next/link";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/base";
import { SplineScene } from "@/components/SplineScene";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
      aria-label={`${project.name} — case study`}
    >
      <div className="project-card__media">
        {project.heroScene ? (
          <SplineScene
            url={project.heroScene.url}
            label={project.name}
            interactive={false}
          />
        ) : project.imageReady ? (
          // Pre-sized static screenshots — a plain img keeps the basePath
          // handling in our hands (next/image drops it on static export).
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(project.image)}
            alt={`${project.name} website`}
            width={800}
            height={500}
            loading="lazy"
          />
        ) : (
          <span className="project-card__media-fallback" aria-hidden="true">
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
        )}
      </div>
      <span className="project-card__disc">{project.discipline}</span>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      <span className="project-card__link">
        Case study&nbsp;<span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
