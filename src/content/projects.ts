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
    tagline: "A web practice that ships the system behind the website — not just the website.",
    discipline: "Brand · Web · AI Automation",
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
    stack: ["HTML", "CSS", "Vanilla JS", "Spline (3D hero)", "LLM API", "GitHub Pages", "Custom domain"],
    summary:
      "Forge Digital is my own web design practice. I designed the brand, built the marketing site by hand, and built a custom AI chat widget that answers questions, qualifies leads, and moves people toward booking a call — deployed and live.",
    context:
      "I wanted a real vehicle for client work with a point of view, not a freelancer profile. Forge is that: a small practice built around one idea — a website is only the front of a revenue system, and most service businesses are missing the rest.",
    problem:
      "The site had to do two jobs at once: read as a credible studio a business would hand a project to, and prove the automation claim rather than just assert it. A static brochure site would have undercut the pitch.",
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
      "Working AI chat widget in production — a functional integration, not a mockup.",
      "Serves as the front door for real client engagements.",
    ],
    image: "/work/forge-digital.jpg",
    imageReady: false,
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
    slug: "coeur-damour",
    name: "Coeur d'Amour Caregiver Services",
    tagline: "A brand and site from zero for a new in-home caregiving business.",
    discipline: "Brand Kit · Website · Copy",
    year: "2025",
    role: [
      "Brand kit (logo direction, palette, type)",
      "Full site design & build",
      "Copywriting",
      "Accessibility & mobile-first layout",
    ],
    liveUrl: "https://babyjupiter96.github.io/coeur-damour",
    liveConfirmed: true,
    stack: ["HTML", "CSS", "Vanilla JS", "GitHub Pages", "Custom domain"],
    summary:
      "A brand-new caregiving business with no logo, no site, and no way for families to find it. I built the brand kit and a six-page site from the ground up, wrote every line of copy, and made the whole thing warm, calm, and easy to read on a phone.",
    context:
      "The business was starting from nothing — word of mouth only. Families researching in-home care had no page to land on and nothing to vet.",
    problem:
      "In-home care is a trust decision, often made under stress. The site had to feel reassuring rather than clinical, load fast on any device, and make the contact path obvious for a caregiver or family member who is not tech-comfortable.",
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
    imageReady: false,
  },
  {
    slug: "aphani-solutions",
    name: "Aphani Solutions",
    tagline: "A brand system and full site for a sales and revenue consultancy.",
    discipline: "Brand System · Full Build · Copy",
    year: "2025",
    role: [
      "Brand system from scratch",
      "Full multi-page site design & build",
      "Copywriting",
      "Deployment",
    ],
    // TODO: confirm the live URL with Cameron and set liveConfirmed to true.
    liveUrl: "https://aphanisolutions.com",
    liveConfirmed: false,
    stack: ["HTML", "CSS", "Vanilla JS", "Node (server component)", "Vercel"],
    summary:
      "A paying client — a sales and revenue consultancy that needed a site matching the caliber of the team behind it. I built the brand system, the full multi-page site, and the copy from scratch.",
    context:
      "The team was closing serious work, but the web presence did not reflect that. Prospects who looked them up found nothing that signaled the same level.",
    problem:
      "The site had to carry authority immediately — a prospect referred to the firm should land on it and feel they are dealing with people who operate at their level, not a template.",
    work: [
      {
        title: "Designed the brand system",
        detail:
          "Logo direction, a confident and restrained palette, and a typographic system built to feel senior rather than startup.",
      },
      {
        title: "Built the full site",
        detail:
          "Home, Services, Results, Partnership, About, and Contact — a multi-page hand-coded build with a small Node server component for form handling, deployed on Vercel.",
      },
      {
        title: "Wrote the copy",
        detail:
          "Positioning and page copy aimed at buyers who can smell filler — short, direct, outcome-led.",
      },
    ],
    outcome: [
      "Delivered as a paid client engagement.",
      "Brand system + multi-page site + copy, built end to end.",
      "Deployed on Vercel with form handling.",
    ],
    image: "/work/aphani-solutions.jpg",
    imageReady: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
