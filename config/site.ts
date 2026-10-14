/**
 * Single source of truth for site-wide copy and navigation.
 * Extend here as the project grows (new routes, locales, links).
 */

export const siteConfig = {
  name: "3WEEQ",
  tagline: "Enter a world where creatures come alive",
  description:
    "An immersive world of curious creatures, magical places, and stories waiting to be discovered.",
} as const;

export interface MenuLink {
  index: string;
  label: string;
  href: string;
}

export const menuLinks: MenuLink[] = [
  { index: "01", label: "Explore 3WEEQ", href: "#explore" },
  { index: "02", label: "Meet the Creatures", href: "#creatures" },
  { index: "03", label: "Magical Worlds", href: "#worlds" },
  { index: "04", label: "Stories", href: "#stories" },
];

/**
 * Cursor spotlight reveal over the hero.
 * - `image` must stay exactly as provided (no crop/resize/recolor).
 * - `radius` is the spotlight radius in px.
 * - `easing` is the lerp factor (0–1, lower = smoother/slower).
 */
export const heroRevealConfig = {
  baseImage: "/BG_IMAGE_2.jpg",
  image: "/BG_IMAGE_1.jpg",
  radius: 260,
  easing: 0.12,
} as const;

/**
 * Headline 3D extrusion (static, subtle) — shallow stacked
 * text-shadow so the title never reads flat. No motion effects.
 */
export const headlineMotion = {
  extrude: { layers: 6, step: 0.007, topLight: 42, bottomDark: 18 },
} as const;
