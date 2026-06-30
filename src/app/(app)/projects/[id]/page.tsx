import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import { X_USERNAME } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { ProjectPageActions } from "@/features/projects/components/project-page-actions"
import { ProjectPreviewButton } from "@/features/projects/components/project-preview-button"
import { ProjectShareMenu } from "@/features/projects/components/project-share-menu"
import { ProjectSourceButton } from "@/features/projects/components/project-source-button"
import { cn } from "@/lib/utils"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }))
}

function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id)
}

function findProjectNeighbour(id: string) {
  const index = PROJECTS.findIndex((project) => project.id === id)
  return {
    previous: index > 0 ? PROJECTS[index - 1] : null,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  }
}

function getProjectSourceUrl(project: { link: string; source?: string }) {
  if (project.source) return project.source
  if (/github\.com/.test(project.link)) return project.link
  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const id = (await params).id
  const project = getProjectById(id)

  if (!project) {
    return {}
  }

  const postUrl = `/projects/${project.id}`
  const ogImage =
    project.image || `/og/simple?title=${encodeURIComponent(project.title)}`

  return {
    title: project.title,
    description: project.description?.slice(0, 160),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      url: postUrl,
      type: "article",
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: project.title,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: X_USERNAME,
      creator: X_USERNAME,
      images: [ogImage],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const { previous, next } = findProjectNeighbour(id)
  const sourceUrl = getProjectSourceUrl(project)
  const isPreview = !/github\.com/.test(project.link)

  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      <div className="screen-line-top screen-line-bottom">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56"
          )}
        />
      </div>

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 border-none px-0 font-mono text-muted-foreground hover:text-foreground"
          variant="link"
          size="sm"
          asChild
        >
          <Link href="/#projects">
            <ArrowLeftIcon />
            Projects
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <ProjectPageActions markdownUrl={`/projects/${project.id}/content`} />

          <ProjectShareMenu
            title={project.title}
            url={`/projects/${project.id}`}
          />

          {sourceUrl && <ProjectSourceButton source={sourceUrl} />}

          {isPreview && <ProjectPreviewButton link={project.link} />}

          {previous && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    className="size-7 border-none"
                    variant="secondary"
                    size="icon-sm"
                    asChild
                  >
                    <Link href={`/projects/${previous.id}`}>
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Project
                  <Kbd>
                    <ArrowLeftIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    className="size-7 border-none"
                    variant="secondary"
                    size="icon-sm"
                    asChild
                  >
                    <Link href={`/projects/${next.id}`}>
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Project
                  <Kbd>
                    <ArrowRightIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56"
          )}
        />
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-bottom text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>

        {project.skills.length > 0 && (
          <ul className="not-prose mb-4 flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <li key={skill} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}

        {project.description && <Markdown>{project.description}</Markdown>}
      </Prose>

      <div className="screen-line-top h-4 w-full" />
    </div>
  )
}
