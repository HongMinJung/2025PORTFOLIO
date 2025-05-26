"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Three.js를 활용한 인터랙티브 포트폴리오 웹사이트",
    image: "/projects/portfolio.png",
    category: "DIGITAL",
    tags: ["Next.js", "TypeScript", "Three.js", "TailwindCSS"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    id: 2,
    title: "프로젝트 제목",
    description: "프로젝트에 대한 간단한 설명을 작성해주세요.",
    image: "/projects/project2.png",
    category: "STRATEGY",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
  // 추가 프로젝트...
];

const categories = ["ALL", "DIGITAL", "STRATEGY", "WEB", "APP"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const filteredProjects = selectedCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const currentProject = filteredProjects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          BEST OF OUR WORKS
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-8 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentProjectIndex(0);
              }}
              className={`text-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Display */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[60vh] w-full group">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary text-lg font-medium">
                  {currentProject.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {currentProject.title}
                </h2>
                <p className="text-gray-400 text-lg">
                  {currentProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <Link
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors flex items-center gap-2"
                >
                  GitHub
                  <span className="text-xl">→</span>
                </Link>
                <Link
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors flex items-center gap-2"
                >
                  Live Demo
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-0 right-0 flex items-center gap-8">
            <span className="text-2xl">
              {String(currentProjectIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
            </span>
            <div className="flex gap-4">
              <button
                onClick={prevProject}
                className="p-4 hover:bg-white/10 rounded-full transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextProject}
                className="p-4 hover:bg-white/10 rounded-full transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </main>
  );
} 