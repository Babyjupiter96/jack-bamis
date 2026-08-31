"use client";

import { useEffect, useRef, useState } from "react";

type VideoFrameProps = {
  /** Path under /public, e.g. "/media/forge-demo.mp4". */
  src: string;
  /** Optional poster image under /public. */
  poster?: string;
  /** Accessible description of what the clip shows. */
  label: string;
  /** 16/9 by default; pass e.g. 9/16 for a phone recording. */
  ratio?: number;
};

/**
 * Muted, looping, inline autoplay clip with a manual play/pause control.
 * Only starts once it scrolls into view; respects reduced motion (starts
 * paused, shows the control).
 */
export function VideoFrame({ src, poster, label, ratio = 16 / 9 }: VideoFrameProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (inView && !reduce) {
      v.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [inView]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true), () => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video-frame" ref={wrapRef} style={{ aspectRatio: String(ratio) }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <button
        type="button"
        className="video-frame__toggle"
        onClick={toggle}
        aria-pressed={playing}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
