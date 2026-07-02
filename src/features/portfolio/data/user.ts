import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Abdessamed",
  lastName: "Benaidja",
  displayName: "Abdessamed Benaidja",
  username: "its-abdou",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating systems that solve real problems.",
  flipSentences: [
    "Creating systems that solve real problems.",
    "Software Engineer",
    "AI & Systems Enthusiast",
  ],
  address: "Oran, Algeria",
  phoneNumber: "KzIxMzc5MTM4NDE5Mw==", //  base64 encoded
  email: "YWJkZXNzYW1lZDYzMEBnbWFpbC5jb20=", // base64 encoded
  website: "https://its-abdou.tech",
  resumeUrl: "/docs/resume.pdf",
  jobTitle: "Engineering Student",
  jobs: [
    {
      title: "Engineering Student",
      company: "ENPO",
      website: "https://www.enp-oran.dz",
      experienceId: "education",
    },
  ],
  about: `
- **Full-Stack Developer & Engineering Student** passionate about building **scalable**, high-quality digital products.  
- Skilled in **React**, **Next.js**, **TypeScript**, **Express**, and **Laravel**; developing modern, user-centric web applications with strong attention to structure and performance.
- Currently exploring **AI**, **cloud**, and **mobile development**, always learning, building, and pushing my limits through real-world projects.
`,
  avatar: "https://avatars.githubusercontent.com/u/152995137?v=4",
  ogImage: "/images/og-v2.png",
  timeZone: "Africa/Algiers",
  keywords: [
    "abdessamed benaidja",
    "abdessamed",
    "benaidja",
    "its-abdou",
    "fullstack developer",
    "enpo",
    "oran",
  ],
  dateCreated: "2023-10-20",
}
