'use client';
import { useState } from "react";
import Image from "next/image";
import { Project } from "../types/project";

function Thumbnail({
  index,
  src,
  alt,
  className,
  onClick
}: {
  index: number,
  src: string,
  alt: string,
  className?: string,
  onClick: (index: number) => void
}) {
  return (
    <div
      key={index}
      className={className}
    >
      <div className="h-0 pt-[100%] overflow-hidden relative rounded-lg bg-blue-300">
        <Image
          width={200}
          height={200}
          src={src}
          alt={alt}
          className="absolute top-0 w-full h-auto shadow-md mb-12 cursor-pointer hover:opacity-40 transition-opacity duration-200"
          onClick={() => onClick(index)}
        />
      </div>
    </div>
  )
}

export default function ProjectViewer({ model, className }: { model: Project, className?: string }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const images = model.images || [];

  function handleClick(index: number) {
    setMainImageIndex(index);
  }

  return (<>
    <div key={model.title} className={className}>
      <div className="lg:grid grid-cols-3 gap-12">
        <div className="col-span-2 mb-8 lg:mb-0">
          <Image
            width={512}
            height={512}
            src={`/${images[mainImageIndex]}`}
            alt={`${model.title} image 1`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">{model.title}</h2>

          {model.description && (
            <div className="text-base mb-12 space-y-8">
              {model.description.split('\n').map((paragraph, index) => (
                <p key={`paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          )}

          {model.tasks && (
            <div className="flex flex-wrap gap-2 mb-12">
              {model.tasks.map((task, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-800 rounded-lg"
                  title={task.title}
                >
                  {task.icon}
                </div>
              ))}
            </div>
          )}

          <div className="h-full w-full grid grid-cols-2 gap-6 place-content-start">
            {images.map((src, index) => (
              <Thumbnail
                key={index}
                index={index}
                src={`/fun-stuff/${src}`}
                alt={`${model.title} image ${index + 1}`}
                onClick={handleClick}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  </>)
}


