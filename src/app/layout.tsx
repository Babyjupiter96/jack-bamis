import type { Metadata } from "next";
import Script from "next/script";
import { cinzel, cormorant, jost } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/content/site";
import { asset } from "@/lib/base";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />

        {/* The AI SDR chat widget I designed and built for Forge Digital,
            embedded here as a live demo. Same script, same backend. */}
        <Script
          src={asset("/forge-widget.js")}
          strategy="afterInteractive"
          data-forge-embed-key="cmszp8rio00077kr0jv6ggefs"
          data-forge-base-url="https://forge-platform-dashboard.vercel.app"
        />
      </body>
    </html>
  );
}
