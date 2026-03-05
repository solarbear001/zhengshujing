import { useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

const projects = [
  { id: 1, title: "Shadow Archives", category: "Investigation", image: work1 },
  { id: 2, title: "Night Walker", category: "Documentary", image: work2 },
  { id: 3, title: "Press Fragments", category: "OSINT", image: work3 },
  { id: 4, title: "Empty Rooms", category: "Visual Essay", image: work4 },
  { id: 5, title: "City Noir", category: "Photography", image: work5 },
];

const FeaturedWork = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 py-32">
      <div className="mb-16 text-center">
        <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-4">
          Selected Work
        </p>
        <div className="w-8 h-px bg-muted-foreground/30 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/work/${project.id}`}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            
            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-background/70 flex flex-col items-center justify-center transition-opacity duration-500 ${
                hoveredId === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-serif text-sm md:text-base tracking-[0.1em] text-foreground uppercase">
                {project.title}
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                {project.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
