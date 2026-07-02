import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"

import { getAllProjects } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectItem } from "./project-item"

export function Projects() {
  const projects = getAllProjects()

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({projects.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative pt-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectItem
              key={project.slug}
              project={{
                slug: project.slug,
                title: project.metadata.name,
                image: project.metadata.image,
                createdAt: project.metadata.createdAt,
              }}
              shouldPreloadImage
            />
          ))}
        </div>
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          All Projects
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
