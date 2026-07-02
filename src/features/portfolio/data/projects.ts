import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { cache } from "react"

import type {
  Project,
  ProjectMetadata,
} from "@/features/portfolio/types/projects"

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent)

  return {
    metadata: file.data as ProjectMetadata,
    content: file.content,
  }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map<Project>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))

    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

function getTime(date?: string) {
  return date ? new Date(date).getTime() : Infinity
}

export const getAllProjects = cache(() => {
  return getMDXData(
    path.join(process.cwd(), "src/features/portfolio/content/projects")
  ).sort(
    (a, b) => getTime(b.metadata.createdAt) - getTime(a.metadata.createdAt)
  )
})

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug)
}

export function findNeighbour(projects: Project[], slug: string) {
  const len = projects.length

  for (let i = 0; i < len; ++i) {
    if (projects[i].slug === slug) {
      return {
        previous: i > 0 ? projects[i - 1] : null,
        next: i < len - 1 ? projects[i + 1] : null,
      }
    }
  }

  return { previous: null, next: null }
}
