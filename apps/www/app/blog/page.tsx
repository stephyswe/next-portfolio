import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"

import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { formatDate } from "@/lib/utils"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getAllBlogs() {
  const blog = allBlogs

  if (!blog) {
    null
  }

  return blog
}

export default async function AllBlogPage() {
  const blog = await getAllBlogs()

  if (!blog) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Blog
          </div>
          <ChevronRightIcon className="h-4 w-4" />
        </div>
        <div className="pb-12 pt-8">
          <div className="grid gap-10 sm:grid-cols-2">
            {blog.map((blog, index) => (
              <BlogItem key={blog._id} post={blog} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const BlogItem = ({ post, index }: any) => {
  return (
    <article key={post._id} className="group relative flex flex-col space-y-2">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={804}
          height={452}
          className="rounded-md border bg-muted transition-colors"
          priority={index <= 1}
        />
      )}
      {/* <div className="flex">
        {post.category && (
          <Link
            href={`/blog/category/${post.category}`}
            className="inline-block rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white"
          >
            {post.category}
          </Link>
        )}
      </div> */}

      <h2 className="text-2xl font-extrabold">{post.title}</h2>
      {post.description && (
        <p className="text-muted-foreground">{post.description}</p>
      )}
      {post.date && (
        <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
      )}
      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  )
}
