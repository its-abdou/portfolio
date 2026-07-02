import { BoxIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { cn, formatDate } from "@/lib/utils"

import type { ProjectPreview } from "../../types/projects"

export function ProjectItem({
  project,
  shouldPreloadImage,
}: {
  project: ProjectPreview
  shouldPreloadImage?: boolean
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
      )}
    >
      <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            priority={shouldPreloadImage}
            unoptimized
          />
        ) : (
          <div className="flex aspect-1200/630 items-center justify-center rounded-xl border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background">
            <BoxIcon className="size-8" />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance">
          {project.title}
        </h3>

        {project.createdAt && (
          <p className="font-mono text-sm text-muted-foreground">
            {formatDate(project.createdAt)}
          </p>
        )}
      </div>
    </Link>
  )
}
