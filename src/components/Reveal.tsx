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

/**
 * Fades + lifts its children into view once, when they cross the viewport.
 * Renders visible immediately when the user prefers reduced motion, and falls
 * back to visible if something goes wrong so content is never trapped hidden.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setEnabled(false);
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const reveal = () => setShown(true);

    // Already at/above the fold on mount — no animation needed.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);

    // Safety net: never leave content hidden if the observer misfires.
    const failsafe = window.setTimeout(reveal, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal={enabled ? (shown ? "in" : "out") : undefined}
      style={
        enabled
          ? ({
              transitionDelay: `${delay}ms`,
              "--reveal-y": `${y}px`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
