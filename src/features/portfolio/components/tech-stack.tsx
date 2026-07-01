import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { cn } from "@/lib/utils"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="grid grid-cols-[repeat(7,1fr)] gap-4 select-none md:grid-cols-[repeat(14,1fr)]">
          {TECH_STACK.map((tech) => {
            const iconClassName = cn(
              "h-auto w-full max-w-8",
              tech.iconScale && tech.iconScale !== 1 && "origin-center"
            )
            const iconStyle = tech.iconScale
              ? { transform: `scale(${tech.iconScale})` }
              : undefined

            return (
              <li key={tech.key} className="flex items-center justify-center">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener"
                        aria-label={tech.title}
                        className="flex w-full items-center justify-center"
                      >
                        {tech.theme ? (
                          <>
                            <Image
                              src={`/images/tech-stack-icons/${tech.key}-light.svg`}
                              alt={`${tech.title} light icon`}
                              width={32}
                              height={32}
                              className={cn(
                                "hidden [html.light_&]:block",
                                iconClassName
                              )}
                              style={iconStyle}
                              unoptimized
                            />
                            <Image
                              src={`/images/tech-stack-icons/${tech.key}-dark.svg`}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className={cn(
                                "hidden [html.dark_&]:block",
                                iconClassName
                              )}
                              style={iconStyle}
                              unoptimized
                            />
                          </>
                        ) : (
                          <Image
                            src={`/images/tech-stack-icons/${tech.key}.svg`}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            className={iconClassName}
                            style={iconStyle}
                            unoptimized
                          />
                        )}
                      </a>
                    }
                  />
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
