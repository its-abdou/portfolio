import Marquee from "react-fast-marquee"

import { Panel } from "@/features/portfolio/components/panel"
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/features/portfolio/data/testimonials"
import type { Testimonial as TestimonialType } from "@/features/portfolio/types/testimonials"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/registry/components/testimonial"
import { TestimonialSpotlight } from "@/registry/components/testimonial-spotlight"

function compareFn(a: TestimonialType, b: TestimonialType) {
  return a.date.localeCompare(b.date, undefined, { numeric: true })
}

const FEATURED_TESTIMONIALS = [
  ...TESTIMONIALS_1.filter((item) => item.isFeatured),
  ...TESTIMONIALS_2.filter((item) => item.isFeatured),
].sort(compareFn)

export function Testimonials() {
  return (
    <Panel id="testimonials" className="before:content-none after:content-none">
      <h2 className="sr-only">Testimonials</h2>

      <div className="grid gap-2 px-2 sm:grid-cols-2">
        {FEATURED_TESTIMONIALS.map((item) => (
          <a
            key={item.url}
            className="flex"
            href={item.url}
            target="_blank"
            rel="noopener"
          >
            <TestimonialSpotlight className="flex-1 bg-accent-muted">
              <TestimonialItem {...item} />
            </TestimonialSpotlight>
          </a>
        ))}
      </div>

      <div className="flex h-2 w-full" />

      <TestimonialList data={TESTIMONIALS_1} />

      <div className="flex h-2 w-full" />

      <TestimonialList data={TESTIMONIALS_2} />
    </Panel>
  )
}

function TestimonialList({ data }: { data: TestimonialType[] }) {
  return (
    <Marquee>
      {data
        .filter((item) => !item.isFeatured)
        .sort(compareFn)
        .map((item) => (
          <div
            key={item.url}
            className="mx-1 h-full max-w-xs min-w-2xs"
            style={item.style}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener"
              className="block h-full rounded-xl ring-1 ring-foreground/10 transition-[background-color] ease-out ring-inset hover:bg-accent-muted"
            >
              <TestimonialItem {...item} />
            </a>
          </div>
        ))}
    </Marquee>
  )
}

function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote,
}: TestimonialType) {
  return (
    <Testimonial>
      <TestimonialQuote className="min-h-14">
        <p>{quote}</p>
      </TestimonialQuote>

      <TestimonialAuthor>
        <TestimonialAvatar>
          <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
          <TestimonialAvatarRing />
        </TestimonialAvatar>

        <TestimonialAuthorName>{authorName}</TestimonialAuthorName>
        <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
      </TestimonialAuthor>
    </Testimonial>
  )
}
