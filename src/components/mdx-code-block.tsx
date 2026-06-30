import { cn } from "@/lib/utils"

import { CopyButton } from "./copy-button"
import { getIconForLanguageExtension } from "./icons"

export const mdxCodeBlockComponents = {
  figure({ className, ...props }: React.ComponentProps<"figure">) {
    const hasPrettyCode = "data-rehype-pretty-code-figure" in props

    return (
      <figure
        className={cn(hasPrettyCode && "not-prose", className)}
        {...props}
      />
    )
  },
  figcaption: ({ children, ...props }: React.ComponentProps<"figcaption">) => {
    const iconExtension =
      "data-language" in props && typeof props["data-language"] === "string"
        ? getIconForLanguageExtension(props["data-language"])
        : null

    const hasCodeTitle = "data-rehype-pretty-code-title" in props

    return (
      <figcaption {...props}>
        {iconExtension}
        {hasCodeTitle ? <p className="truncate">{children}</p> : children}
      </figcaption>
    )
  },
  pre({
    __withMeta__,
    __rawString__,

    className,
    ...props
  }: React.ComponentProps<"pre"> & {
    __withMeta__?: boolean
    __rawString__?: string
  }) {
    return (
      <>
        <pre
          className={cn(
            __rawString__ && !__withMeta__ && "[--code-padding-right:6rem]",
            className
          )}
          {...props}
        />

        {__rawString__ && (
          <>
            <CopyButton
              className="absolute top-2 right-2 z-10 rounded-md border-none"
              size="icon-xs"
              text={__rawString__}
              event="copy_code_block"
            />

            {!__withMeta__ && (
              <div
                aria-hidden
                data-fade-overlay
                style={
                  {
                    "--fade-color": "var(--code)",
                  } as React.CSSProperties
                }
              />
            )}
          </>
        )}
      </>
    )
  },
}
