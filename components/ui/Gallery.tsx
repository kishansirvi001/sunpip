import Image from "next/image";
import { projects } from "@/lib/constants";

export function Gallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.title} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={project.image} alt={`${project.title} gallery image`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
