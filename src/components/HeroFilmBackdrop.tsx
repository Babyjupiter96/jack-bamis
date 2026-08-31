"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient film-grain video sitting behind a hero, in the spirit of the
 * Perseus/Medusa plate on the Forge site: heavily darkened, desaturated,
 * low-opacity — texture and motion, not content. Falls back to the poster
 * still when the user prefers reduced motion.
 */
export function HeroFilmBackdrop({
  poster = "/media/athletics-bg.jpg",
}: {
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setMotionOk(!reduce);
    if (!reduce) ref.current?.play().catch(() => {});
  }, []);

  return (
    <div className="hero-film" aria-hidden="true">
      {motionOk ? (
        <video
          ref={ref}
          className="hero-film__media"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/media/athletics-bg.webm" type="video/webm" />
          <source src="/media/athletics-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="hero-film__media" src={poster} alt="" />
      )}
      <div className="hero-film__wash" />
      <div className="hero-film__grain" />
    </div>
  );
}
