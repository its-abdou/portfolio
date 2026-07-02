"use client"

import { XIcon } from "lucide-react"
import { useQueryState } from "nuqs"
import { useHotkeys } from "react-hotkeys-hook"

import { Icons } from "@/components/icons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function ProjectSearchInput() {
  const [query, setQuery] = useQueryState("q", {
    defaultValue: "",
  })

  useHotkeys("esc", () => setQuery(null), { enableOnFormTags: true })

  return (
    <InputGroup className="rounded-lg shadow-none">
      <InputGroupInput
        placeholder="Search Projects…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />

      <InputGroupAddon align="inline-start">
        <Icons.search />
      </InputGroupAddon>

      <InputGroupAddon
        className="pr-2.25 data-[disabled=true]:hidden"
        align="inline-end"
        data-disabled={!query.length}
      >
        <InputGroupButton
          className="rounded-sm border-none"
          size="icon-xs"
          title="Clear"
          aria-label="Clear"
          onClick={() => setQuery(null)}
        >
          <XIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
