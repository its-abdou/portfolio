"use client"

import { use } from "react"

import { GITHUB_USERNAME } from "@/config/site"

export type Activity = {
  date: string
  count: number
  level: number
}

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)
  const totalCount = data.reduce((sum, d) => sum + d.count, 0)

  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <p className="text-lg font-medium">GitHub Contributions</p>
      <p className="text-muted-foreground">
        {totalCount.toLocaleString("en")} contributions in the last year on{" "}
        <a
          className="font-medium underline underline-offset-4"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <p className="text-muted-foreground">Loading contributions...</p>
    </div>
  )
}
