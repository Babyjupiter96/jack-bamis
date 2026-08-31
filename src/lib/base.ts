/**
 * Prefix for static assets referenced by raw string (not through <Link> or
 * next/image, which handle basePath themselves). Empty locally; set to the
 * repo subpath on GitHub Pages via next.config's env.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prepend the base path to a root-absolute asset path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
