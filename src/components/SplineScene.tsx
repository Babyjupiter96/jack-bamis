"use client";

import { useEffect, useRef, useState, type FC } from "react";

/* The <spline-viewer> web component isn't typed for JSX — alias it. */
const SplineViewer = "spline-viewer" as unknown as FC<{
  url?: string;
  "loading-anim-type"?: string;
  "events-target"?: "local" | "global";
}>;

const VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js";

let viewerPromise: Promise<void> | null = null;

/** Load the Spline viewer module once, shared across instances. */
function loadViewer(): Promise<void> {
  if (viewerPromise) return viewerPromise;
  viewerPromise = new Promise((resolve, reject) => {
    if (customElements.get("spline-viewer")) return resolve();
    const s = document.createElement("script");
    s.type = "module";
    s.src = VIEWER_SRC;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("spline-viewer failed to load"));
    document.head.appendChild(s);
  });
  return viewerPromise;
}

type Props = {
  /** A .splinecode scene URL. */
  url: string;
  /** Accessible label. */
  label: string;
  /**
   * When true (case-study hero), the scene is a control that opens the Forge
   * chat widget. When false (project card), it's a moving visual only — the
   * parent handles the click.
   */
  interactive?: boolean;
};

/**
 * The Forge AI SDR robot — the same Spline scene that runs on
 * weforgedigitalai.com. As a case-study hero it opens the chat widget embedded
 * site-wide (which listens for the `forge-widget:open` event). As a card visual
 * it just moves.
 *
 * Falls back to a still frame when the viewer can't load or the visitor asked
 * for reduced motion.
 */
export function SplineScene({ url, label, interactive = true }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "static">("loading");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setState("static");
      return;
    }

    let cancelled = false;
    loadViewer()
      .then(() => !cancelled && setState("ready"))
      .catch(() => !cancelled && setState("static"));

    return () => {
      cancelled = true;
    };
  }, []);

  // Once the viewer is mounted, poll its shadow root and drop the watermark.
  useEffect(() => {
    if (state !== "ready") return;
    return hideSplineLogo(() => hostRef.current);
  }, [state]);

  const openChat = () => {
    document.dispatchEvent(new CustomEvent("forge-widget:open"));
  };

  const control = interactive
    ? {
        role: "button" as const,
        tabIndex: 0,
        "aria-label": label,
        onClick: openChat,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openChat();
          }
        },
      }
    : { "aria-hidden": true as const };

  return (
    <div
      ref={hostRef}
      className="scene"
      data-state={state}
      data-interactive={interactive ? "" : undefined}
      {...control}
    >
      {state === "ready" && (
        <SplineViewer
          url={url}
          loading-anim-type="none"
          // Default is "local" (canvas-only); "global" makes the robot's
          // look-at track the cursor across the whole page, like it does on
          // weforgedigitalai.com. Spline listens on window for this, so it
          // still works under the card's pointer-events: none.
          events-target="global"
        />
      )}
      {state !== "ready" && (
        <div className="scene__fallback" aria-hidden="true">
          <span className="scene__orb" />
        </div>
      )}
      {interactive && (
        <span className="scene__hint" aria-hidden="true">
          Chat with the SDR &rarr;
        </span>
      )}
    </div>
  );
}

/**
 * The viewer injects a Spline watermark into its shadow root, some frames
 * after the element mounts. Poll for it, hide it, and keep it hidden.
 * Returns a cleanup that stops the poll and observer.
 */
function hideSplineLogo(getHost: () => HTMLElement | null): () => void {
  let tries = 0;
  let timer: number | undefined;
  let observer: MutationObserver | undefined;

  const tick = () => {
    const sv = getHost()?.querySelector("spline-viewer") as
      | HTMLElement
      | undefined;
    const logo = sv?.shadowRoot?.getElementById("logo") ?? null;
    if (logo) {
      logo.style.display = "none";
      observer = new MutationObserver(() => {
        if (logo.style.display !== "none") logo.style.display = "none";
      });
      observer.observe(logo, { attributes: true, attributeFilter: ["style"] });
      return;
    }
    if (++tries < 200) timer = window.setTimeout(tick, 100);
  };
  tick();

  return () => {
    if (timer) window.clearTimeout(timer);
    observer?.disconnect();
  };
}
