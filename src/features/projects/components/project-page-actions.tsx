"use client"

import { ChevronDownIcon } from "lucide-react"
import { useMemo, useRef, useState } from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { CopyStateIcon } from "@/registry/components/copy-button"

const cache = new Map<string, string>()

function LLMCopyButton({ markdownUrl }: { markdownUrl: string }) {
  const [state, setState] = useState<CopyState>("idle")
  const [isCopying, setIsCopying] = useState(false)
  const operationRef = useRef(false)

  const handleCopy = async () => {
    if (operationRef.current) return
    operationRef.current = true
    const loadingTimer = setTimeout(() => {
      setIsCopying(true)
    }, 150)
    try {
      const cached = cache.get(markdownUrl)
      if (cached) {
        await navigator.clipboard.writeText(cached)
      } else {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": fetch(markdownUrl)
              .then((res) => res.text())
              .then((content) => {
                cache.set(markdownUrl, content)
                return content
              }),
          }),
        ])
      }
      setState("done")
    } catch {
      setState("error")
    } finally {
      clearTimeout(loadingTimer)
      setIsCopying(false)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      operationRef.current = false
      setState("idle")
    }
  }

  return (
    <Button
      className="h-7 gap-1.5 border-none pr-2 pl-2.5 text-[0.8125rem] active:scale-none [&_svg:not([class*='size-'])]:size-3.5"
      variant="secondary"
      size="sm"
      aria-busy={isCopying}
      disabled={isCopying}
      onClick={handleCopy}
    >
      <CopyStateIcon state={state} />
      <span className="max-[28rem]:hidden">Copy Page</span>
    </Button>
  )
}

function getPrompt(url: string) {
  return `This is my project page. I want you to:

1. Give me a summary of the project
2. List the key skills and technologies used
3. Suggest 3 improvements or interesting extensions

Here is the page content:
${url}`
}

function ViewOptions({ markdownUrl }: { markdownUrl: string }) {
  const prompts = useMemo(() => {
    return {
      github: `https://github.com`,
      chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(getPrompt(markdownUrl))}`,
      claude: `https://claude.ai/new?q=${encodeURIComponent(getPrompt(markdownUrl))}`,
      cursor: `https://cursor.com`,
      grok: `https://grok.com/?q=${encodeURIComponent(getPrompt(markdownUrl))}`,
      scira: `https://scira.ai`,
    }
  }, [markdownUrl])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-7 gap-0 border-none pr-2 pl-1.5 active:scale-none [&_svg:not([class*='size-'])]:size-3.5"
          variant="secondary"
          size="sm"
        >
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-fit"
        alignOffset={-6}
        collisionPadding={8}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuItem asChild>
          <a href={markdownUrl} target="_blank" rel="noopener">
            <Icons.markdown />
            View as Markdown
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a href={prompts.chatgpt} target="_blank" rel="noopener">
            <Icons.openai />
            Open in ChatGPT
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a href={prompts.claude} target="_blank" rel="noopener">
            <Icons.claude />
            Open in Claude
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a href={prompts.grok} target="_blank" rel="noopener">
            <Icons.grok />
            Open in Grok
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a href={prompts.scira} target="_blank" rel="noopener">
            <Icons.scira />
            Open in Scira AI
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ProjectPageActions({ markdownUrl }: { markdownUrl: string }) {
  return (
    <ButtonGroup>
      <LLMCopyButton markdownUrl={markdownUrl} />
      <ButtonGroupSeparator className="border-y-4 border-secondary dark:bg-white/20 data-vertical:my-0" />
      <ViewOptions markdownUrl={markdownUrl} />
    </ButtonGroup>
  )
}
