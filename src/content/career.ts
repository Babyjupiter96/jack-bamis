/**
 * Career as a commit log — the conceit borrowed from bryanthightower.com's
 * "Work History" page. Newest first (HEAD). Hashes are decorative.
 */

export type Branch = "web" | "revenue" | "athletics" | "main";

export type Commit = {
  hash: string;
  title: string;
  branch: Branch;
  org: string;
  detail: string;
  date: string;
  place?: string;
  /** Optional external link — the public record. */
  link?: string;
};

export const branches: Record<Branch, string> = {
  web: "web",
  revenue: "revenue-ops",
  athletics: "athletics",
  main: "main",
};

export const commits: Commit[] = [
  {
    hash: "a91f3c7",
    title: "Sales Development Representative",
    branch: "revenue",
    org: "StormWind Studios",
    detail:
      "IT & cybersecurity training. 178% / 190% / 147% of quarterly goal in FY27; 260% of quota in the first 90 days; Fast Track Program.",
    date: "2026 — Present",
    place: "Scottsdale, AZ",
  },
  {
    hash: "f2e7a10",
    title: "Launched Forge Digital",
    branch: "web",
    org: "My own practice",
    detail:
      "Brand, site, and a custom AI SDR chat widget wired to an LLM. The vehicle for client work.",
    date: "2025",
    link: "https://weforgedigitalai.com",
  },
  {
    hash: "9d4b2c8",
    title: "Shipped Coeur d'Amour and Aphani Solutions",
    branch: "web",
    org: "Client work",
    detail:
      "Two brands and two sites, start to finish — design, build, and copy. Both live.",
    date: "2025",
  },
  {
    hash: "7b5ca40",
    title: "Revenue & Growth Operator",
    branch: "revenue",
    org: "Titan Performance / Titan Peptides",
    detail:
      "Built the GoHighLevel CRM, 25+ automations, and the funnels and landing pages myself. Where the web work started.",
    date: "Aug 2022 — Feb 2026",
    place: "Remote",
  },
  {
    hash: "5c9d2a1",
    title: "Sales Representative",
    branch: "revenue",
    org: "Prestine Environmental",
    detail:
      "Consultative direct-to-consumer sales. Top 5% of 60+ national reps; ~$128K over four months.",
    date: "Jun 2025 — Dec 2025",
    place: "Phoenix, AZ",
  },
  {
    hash: "3d81c4f",
    title: "Co-Founder & Mentor — Provision Mentorship Program",
    branch: "athletics",
    org: "With former NFL and CFL athletes",
    detail:
      "Mentored 50+ high-school athletes toward Division I — leadership sessions, recruiting guidance, 7-on-7 coaching.",
    date: "Apr 2021 — Jul 2025",
  },
  {
    hash: "b7c14e6",
    title: "B.S., International Business & Spanish",
    branch: "main",
    org: "University of Idaho",
    detail: "Business degree, Spanish minor.",
    date: "2015 — 2020",
    place: "Moscow, ID",
  },
  {
    hash: "0000000",
    title: "NCAA Division I Football & Track",
    branch: "athletics",
    org: "Idaho Vandals",
    detail:
      "Running back and linebacker, plus a freshman year jumping in track. Sun Belt Conference.",
    date: "2016 — 2019",
    place: "Moscow, ID",
    link: "https://govandals.com/sports/football/roster/jack-bamis/4910",
  },
];

/** GitHub-style language bar. Percentages are a read on where the time went. */
export const languages: { label: string; pct: number }[] = [
  { label: "Front-End & Design", pct: 42 },
  { label: "Revenue Operations", pct: 37 },
  { label: "Athletics", pct: 21 },
];
