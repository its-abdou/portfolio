"use client"

import { useRef } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import type { VolumeIconHandle } from "@/components/animated-icons/volume"
import { VolumeIcon } from "@/components/animated-icons/volume"
import { cn } from "@/lib/utils"

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string
  namePronunciationUrl: string
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  if (audioRef.current == null) {
    audioRef.current = new Audio(namePronunciationUrl)
  }

  const volumeIconRef = useRef<VolumeIconHandle>(null)

  const handlePlayClick = () => {
    volumeIconRef.current?.startAnimation()
    audioRef.current?.play()
  }

  useHotkeys("p", handlePlayClick)

  return (
    <button
      className={cn(
        "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        className
      )}
      onClick={handlePlayClick}
    >
      <VolumeIcon ref={volumeIconRef} className="size-4.5" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  )
}
