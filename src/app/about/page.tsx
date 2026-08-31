import type { Metadata } from "next";
import Link from "next/link";
import { site, skills } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { HeroFilmBackdrop } from "@/components/HeroFilmBackdrop";
import { SectionHead } from "@/components/SectionHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught designer and front-end developer in Phoenix. Everything on the site is client work. D1 football, then sales, then this.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <HeroFilmBackdrop />
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1 className="about-lede">
            Self-taught. Everything here is client work.
          </h1>
          <p className="hero__film-note">
            Played{" "}
            <a
              href="https://govandals.com/sports/football/roster/jack-bamis/4910"
              target="_blank"
              rel="noreferrer"
            >
              Division I football at Idaho
            </a>{" "}
            &mdash; running back and linebacker &mdash; plus a freshman year in
            track as a jumper. The habit stuck: watch the film, find what
            isn&apos;t working, run it back better.
          </p>
        </div>
      </section>

      <section className="section wrap">
        <div className="about-cols">
          <Reveal as="div">
            <h2 className="about-sub">How I got here</h2>
            <p>
              International Business degree from Idaho, Spanish minor, four years
              of football in the middle of it. Then sales: cold outbound at a
              training company, and revenue operations for a fitness brand where
              I built the CRM, the funnels, and the automations myself.
              That&apos;s where the web work started. I kept needing pages and
              systems built, so I built them — and then it was the thing I wanted
              to do.
            </p>
            <p>
              The whole time I was training clients and coaching football —
              7-on-7 on weekends — which bought the hours to teach myself the
              rest.
            </p>

            <h2 className="about-sub">What I do now</h2>
            <p>
              Client sites, start to finish. Design in Figma, build by hand,
              write the copy, wire up the forms and follow-up. Three are live. I
              reach for React and Next when a project earns it and plain HTML
              when it doesn&apos;t.
            </p>

            <h2 className="about-sub">What I want</h2>
            <p>
              A junior or contract seat on a team with people to learn from —
              code review, a real PR workflow, someone senior catching my
              mistakes before a client does. Working solo has a ceiling and
              I&apos;ve found it. I pick things up fast and I don&apos;t mind the
              tedious parts: the accessibility pass, the responsive edge cases,
              the performance budget.
            </p>

            <h2 className="about-sub">Off the clock</h2>
            <p>
              Rebuilding something of mine to try a new tool, or reading other
              people&apos;s source to see how they solved a problem.
            </p>

            <Link href="/contact" className="btn" style={{ marginTop: "12px" }}>
              Get in touch
            </Link>
          </Reveal>

          <Reveal as="div" delay={120}>
            {skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li className="pill" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section--tight wrap">
        <Reveal>
          <SectionHead num="—" title="The backdrop" />
          <p className="section-intro">
            The film playing behind the headline is a low-res phone recording of
            my own game tape. Here&apos;s how it got from a shaky clip to
            something you can put text on.
          </p>
        </Reveal>

        <ol className="build-steps">
          <Reveal as="li" delay={0}>
            <h3>Source</h3>
            <p>
              An 8-second, 360&times;640 clip — a phone pointed at an old monitor
              playing the film. Grainy, off-axis, a keyboard in frame.
            </p>
          </Reveal>
          <Reveal as="li" delay={60}>
            <h3>Process</h3>
            <p>
              One <code>ffmpeg</code> pass: crop to just the field, denoise,
              desaturate and darken the grade, upscale with Lanczos, then a touch
              of blur so the pixels read as film rather than compression.
              Exported to MP4 and WebM, audio stripped, ~1&ndash;2&nbsp;MB each.
            </p>
            <pre className="code-block">
              <code>{`ffmpeg -i clip.mov -an \\
  -vf "crop=340:300:10:70,scale=1080:952:flags=lanczos,\\
       hqdn3d=5:4:7:5,eq=brightness=-0.08:saturation=0.4:contrast=1.12,\\
       unsharp=3:3:0.3,gblur=sigma=0.4" \\
  -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p \\
  -movflags +faststart athletics-bg.mp4`}</code>
            </pre>
          </Reveal>
          <Reveal as="li" delay={120}>
            <h3>Treat</h3>
            <p>
              In CSS the video sits at 11% opacity, near-grayscale, under a
              gradient mask that fades it out toward the text. A warm radial glow
              and a fine SVG-noise layer go on top so it feels like one surface,
              not a video with type floating over it.
            </p>
          </Reveal>
          <Reveal as="li" delay={180}>
            <h3>Serve</h3>
            <p>
              Autoplay, muted, looped, <code>playsInline</code>. When the visitor
              asks for reduced motion, the component renders a single poster
              frame instead of the video — same look, no movement, nothing
              downloaded that won&apos;t be used.
            </p>
          </Reveal>
        </ol>
      </section>
    </>
  );
}
