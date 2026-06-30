import { CodeXmlIcon, GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "hasnaoui",
    companyName: "Hasnaoui Group",
    companyLogo: "/images/companies/hasnaoui.png",
    companyWebsite: "https://groupe-hasnaoui.com",
    positions: [
      {
        id: "2",
        title: "AI Engineering Intern",
        employmentPeriod: { start: "02.2026", end: "04.2026" },
        employmentType: "Final Year Internship",
        icon: <CodeXmlIcon />,
        description: `- Designed and developed an AI system for natural language-driven floor plan generation.\n - Fine-tuned LLMs to generate structured architectural layouts.\n - Developed a controllable generative AI model for architectural floor plan generation.\n - Built preprocessing pipelines for CAD architectural datasets.\n - Developed a full-stack platform for interactive CAD floor plan generation.`,
        skills: [
          "Python",
          "PyTorch",
          "LLMs",
          "Unsloth",
          "Diffusion Models",
          "Computer Vision",
          "Next.js",
          "FastAPI",
          "PostgreSQL",
        ],
        isExpanded: true,
      },
      {
        id: "1",
        title: "Web Development Intern",
        employmentPeriod: { start: "05.2025", end: "06.2025" },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Developed features for a residence management platform.\n - Built REST APIs and backend services with Laravel.\n - Designed and optimized relational database schemas.\n - Collaborated with senior developers using Agile practices.`,
        skills: [
          "Laravel",
          "PHP",
          "REST APIs",
          "MySQL",
          "Git",
          "Agile",
          "Teamwork",
        ],
      },
    ],
  },
  {
    id: "sonelgaz",
    companyName: "Sonelgaz",
    companyLogo: "/images/companies/sonelgaz.png",
    companyWebsite: "https://www.sonelgaz.dz",
    positions: [
      {
        id: "1",
        title: "Software Engineering Intern",
        employmentPeriod: { start: "07.2024", end: "08.2024" },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Developed a Python application to automate banking file processing.\n - Automated manual workflows to improve operational efficiency.\n - Designed UML models and participated in software architecture planning.\n - Collaborated with engineers during requirements analysis and system design.`,
        skills: [
          "Python",
          "Software Engineering",
          "System Design",
          "UML",
          "Automation",
          "Problem Solving",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "2",
        title: "Information Systems Engineering",
        employmentPeriod: {
          start: "09.2023",
          end: "06.2026",
        },
        icon: <GraduationCapIcon />,
        description: `- National Polytechnic School of Oran.
- Graduated from the Engineering and Management of Information Systems program with a strong foundation in software engineering, AI, and information systems.`,
        skills: [
          "Software Engineering",
          "System Design",
          "ML",
          "Databases",
          "Mobile Development",
        ],
        isExpanded: true,
      },
      {
        id: "1",
        title: "Preparatory Classes in Science & Technology",
        employmentPeriod: {
          start: "09.2021",
          end: "06.2023",
        },
        icon: <GraduationCapIcon />,
        description: `- Higher School of Electrical and Energy Engineering (ESGEE).
- Ranked 18th out of 689 candidates in the national engineering entrance examination.`,
        skills: [
          "Mathematics",
          "Physics",
          "Problem Solving",
          "Analytical Thinking",
          "SolidWorks",
        ],
      },
    ],
  },
]
