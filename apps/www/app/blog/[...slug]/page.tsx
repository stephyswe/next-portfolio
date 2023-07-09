import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"

import "@/styles/blog-mdx.css"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Mdx } from "@/components/mdx-components"

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

async function getBlogFromParams({ params }: BlogPageProps) {
  const slug = params.slug?.join("/") || ""
  const page = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export default async function BlogPage({ params }: BlogPageProps) {
  const singleBlog = await getBlogFromParams({ params })

  if (!singleBlog) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Blog
          </div>
          <ChevronRightIcon className="h-4 w-4" />
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={singleBlog.body.code} />
        </div>
      </div>
    </main>
  )
}
