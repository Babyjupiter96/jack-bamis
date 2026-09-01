export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Short label shown on cards, e.g. "Brand + Web + AI" */
  discipline: string;
  year: string;
  /** Your specific contribution — be precise, recruiters ask about this. */
  role: string[];
  liveUrl: string;
  /** Set false until you've confirmed the link is live. Keeps you honest. */
  liveConfirmed: boolean;
  stack: string[];
  /** One-paragraph summary for cards + case-study intro. */
  summary: string;
  /** The situation before you started. */
  context: string;
  /** The concrete problem the site had to solve. */
  problem: string;
  /** What you actually did, as discrete moves. */
  work: { title: string; detail: string }[];
  /** Outcomes / what shipped. Keep factual — no invented metrics. */
  outcome: string[];
  /** Path under /public/work for the hero image. Add the file, then flip. */
  image: string;
  imageReady: boolean;
  /** Screen recordings / stills shown inside the case study. */
  media?: MediaItem[];
  /** Flip to true once the media files are actually in /public. */
  mediaReady?: boolean;
  /** An interactive Spline scene. Used as the card visual (a moving thumbnail)
   *  and as the hero of the case study. */
  heroScene?: { url: string; label: string; caption: string };
  /** A pipeline diagram, rendered as its own section in the case study. */
  flow?: { stage: string; note: string }[];
};

export type MediaItem = {
  type: "video" | "image";
  /** Path under /public, e.g. "/media/forge-demo.mp4". */
  src: string;
  /** Poster frame for videos, path under /public. */
  poster?: string;
  caption: string;
  /** Aspect ratio as width/height. 16/9 default; 9/16 for phone clips. */
  ratio?: number;
};

export const projects: Project[] = [
  {
    slug: "forge-digital",
    name: "Forge Digital",
    tagline: "My practice. Brand, site, and an AI chat widget that starts the conversation a static page can't.",
    discipline: "Founder · Brand + Build · AI",
    year: "2025",
    role: [
      "Founder & sole builder",
      "Brand system & visual design",
      "Front-end build (hand-coded)",
      "Custom AI chat widget (design + integration)",
      "Copywriting & positioning",
    ],
    liveUrl: "https://weforgedigitalai.com",
    liveConfirmed: true,
    stack: [
      "HTML5",
      "CSS3 (hand-written)",
      "JavaScript (ES6+)",
      "React (chat widget)",
      "LLM API",
      "Custom script embed",
      "Spline (3D hero)",
      "Google Fonts",
      "Git",
      "GitHub Pages",
      "Custom domain / DNS",
    ],
    summary:
      "My own practice. I designed the brand, built the site by hand, and built a custom AI chat widget wired to an LLM — it answers questions, qualifies leads, and books calls. The widget is the point: a static site tells you about a business; this one starts the conversation.",
    context:
      "I wanted a real vehicle for client work with a point of view, not a freelancer profile. One idea: a website is the front of a system, and most small businesses are missing the rest of it.",
    problem:
      "Two jobs at once — read as a studio a business would hand a project to, and prove the automation claim instead of asserting it. A static brochure site undercuts that pitch by existing.",
    work: [
      {
        title: "Built the brand system",
        detail:
          "Dark editorial palette, a three-typeface system (Cinzel for numerals and labels, Cormorant Garamond for display, Jost for UI), an animated gold sheen used as a restrained signature accent, and a numbered-section layout language that carries across every page.",
      },
      {
        title: "Hand-coded the multi-page site",
        detail:
          "No page builder. Semantic HTML, a single maintained stylesheet, responsive from 320px up, keyboard-navigable, with a 3D Spline hero that degrades cleanly on slower devices.",
      },
      {
        title: "Designed and integrated the AI chat widget",
        detail:
          "A custom SDR chat widget wired to an LLM backend — it greets, answers service questions, qualifies the lead, and hands off warm. Designed the widget UI to sit inside the brand rather than look bolted on.",
      },
      {
        title: "Wrote the positioning and all copy",
        detail:
          "The Attract → Convert → Follow Up → Close → Measure framing, section copy, and CTAs. The writing is doing as much work as the design.",
      },
    ],
    outcome: [
      "Live at weforgedigitalai.com with a custom domain.",
      "A working AI SDR in production — chat, qualification, deterministic scoring, and a Calendly hand-off. Not a mockup.",
      "Serves as the front door for real client engagements — and my own testbed for AI and API work.",
    ],
    image: "/work/forge-digital.jpg",
    imageReady: true,
    // Screen recordings. Drop the files in /public/media and flip `ready` via
    // renaming — see README. Set ratio to 9/16 for a phone-screen recording.
    mediaReady: false,
    media: [
      {
        type: "video",
        src: "/media/forge-clip-1.mp4",
        poster: "/media/forge-clip-1.jpg",
        caption: "Forge Digital — walkthrough",
        ratio: 16 / 9,
      },
      {
        type: "video",
        src: "/media/forge-clip-2.mp4",
        poster: "/media/forge-clip-2.jpg",
        caption: "AI chat widget in action",
        ratio: 9 / 16,
      },
    ],
  },
  {
    slug: "forge-ai-sdr",
    name: "Forge AI SDR",
    tagline:
      "The AI that answers, qualifies, and books — built into the Forge site and running in production.",
    discipline: "AI · APIs · Automation",
    year: "2025",
    role: [
      "Conversation & qualification design",
      "AI chat widget (React)",
      "LLM + REST API integration",
      "Deterministic lead scoring",
      "Booking hand-off",
    ],
    liveUrl: "https://weforgedigitalai.com",
    liveConfirmed: true,
    stack: [
      "LLM APIs (OpenAI · Gemini)",
      "REST APIs",
      "Tool / function calling",
      "React",
      "TypeScript",
      "Prisma / Postgres",
      "Calendly integration",
      "CORS + rate limiting",
      "Turborepo monorepo",
      "Vercel",
    ],
    summary:
      "An AI SDR built into the Forge site: a chat widget that greets visitors, answers questions, works through a qualification conversation, and hands qualified leads a booking link. My own build — the robot on the homepage card is the real thing, and it's running in production.",
    context:
      "Forge Digital's pitch is that a website is the front of a system, not the whole thing. The AI SDR is the proof — the part that keeps working after the visitor stops reading.",
    problem:
      "An LLM is good at conversation and at pulling structured facts out of one. It is not what should decide whether someone is a real lead. The build had to use the model for what it's good at and keep the qualification gate deterministic and auditable.",
    work: [
      {
        title: "AI chat interface",
        detail:
          "A React widget — launcher, message thread, typing and error states — bundled to one script other sites drop in with two data attributes. Themed per site from a config endpoint; visitor identity persists in localStorage.",
      },
      {
        title: "LLM + REST API integration",
        detail:
          "The widget calls a POST /api/chat endpoint that fronts a swappable AI provider (OpenAI or Gemini) behind one interface. Streaming replies, tool / function calling, capped at four tool rounds per message. Persona and system prompt are per-site config.",
      },
      {
        title: "Lead qualification",
        detail:
          "The model calls an update_lead_profile tool to record what it learns — business type, lead sources, monthly volume, budget, timeline, decision-maker, and more. A pure scoring function (no AI) turns that profile into a score and a status: needs info, qualified, or disqualified.",
      },
      {
        title: "Booking hand-off",
        detail:
          "Once a lead clears the qualified threshold, the reply carries a Calendly scheduling link with the visitor's name and email pre-filled. Below the threshold it keeps asking questions instead of pushing a call.",
      },
      {
        title: "Backend & data",
        detail:
          "A Turborepo monorepo — widget, dashboard, and shared ai / booking / db packages. Every conversation, message, and lead is written to Postgres via Prisma, scoped per organisation. Per-site origin allow-list, CORS locked to the calling site, per-visitor rate limiting. Deployed on Vercel.",
      },
    ],
    outcome: [
      "Running in production on weforgedigitalai.com — and embedded in the corner of this portfolio, same script, same backend.",
      "The model handles conversation and structured extraction; a deterministic function owns the qualified / not-qualified decision.",
      "Qualified leads get a pre-filled Calendly link; everything is logged to a per-org dashboard.",
    ],
    image: "/work/forge-digital.jpg",
    imageReady: false,
    heroScene: {
      url: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
      label: "The Forge AI SDR — click to open the chat",
      caption:
        "The SDR, as it runs on weforgedigitalai.com. Click it to open the same widget docked in the corner of this page.",
    },
    flow: [
      { stage: "Visitor", note: "Lands on the site, opens the chat" },
      { stage: "AI SDR chat", note: "React widget, embedded with a script tag" },
      { stage: "LLM", note: "OpenAI / Gemini via a REST endpoint, tool-calling" },
      {
        stage: "Lead qualification",
        note: "Model records profile fields; a deterministic function scores them",
      },
      { stage: "Threshold gate", note: "Needs info · qualified · disqualified" },
      { stage: "Booking", note: "Qualified leads get a pre-filled Calendly link" },
      {
        stage: "Dashboard",
        note: "Conversation + lead saved to Postgres, scoped per org",
      },
    ],
  },
  {
    slug: "coeur-damour",
    name: "Coeur d'Amour Caregiver Services",
    tagline: "Brand and six pages from nothing. In-home care is a trust decision — the site had to feel like one.",
    discipline: "Client · Brand Kit · Build",
    year: "2025",
    role: [
      "Brand kit (logo direction, palette, type)",
      "Full site design & build",
      "Copywriting",
      "Accessibility & mobile-first layout",
    ],
    liveUrl: "https://coeurdamourcare.com",
    liveConfirmed: true,
    stack: [
      "HTML5",
      "CSS3 (hand-written)",
      "JavaScript (ES6+)",
      "Responsive / mobile-first",
      "Semantic markup",
      "WCAG AA contrast",
      "Google Fonts",
      "Git",
      "GitHub Pages",
      "Custom domain / DNS",
    ],
    summary:
      "A new caregiving business with no logo and no site. I built the brand kit and six pages from nothing, wrote every line of copy, and made it read warm on a phone. In-home care is a trust decision, usually made under stress — the site had to feel like one, not like a clinic.",
    context:
      "Starting from zero — word of mouth only. Families researching in-home care had no page to land on and nothing to vet.",
    problem:
      "It had to feel reassuring, not clinical. Load fast on any phone. And make the contact path obvious for someone who isn't tech-comfortable and is already worried.",
    work: [
      {
        title: "Built the brand kit",
        detail:
          "Name treatment, a warm and human palette, a typographic pairing that reads as caring but professional, and simple rules the owner can keep using in flyers and posts.",
      },
      {
        title: "Designed and built six pages",
        detail:
          "Home, About, Services, Why Choose Us, and Contact — structured around the questions a family actually asks, in the order they ask them.",
      },
      {
        title: "Wrote all the copy",
        detail:
          "Plain, warm language. No jargon, no filler — the kind of writing that lowers a worried person's guard.",
      },
      {
        title: "Made it accessible and mobile-first",
        detail:
          "Semantic structure, strong contrast, large tap targets, and a layout designed for a phone first since that is where most of this traffic comes from.",
      },
    ],
    outcome: [
      "Live and serving as the business's first real web presence.",
      "A reusable brand kit the owner can apply to print and social.",
      "A clear contact path for families and referral sources.",
    ],
    image: "/work/coeur-damour.jpg",
    imageReady: true,
  },
  {
    slug: "aphani-solutions",
    name: "Aphani Solutions",
    tagline: "Brand system, pages, and copy for a sales consultancy. It had to carry the authority the team already has in the room.",
    discipline: "Client · Brand System · Design",
    year: "2025",
    role: [
      "Brand system from scratch",
      "Site design & information architecture",
      "Front-end build (first version, hand-coded)",
      "Copywriting",
    ],
    liveUrl: "https://aphanisolutions.com",
    liveConfirmed: true,
    stack: [
      "Brand system",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress (live site — client-managed)",
      "Calendly",
      "Custom domain / DNS",
    ],
    summary:
      "Paid client. A sales and revenue consultancy closing serious deals with a web presence that didn't say so. I designed the brand, the pages, and the copy, and hand-coded the first version. The live site now runs on WordPress so the team can edit it themselves.",
    context:
      "The team was closing serious work. A prospect who looked them up found nothing that signaled the same level.",
    problem:
      "Authority on landing. A referred prospect should feel they're dealing with people who operate at their level — not a template.",
    work: [
      {
        title: "Designed the brand system",
        detail:
          "Logo direction, a confident and restrained palette, and a typographic system built to feel senior rather than startup.",
      },
      {
        title: "Designed and built the first version",
        detail:
          "Home, Services, Results, Partnership, About, and Contact — hand-coded from the Figma designs. The team later moved it onto WordPress for in-house editing; the brand, structure, and copy carried over.",
      },
      {
        title: "Wrote the copy",
        detail:
          "Positioning and page copy aimed at buyers who can smell filler — short, direct, outcome-led.",
      },
    ],
    outcome: [
      "Delivered as a paid client engagement.",
      "Brand system, IA, page design, and copy — all shipped and still in production.",
      "Live on WordPress with Calendly booking.",
    ],
    image: "/work/aphani-solutions.jpg",
    imageReady: true,
  },
  {
    slug: "jack-bamis-coaching",
    name: "Jack Bamis Coaching",
    tagline:
      "A landing page for my own coaching practice. Same design system as this site — different job.",
    discipline: "Own brand · Landing page · Build",
    year: "2026",
    role: [
      "Positioning & offer",
      "Landing-page design",
      "Front-end build (Next.js)",
      "Copywriting",
      "Static deploy on GitHub Pages",
    ],
    liveUrl: "https://babyjupiter96.github.io/jack-training",
    liveConfirmed: true,
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Hand-written CSS",
      "Static export",
      "GitHub Actions (CI/CD)",
      "GitHub Pages",
    ],
    summary:
      "A one-page site for my online 1-on-1 coaching — the trainer half of my background, sold like a product. Built on the same design system as the rest of my work: dark editorial, three-typeface, a classical plate behind the hero. Here it's David's Coronation of Napoleon — crown yourself.",
    context:
      "I coached and trained clients for years. The offer was real; there was nowhere to send people. I wanted to prove the system flexes — that the language I use for a web practice also carries a personal-training brand without starting from a blank page.",
    problem:
      "A coaching landing page lives or dies on the offer being legible in ten seconds: what it is, who it's for, what it costs, how to start. The design couldn't get in the way of that.",
    work: [
      {
        title: "Wrote the offer first",
        detail:
          "Hero, a one-line problem statement, a four-step method, the deliverables, credibility, two priced tiers, an application CTA — the order a prospect actually reads in.",
      },
      {
        title: "Reused the design system",
        detail:
          "Same tokens, type, sheen accent, and numbered sections as my portfolio and the Forge site. New content, near-zero new CSS — the point of having a system.",
      },
      {
        title: "Built it in Next.js and shipped it static",
        detail:
          "App Router, static export, no server. A GitHub Actions workflow builds and deploys to GitHub Pages on every push, same as this site.",
      },
    ],
    outcome: [
      "Live, with pricing and an application flow.",
      "Built on the shared design system — proof it flexes past a web-agency voice.",
      "Ships itself: push to main, GitHub Actions redeploys.",
    ],
    image: "/work/jack-training.jpg",
    imageReady: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
