import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://its-abdou.tech",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = []

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

// TODO: add your own X/Twitter handle (e.g. "@yourhandle")
export const X_USERNAME = "@its_abdou11"
export const GITHUB_USERNAME = "its-abdou"
export const SOURCE_CODE_GITHUB_REPO = "its-abdou/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/its-abdou/portfolio"

export const UTM_PARAMS = {
  utm_source: "its-abdou.tech",
}
