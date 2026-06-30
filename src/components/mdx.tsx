import type { MDXRemoteProps } from "next-mdx-remote/rsc"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeExternalLinks from "rehype-external-links"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/base/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Code, Heading } from "@/components/ui/typography"
import {
  rehypeCodeRawString,
  rehypeHighlightCode,
  rehypeHighlightCodeRawString,
} from "@/lib/rehype-code-block"
import { cn } from "@/lib/utils"

import { Callout } from "./callout"
import { FramedImage, IframeEmbed, YouTubeEmbed } from "./embed"
import { mdxCodeBlockComponents } from "./mdx-code-block"

const components: MDXRemoteProps["components"] = {
  h1: (props: React.ComponentProps<"h1">) => <Heading as="h1" {...props} />,
  h2: (props: React.ComponentProps<"h2">) => <Heading as="h2" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <Heading as="h3" {...props} />,
  h4: (props: React.ComponentProps<"h4">) => <Heading as="h4" {...props} />,
  h5: (props: React.ComponentProps<"h5">) => <Heading as="h5" {...props} />,
  h6: (props: React.ComponentProps<"h6">) => <Heading as="h6" {...props} />,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  ...mdxCodeBlockComponents,
  code: Code,
  Callout,
  Steps: (props) => (
    <div
      className="md:ml-3.5 md:border-l md:pl-7.5 prose-h3:text-lg prose-h3:text-wrap"
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("step font-medium", className)} {...props} />
  ),
  Tabs,
  TabsList,
  TabsIndicator,
  TabsTrigger,
  TabsContent,
  TabsListInstallType: () => (
    <TabsList>
      <TabsTrigger value="cli">Command</TabsTrigger>
      <TabsTrigger value="manual">Manual</TabsTrigger>
      <TabsIndicator />
    </TabsList>
  ),
  YouTubeEmbed,
  IframeEmbed,
  FramedImage,
}

const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: "nofollow noopener" }],
      rehypeSlug,
      rehypeCodeRawString,
      rehypeHighlightCode,
      rehypeHighlightCodeRawString,
    ],
  },
}

export function MDX({ code }: { code: string }) {
  return <MDXRemote source={code} components={components} options={options} />
}
