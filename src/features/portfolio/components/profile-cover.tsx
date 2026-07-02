import Image from "next/image"

export function ProfileCover() {
  return (
    <div className="screen-line-top screen-line-bottom relative aspect-2/1 overflow-hidden border-x border-line select-none before:-top-px after:-bottom-px sm:aspect-3/1">
      <Image
        src="/images/profile-cover.jpg"
        alt="Profile cover"
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}
