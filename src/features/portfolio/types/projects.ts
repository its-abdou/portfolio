export type ProjectMetadata = {
  name: string
  description: string
  /**
   * Cover image URL (1200x630, absolute URL or path under /public).
   */
  image?: string
  /**
   * Live demo/site URL (distinct from the repo).
   */
  link?: string
  /**
   * GitHub repo URL.
   */
  sourceCode?: string
  /**
   * Tags/technologies for chips or filtering.
   */
  technologies?: string[]
  /**
   * Project category/kind (e.g. "core"). Not yet used by the UI.
   */
  type?: string
  /**
   * Creation date as an ISO date string (e.g. YYYY-MM-DD). Used for sorting.
   * Projects without a date sort first (treated as most recent).
   */
  createdAt?: string
  /**
   * Last updated date as an ISO date string (e.g. YYYY-MM-DD).
   */
  updatedAt?: string
}

export type Project = {
  /** Parsed frontmatter metadata from the MDX file. */
  metadata: ProjectMetadata
  /** Slug derived from the MDX filename (without extension). */
  slug: string
  /** MDX content body without frontmatter. */
  content: string
}

/**
 * Minimal project data for client components that don't need the full content.
 * Reduces serialization overhead and bundle size.
 */
export type ProjectPreview = {
  slug: string
  title: string
  image?: string
  createdAt?: string
}
