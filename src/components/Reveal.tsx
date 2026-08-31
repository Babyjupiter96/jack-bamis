"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied as an inline transition-delay. */
  delay?: number;
  /** Element to render. Defaults to div. */
  as?: ElementType;
  className?: string;
  /** Slide distance in px. Default 24. */
  y?: number;
};

type State = "static" | "out" | "in";

/**
 * Fade + lift into view once, on scroll.
 *
 * Safety model: the element renders fully visible by default (no styles at
 * all). Only after JS confirms the element starts *below* the fold does it
 * get hidden and observed — so server render, no-JS, reduced-motion, a failed
 * observer, or a fast full-page screenshot all leave the content visible.
 * Hiding a below-the-fold element produces no visible flash.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    // Already in view (or above it) — leave it alone, no animation.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    setState("out");

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) {
          setState("in");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);

    // Failsafe: never leave content hidden if the observer misbehaves.
    const failsafe = window.setTimeout(() => {
      setState("in");
      io.disconnect();
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal={state === "static" ? undefined : state}
      style={
        state === "static"
          ? undefined
          : ({
              transitionDelay: `${delay}ms`,
              "--reveal-y": `${y}px`,
            } as React.CSSProperties)
      }
    >
      {children}
    </Tag>
  );
}
