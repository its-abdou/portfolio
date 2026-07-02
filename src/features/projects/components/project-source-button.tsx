import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { Icons } from "@/components/icons"

export function ProjectSourceButton({ source }: { source: string }) {
  return (
    <Button
      className="h-7 gap-1.5 border-none pr-2 pl-2.5 text-[0.8125rem] active:scale-none [&_svg:not([class*='size-'])]:size-3.5"
      variant="secondary"
      size="sm"
      render={<Link href={source} target="_blank" rel="noopener noreferrer" />}
    >
      <Icons.github />
      <span className="max-[28rem]:hidden">Source</span>
    </Button>
  )
}
