"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                {project.features.slice(0, 2).map((feature, index) => (
                  <p key={index} className="text-sm text-gray-600 dark:text-gray-300">
                    • {feature}
                  </p>
                ))}
                {project.features.length > 2 && (
                  <p className="text-sm text-primary">+{project.features.length - 2} more</p>
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition"
                >
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-white/90 dark:bg-black/90 flex items-center justify-center transition-opacity duration-300 ${
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-gray-700 dark:text-white text-center p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* 더보기 카드 */}
        <Link
          href="/projects"
          className="group relative bg-primary-300/10 dark:bg-secondary-300/10 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="text-md mt-10 flex items-center  group-hover:text-lg group-hover:border-b-2 group-hover:border-primary-600 group-hover:text-primary-600   dark:group-hover:border-secondary-300  dark:group-hover:text-secondary-300 transition-all duration-300">
            <span className="mr-2">프로젝트 더보기</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
} 