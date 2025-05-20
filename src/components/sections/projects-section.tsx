"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FullpageSection } from "@/components/layout/fullpage-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";
import Image from "next/image";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "other">(
    "all"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 필터링된 프로젝트
  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  return (
    <FullpageSection id="projects" background="gradient">
      <div className="w-full max-w-6xl mx-auto" ref={ref}>
        <SectionTitle
          title="Projects"
          subtitle="제가 작업한 주요 프로젝트들을 소개합니다"
          centered
        />

        {/* 필터 버튼 */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant={filter === "all" ? "primary" : "outline"}
            onClick={() => setFilter("all")}
          >
            전체
          </Button>
          <Button
            variant={filter === "web" ? "primary" : "outline"}
            onClick={() => setFilter("web")}
          >
            웹
          </Button>
          <Button
            variant={filter === "mobile" ? "primary" : "outline"}
            onClick={() => setFilter("mobile")}
          >
            모바일
          </Button>
          <Button
            variant={filter === "other" ? "primary" : "outline"}
            onClick={() => setFilter("other")}
          >
            기타
          </Button>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </FullpageSection>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}

function ProjectCard({ project, index, isInView, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="overflow-hidden transition-all rounded-lg shadow-lg cursor-pointer bg-background-light dark:bg-background-dark hover:shadow-xl group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-30 group-hover:opacity-100">
          <span className="px-3 py-1 font-medium text-white rounded-full bg-primary-light dark:bg-primary-dark">
            상세 보기
          </span>
        </div>
        {project.featured && (
          <span className="absolute px-2 py-1 text-xs text-white rounded-full top-2 right-2 bg-primary-light dark:bg-primary-dark">
            Featured
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="default">+{project.tags.length - 3}</Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={onClose}
      />

      <motion.div
        className="bg-background-light dark:bg-background-dark rounded-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto z-10"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="relative h-64">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover rounded-t-xl"
          />
          <button
            className="absolute p-2 text-white bg-black bg-opacity-50 rounded-full top-4 right-4"
            onClick={onClose}
            aria-label="닫기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">프로젝트 정보</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="w-24 font-medium">역할:</span>
                  <span>{project.details.role}</span>
                </li>
                <li className="flex">
                  <span className="w-24 font-medium">기간:</span>
                  <span>{project.details.duration}</span>
                </li>
                <li className="flex flex-col">
                  <span className="mb-1 font-medium">기술 스택:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.details.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">도전과 해결책</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">도전:</span>
                  <br />
                  {project.details.challenges}
                </p>
                <p className="text-sm">
                  <span className="font-medium">해결책:</span>
                  <br />
                  {project.details.solutions}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {project.links.live && (
              <Button
                as="a"
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                라이브 데모
              </Button>
            )}
            {project.links.github && (
              <Button
                variant="outline"
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            {project.links.figma && (
              <Button
                variant="outline"
                as="a"
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
