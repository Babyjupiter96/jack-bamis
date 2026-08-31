import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>That page doesn&apos;t exist.</h1>
        <p className="hero__sub">The link may be old, or the URL is off.</p>
        <Link href="/" className="btn" style={{ marginTop: "16px" }}>
          Back home
        </Link>
      </div>
    </section>
  );
}
