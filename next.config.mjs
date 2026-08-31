/**
 * Static export for GitHub Pages.
 *
 * On GitHub Pages this is served from a project subpath
 * (https://babyjupiter96.github.io/jack-bamis/), so basePath/assetPrefix are
 * switched on by the GITHUB_PAGES env var the deploy workflow sets. Local dev
 * and `npm run build` without that var stay at the root.
 */
const repo = "jack-bamis";
const onGitHubPages = process.env.GITHUB_PAGES === "true";
const base = onGitHubPages ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
