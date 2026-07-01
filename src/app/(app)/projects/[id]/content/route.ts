import { notFound } from "next/navigation"

import {
  getAllProjects,
  getProjectBySlug,
} from "@/features/portfolio/data/projects"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ id: project.slug }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const project = getProjectBySlug(id)

  if (!project) {
    notFound()
  }

  const technologies = project.metadata.technologies?.length
    ? project.metadata.technologies.join(", ")
    : ""

  const content = `# ${project.metadata.name}

${project.content}

${technologies ? `**Technologies:** ${technologies}\n` : ""}
${project.metadata.link ? `**Link:** ${project.metadata.link}\n` : ""}
${project.metadata.sourceCode ? `**Source Code:** ${project.metadata.sourceCode}\n` : ""}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
