/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon file resolution:
 * - Default: /public/tech-stack-icons/[key].svg
 * - Themed (when `theme === true`):
 *   - Dark:  /public/tech-stack-icons/[key]-dark.svg
 *   - Light: /public/tech-stack-icons/[key]-light.svg
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string
  /** Display name of the technology. */
  title: string
  /** Official website URL. */
  href: string
  /** Category tags used for grouping/filtering. */
  categories: string[]
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean
  /**
   * Visual size multiplier (default 1) for icons whose artwork reads
   * smaller than others at the same bounding box (e.g. extra padding
   * baked into the source SVG, or thin line-art vs. bold flat logos).
   */
  iconScale?: number
}
