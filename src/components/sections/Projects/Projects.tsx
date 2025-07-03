"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { HandSwipeRight } from "@phosphor-icons/react";

const categories = [
  "ALL",           // 전체 프로젝트
  "RESPONSIVE",    // 반응형 웹
  "LANDING",       // 랜딩 페이지
  "APP",           // 앱 프로젝트
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
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // 스와이프 안내 아이콘 노출 타이밍
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768 && isInView) {
      setShowSwipeHint(true);
      const timer = setTimeout(() => setShowSwipeHint(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // 스와이프 이벤트 핸들러 (모바일 환경에서만 동작)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!isMobile) return;
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance = touchStartX.current - touchEndX.current;
      if (Math.abs(distance) > 40) {
        if (distance > 0) {
          // 왼쪽으로 스와이프 → 다음
          console.log('스와이프: 다음');
          nextProject();
        } else {
          // 오른쪽으로 스와이프 → 이전
          console.log('스와이프: 이전');
          prevProject();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="projects" ref={sectionRef} className="relative flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start">
      <div className="max-w-8xl 3xl:max-w-10xl mx-auto px-4 md:px-8 w-full">
        {/* 타이틀 */}
        <motion.div 
          className="flex flex-col justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-md md:text-xl font-semibold text-gray-500">
            시행착오 끝에 완성한 소중한 기록들
          </p>
          <h1 className="text-4xl md:text-7xl font-bold md:mb-8">
            THINGS I BUILT
          </h1>
        </motion.div>

        {/* 프로젝트 카테고리 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 md:gap-8 mt-14 md:mt-40"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {categories.map((category, index) => {
            const projectCount = category === "ALL" 
              ? projects.length 
              : projects.filter(project => project.category.includes(category)).length;
            
            return (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentProjectIndex(0);
                }}
                className={`text-md font-medium transition-colors flex items-center gap-1 ${
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
                <span>{category}</span>
                <span className="text-xs">
                  ({projectCount})
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="relative mt-24">
          {/* 프로젝트 콘텐츠 */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* 프로젝트 이미지 */}
            <motion.div 
              className="relative w-full mx-auto h-[30vh] md:h-[45vh] border border-gray-100 dark:border-gray-900 rounded-3xl group overflow-hidden"
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* 스와이프 안내 아이콘 (모바일에서만, showSwipeHint가 true일 때) */}
              {showSwipeHint && (
                <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none">
                  <span className="mt-2 text-sm text-gray-700 font-medium bg-white/80 rounded-full px-12 py-1 shadow flex items-center justify-center gap-2">
                    <HandSwipeRight size={28} color="#333" weight="duotone" />
                    스와이프 해보세요
                  </span>
                </div>
              )}
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.title}
                fill
                className="transition-transform duration-500 rounded-3xl object-cover group-hover:scale-105"
              />
            </motion.div>

            {/* 프로젝트 설명 */}
            <motion.div 
              className="relative w-full md:h-[40vh] mx-auto flex flex-col justify-between gap-6 px-10"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <div className="space-y-10">
                {/* 기술 년도 */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                  <motion.span
                      key={currentProject.year}
                      className="text-gray-800 dark:text-gray-400 text-xs md:text-sm transition-colors pointer-events-none select-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {currentProject.year}
                  </motion.span>
                </motion.div>
                {/* 기술 뱃지 */}
                <motion.div 
                  className="flex flex-wrap gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                  {currentProject.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="text-gray-800 dark:text-gray-400 px-10 py-1 bg-primary-300/30 dark:bg-secondary-800/60 rounded-full text-xs md:text-sm transition-colors pointer-events-none select-none"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  <motion.h2 
                    className="text-2xl md:text-4xl font-bold md:mt-14 md:mb-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    {currentProject.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-400 text-sm md:text-lg whitespace-pre-line"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    {currentProject.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* 프로젝트 하단 버튼 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                className="w-full md:absolute md:bottom-0 md:left-10 flex flex-row justify-between"
              >
                {/* 프로젝트 링크 */}
                <motion.div 
                  className="flex gap-1 md:gap-4"
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

                {/* 프로젝트 이동 버튼 */}
                <div className="flex items-center gap-4">
                  <motion.span 
                    className="text-lg md:text-2xl"
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
                  <div className="flex gap-6 hidden md:block">
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
              
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
