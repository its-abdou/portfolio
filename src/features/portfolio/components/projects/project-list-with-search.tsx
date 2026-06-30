"use client"

import { useQueryState } from "nuqs"

import { PROJECTS } from "../../data/projects"
import type { Project } from "../../types/projects"
import { ProjectItem } from "./project-item"

const normalize = (text: string) => text.toLowerCase().replaceAll(" ", "")

function filterProjects(projects: Project[], query: string | null) {
  if (!query) return projects

  const normalizedQuery = normalize(query)
  return projects.filter((project) =>
    normalize(project.title).includes(normalizedQuery)
  )
}

export function ProjectListWithSearch() {
  const [query] = useQueryState("q", {
    defaultValue: "",
  })

  const filtered = filterProjects(PROJECTS, query)

  return (
    <div className="relative pt-4">
      <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-line" />
        <div className="border-l border-line" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            shouldPreloadImage={index <= 4}
          />
        ))}

        {filtered.length === 0 && (
          <div className="screen-line-top screen-line-bottom p-4">
            <p className="font-mono text-sm">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
