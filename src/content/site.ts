export const site = {
  name: "Jack Bamis",
  role: "Web Designer & Front-End Developer",
  // One line under the hero. Says what you do and who for.
  tagline: "I design and build conversion-focused websites for service businesses — brand, front end, and the automation behind them.",
  // Availability signal for recruiters. Edit or clear when you land something.
  availability: "Open to junior / contract front-end and web design work.",
  email: "vandalbamis@gmail.com",
  location: "Phoenix, AZ · Remote",
  // TODO: fill these in.
  links: {
    github: "https://github.com/babyjupiter96",
    linkedin: "https://www.linkedin.com/in/jack-bamis-a58927170/",
    resume: "", // e.g. "/jack-bamis-resume.pdf" — drop the PDF in /public
  },
  // Production domain — update before deploy, used for metadata / OG tags.
  url: "https://jackbamis.com",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Build",
    items: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Responsive layout", "Git / GitHub"],
  },
  {
    group: "Design",
    items: ["Brand systems", "Typography", "Layout & hierarchy", "Design tokens", "Figma", "Accessible UI (WCAG)"],
  },
  {
    group: "Ship",
    items: ["Vercel", "GitHub Pages", "Custom domains / DNS", "Performance (Lighthouse)", "SEO basics", "LLM API integration"],
  },
];
