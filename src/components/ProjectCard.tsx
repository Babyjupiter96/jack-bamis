import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
      aria-label={`${project.name} — case study`}
    >
      <div className="project-card__media">
        {project.imageReady ? (
          <Image
            src={project.image}
            alt={`${project.name} website`}
            width={800}
            height={500}
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
        Read the case study&nbsp;<span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
