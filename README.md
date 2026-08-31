# Jack Bamis — Portfolio

Personal portfolio site. Next.js (App Router) + TypeScript, no CSS framework —
hand-written CSS carrying the Forge Digital design language (dark editorial
ground, Cinzel / Cormorant Garamond / Jost type system, gold sheen accent).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit things

| What | File |
| --- | --- |
| Name, role, tagline, email, links, résumé | `src/content/site.ts` |
| Skills lists | `src/content/site.ts` |
| Case studies (Forge, Coeur d'Amour, Aphani) | `src/content/projects.ts` |
| Global styles / design tokens | `src/app/globals.css` |
| Nav links | `src/components/Nav.tsx` |

## Before you deploy

1. **`src/content/site.ts`** — set `url` to your real domain, add your
   LinkedIn URL, and drop a `jack-bamis-resume.pdf` in `/public` then set
   `links.resume` to `/jack-bamis-resume.pdf`.
2. **`src/content/projects.ts`** — confirm the Aphani live URL with Cameron,
   then set `liveConfirmed: true`.
3. **Screenshots** — add `forge-digital.jpg`, `coeur-damour.jpg`,
   `aphani-solutions.jpg` to `/public/work` (1600×1000, real screenshots of
   each site), then set `imageReady: true` on each project.
4. **Videos** — put `.mp4` files in `/public/media` (see below), then set
   `mediaReady: true` on the project in `src/content/projects.ts`.
5. Run `npm run build` to check it compiles clean.

## Adding video clips

Case studies can show muted, autoplaying, looping screen recordings
(`src/components/VideoFrame.tsx`). The `media` array on each project in
`src/content/projects.ts` lists them.

Convert a phone/screen recording (`.mov`) to a small web-ready `.mp4`:

```bash
ffmpeg -i input.mov -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 28 \
  -preset slow -an -movflags +faststart public/media/forge-clip-1.mp4
```

Grab a poster frame:

```bash
ffmpeg -i public/media/forge-clip-1.mp4 -ss 00:00:00.5 -vframes 1 \
  public/media/forge-clip-1.jpg
```

Use `ratio: 9 / 16` in the `media` entry for a vertical phone recording,
`16 / 9` for a landscape screen recording.

## Deploy (Vercel)

```bash
npx vercel
```

Or push to GitHub and import the repo at vercel.com. Add your custom domain in
the Vercel dashboard.
