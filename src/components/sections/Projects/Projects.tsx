"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const categories = [
  "ALL",           // 전체 프로젝트
  "RESPONSIVE",    // 반응형 웹
  "LANDING",       // 랜딩 페이지
  "CLONE",         // 클론 코딩 프로젝트
  "PERSONAL",      // 개인 프로젝트
  "TEAM",          // 팀 협업 프로젝트
  "CLIENT"         // 클라이언트 의뢰 프로젝트
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const filteredProjects = selectedCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

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
    <section ref={sectionRef} className="relative flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* 타이틀 */}
        <motion.div 
          className="flex flex-col justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl font-semibold text-gray-500">
            시행착오 끝에 완성한 소중한 기록들
          </p>
          <h1 className="text-4xl md:text-7xl font-bold md:mb-8">
            THINGS I BUILT
          </h1>
        </motion.div>

        {/* 프로젝트 카테고리 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 md:gap-8 mt-14 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentProjectIndex(0);
              }}
              className={`text-md font-medium transition-colors ${
                selectedCategory === category  
                  ? "text-primary-700 dark:text-secondary-500"
                  : "text-gray-400 dark:text-gray-600 hover:text-primary-500 dark:hover:text-secondary-400"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative mt-24">
          {/* 프로젝트 콘텐츠 */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* 프로젝트 이미지 */}
            <motion.div 
              className="relative w-full mx-auto h-[40vh] md:h-[50vh] group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.title}
                fill
                className="object-cover transition-transform duration-500 rounded-3xl"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>

            {/* 프로젝트 설명 */}
            <motion.div 
              className="w-[90%] md:w-full md:h-[40vh] mx-auto flex flex-col justify-between gap-6 md:gpa-0"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <div className="space-y-14">
                {/* 기술 뱃지 */}
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                  {currentProject.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="text-gray-800 dark:text-gray-400 px-10 py-1 bg-primary-300/30 dark:bg-secondary-800/60 rounded-full text-sm transition-colors pointer-events-none select-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* 프로젝트 타이틀, 설명 */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    {currentProject.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-400 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    {currentProject.description}
                  </motion.p>
                </motion.div>
              </div>

              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black dark:border-white hover:border-primary-700 dark:hover:border-secondary-500 rounded-xl py-8 px-20 text-md hover:text-primary-700 dark:hover:text-secondary-500 transition-colors flex items-center gap-2"
                  >
                    GIT HUB
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-16 h-16" strokeWidth={2.5} />
                    </motion.div>
                  </Link>
                </motion.div>
                {currentProject.liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black dark:border-white hover:border-primary-700 dark:hover:border-secondary-500 rounded-xl py-8 px-20 text-md hover:text-primary-700 dark:hover:text-secondary-500 transition-colors flex items-center gap-2"
                    >
                      VIEW SITE
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-16 h-16" strokeWidth={2.5} />
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 프로젝트 이동 버튼 */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
          >
            <div className="absolute bottom-8 right-0 flex items-center gap-4">
              <motion.span 
                className="text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <span className="text-primary-700 dark:text-secondary-500">
                  {String(currentProjectIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-300 dark:text-gray-600 mx-2">/</span>
                <span className="text-gray-300 dark:text-gray-600">
                  {String(filteredProjects.length).padStart(2, '0')}
                </span>
              </motion.span>
              <div className="flex gap-6">
                <motion.button
                  onClick={prevProject}
                  className="p-8 hover:bg-black/10 dark:hover:bg-white/30 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-20 h-20" strokeWidth={2.5} />
                </motion.button>
                <motion.button
                  onClick={nextProject}
                  className="p-8 hover:bg-black/10 dark:hover:bg-white/30 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-20 h-20" strokeWidth={2.5} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
