import Image from "next/image"

interface DiagramProps {
  name: string
  alt: string
  height: number
  width: number
  children: string
  captionPosition: "top" | "bottom" | null
}

function Caption({ text }: { text: string }) {
  return (
    <div className="table w-full">
      <figcaption className="text-gray-40 mt-0 table-caption p-1 text-center text-base leading-tight sm:mt-0 sm:p-2 lg:text-lg">
        {text}
      </figcaption>
    </div>
  )
}

export function Diagram({
  name,
  alt,
  height,
  width,
  children,
  captionPosition,
}: DiagramProps) {
  return (
    <figure className="mt-10 flex flex-col items-center justify-center p-0 first:mt-0 sm:mt-0 sm:p-10">
      {captionPosition === "top" && <Caption text={children} />}
      <div className="light-image">
        <Image
          src={`/images/blog/diagrams/${name}.jpg`}
          alt={alt}
          height={height}
          width={width}
        />
      </div>
      {(!captionPosition || captionPosition === "bottom") && (
        <Caption text={children} />
      )}
    </figure>
  )
}

export default Diagram
