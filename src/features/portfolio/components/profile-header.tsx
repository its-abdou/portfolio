import { USER } from "@/features/portfolio/data/user"
import { TextFlip } from "@/registry/components/text-flip"

import { AvatarElectricEffect } from "./avatar-electric-effect"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      <div className="shrink-0 border-r border-line">
        <div className="mx-0.5 my-0.75">
          <AvatarElectricEffect>
            <img
              className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt="Avatar"
              src={USER.avatar}
              fetchPriority="high"
            />
          </AvatarElectricEffect>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div
            className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800"
            aria-hidden
          >
            Coding, Creativity, Coffee...
          </div>
        </div>

        <div className="border-t border-line">
          <div className="pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
              {USER.displayName}
              <VerifiedIcon
                className="ml-1.5 inline-block size-4.5 -translate-y-0.5 align-middle text-info select-none"
                aria-label="Verified"
              />
            </h1>
          </div>

          <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            <TextFlip
              className="font-pixel-square text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
              interval={1.5}
            >
              {USER.flipSentences}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  )
}
