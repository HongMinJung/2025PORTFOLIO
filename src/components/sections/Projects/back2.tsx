"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const displayedProjects = projects.slice(0, 3);
  // 대표 프로젝트는 projects 배열의 첫 번째 항목으로 설정
  const mainProject = projects[0];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        {/* 좌측 텍스트: 카테고리와 프로젝트명 */}
        <div className="flex flex-col items-center justify-center text-5xl font-extrabold leading-tight space-y-8">
          <div>
            <div className="flex gap-2">
              <p>{mainProject.category}</p>
              <p className="text-sm font-normal text-gray-900 dark:text-white">
                {mainProject.year}
              </p>
            </div>
            <p>{mainProject.title}</p>
          </div>
          <div className="flex gap-2">
            {mainProject.techStack.map((tech) => (
              <p
                key={tech}
                className="px-3 py-1 text-sm bg-black/50 dark:bg-white/70 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 transition-all duration-300 cursor-pointer hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px]"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        {/* 중앙 카드 */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative w-[340px] h-[480px] rounded-3xl shadow-2xl overflow-hidden bg-white">
            <Image
              src={mainProject.imageUrl}
              alt={mainProject.title}
              fill
              className="object-cover"
            />
            {/* 필요시 여러 이미지 겹치기 구현 가능 */}
          </div>
        </div>
        {/* 우측 텍스트: 프로젝트 설명, 기능, 링크 */}
        <div className="flex flex-col items-start space-y-8">
          <div className="max-w-md space-y-20">
            <p className="text-xl font-semibold mb-2">
              {mainProject.description}
            </p>
            <div className="space-y-1 mb-3">
              {mainProject.features.map((feature, idx) => (
                <p key={idx} className="text-md text-gray-700">
                  • {feature}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={mainProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm bg-black/50 dark:bg-white/50 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
              >
                GitHub
              </a>
              {mainProject.liveUrl && (
                <a
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-black/50 dark:bg-white/50 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
                >
                  SITE
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 하단 페이지 인디케이터 */}
      <div className="absolute bottom-8 text-center text-black/80 text-sm font-medium tracking-widest">
        {displayedProjects.map((project, idx) => (
          <p key={idx}>{idx + 1} / {displayedProjects.length}</p>
        ))}
      </div>
    </section>
  );
}
