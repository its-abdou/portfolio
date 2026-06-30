import type { Metadata } from "next"
import { Suspense } from "react"

import { X_USERNAME } from "@/config/site"
import { ProjectListWithSearch } from "@/features/portfolio/components/projects/project-list-with-search"
import { ProjectSearchInput } from "@/features/portfolio/components/projects/project-search-input"

const title = "Projects"
const description = "A collection of projects I've built and contributed to."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_USERNAME,
    creator: X_USERNAME,
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input dark:bg-input/30" />
          }
        >
          <ProjectSearchInput />
        </Suspense>
      </div>

      <Suspense
        fallback={
          <div className="relative pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-1200/630 animate-pulse flex-col gap-2 rounded-xl bg-muted p-2"
                />
              ))}
            </div>
          </div>
        }
      >
        <ProjectListWithSearch />
      </Suspense>

      <div className="h-4" />
    </div>
  )
}
