import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"

export function ProjectPreviewButton({ link }: { link: string }) {
  return (
    <Button
      className="h-7 gap-1.5 border-none pr-2 pl-2.5 text-[0.8125rem] active:scale-none [&_svg:not([class*='size-'])]:size-3.5"
      variant="secondary"
      size="sm"
      nativeButton={false}
      render={<Link href={link} target="_blank" rel="noopener noreferrer" />}
    >
      <ExternalLinkIcon />
      <span className="max-[28rem]:hidden">Preview</span>
    </Button>
  )
}
