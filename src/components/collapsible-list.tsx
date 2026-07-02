"use client"

import { ChevronDownIcon } from "lucide-react"
import { Children, useState } from "react"

import { Button } from "@/components/base/ui/button"

type CollapsibleListProps = {
  children: React.ReactNode
  max: number
}

export function CollapsibleList({ children, max }: CollapsibleListProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const items = Children.toArray(children)
  const displayedItems = isExpanded ? items : items.slice(0, max)
  const hasMore = items.length > max

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">{displayedItems}</div>

      {hasMore && (
        <div className="flex justify-center pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 border-none"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : `Show ${items.length - max} more`}
            <ChevronDownIcon
              className={`size-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
      )}
    </div>
  )
}
