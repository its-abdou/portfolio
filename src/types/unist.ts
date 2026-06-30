import type { Element, Root, Text } from "hast"

export type UnistNode = Element & {
  __rawString__?: string
  tagName: string
  children: (Element | Text)[]
  properties: Record<string, unknown>
}

export type UnistTree = Root

export type NpmCommands = {
  __pnpm__?: string
  __yarn__?: string
  __npm__?: string
  __bun__?: string
}
