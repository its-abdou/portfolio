import { notFound } from "next/navigation"

import { PROJECTS } from "@/features/portfolio/data/projects"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const skills = project.skills.length > 0 ? project.skills.join(", ") : ""

  const content = `# ${project.title}

${project.description ?? ""}

${skills ? `**Skills:** ${skills}\n` : ""}

**Link:** ${project.link}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
