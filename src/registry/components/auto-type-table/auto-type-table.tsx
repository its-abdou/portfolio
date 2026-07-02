import "server-only"

import type { ComponentProps, ReactNode } from "react"

export interface BaseTypeTableProps {
  /**
   * The path to source TypeScript file.
   */
  path?: string

  /**
   * Exported type name to generate from.
   */
  name?: string

  /**
   * Set the type to generate from.
   *
   * When used with `name`, it generates the type with `name` as export name.
   *
   * ```ts
   * export const myName = MyType;
   * ```
   *
   * When `type` contains multiple lines, `export const` is not added.
   * You need to export it manually, and specify the type name with `name`.
   *
   * ```tsx
   * <AutoTypeTable
   *   path="./file.ts"
   *   type={`import { ReactNode } from "react"
   *   export const MyName = ReactNode`}
   *   name="MyName"
   * />
   * ```
   */
  type?: string
}

export interface AutoTypeTableProps
  extends BaseTypeTableProps,
    ComponentProps<"div"> {
  renderMarkdown?: (md: string) => Promise<ReactNode>
  renderType?: (type: string) => Promise<ReactNode>
}

export async function AutoTypeTable({ name, ...props }: AutoTypeTableProps) {
  return (
    <div {...props}>
      <p className="text-sm text-muted-foreground">
        Type information for <code>{name ?? "unknown"}</code> is currently
        unavailable.
      </p>
    </div>
  )
}
