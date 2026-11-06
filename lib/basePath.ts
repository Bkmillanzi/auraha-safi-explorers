// Empty for a custom domain (aurahasafi.com), "/auraha-safi-explorers" on
// GitHub Pages. Set via NEXT_PUBLIC_BASE_PATH at build time.
//
// Needed because `images: { unoptimized: true }` makes next/image emit the
// src verbatim, without prepending next.config's basePath.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  path.startsWith("/") ? `${BASE_PATH}${path}` : path;
