"use client"

import type { CopyButtonProps } from "@/registry/components/copy-button"
import { CopyButton as CopyButtonPrimitive } from "@/registry/components/copy-button"

export function CopyButton({
  size = "icon-sm",
  ...props
}: CopyButtonProps & {
  event?: string
}) {
  return <CopyButtonPrimitive variant="secondary" size={size} {...props} />
}
