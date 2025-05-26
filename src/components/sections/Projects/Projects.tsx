"use client";

import { projects } from "@/data/projects";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectInfo } from "./components/ProjectInfo";
import { ProjectDetails } from "./components/ProjectDetails";

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const displayedProjects = projects;
  const mainProject = displayedProjects[current];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((next) => (next + 1) % displayedProjects.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }

    if (current === displayedProjects.length - 1 && e.deltaY > 0) {
      return;
    }

    e.preventDefault();
    if (e.deltaY > 0) handleNext();
    else if (e.deltaY < 0) handlePrev();
  };

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    if (!cardRef.current || hoveredCard !== cardIndex) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = (cardIndex: number) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const getTiltTransform = (cardIndex: number) => {
    if (hoveredCard !== cardIndex || !cardRef.current) {
      return { rotateX: 0, rotateY: 0 };
    }

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((mousePosition.x - centerX) / centerX) * 20;
    const rotateX = ((centerY - mousePosition.y) / centerY) * 15;

    return { rotateX, rotateY };
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen scroll-snap-start"
      onWheel={handleWheel}
      tabIndex={0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center w-full max-w-7xl px-8">
        <ProjectInfo project={mainProject} />

        <div className="flex flex-col items-center justify-center">
          <div
            ref={cardRef}
            className="relative w-[300px] h-[340px]"
            style={{ perspective: "800px" }}
          >
            {displayedProjects.map((project, idx) => {
              const isActive = idx === current;
              const isPrev = idx === (current - 1 + displayedProjects.length) % displayedProjects.length;
              const isNext = idx === (current + 1) % displayedProjects.length;

              return (
                <AnimatePresence key={project.id}>
                  <ProjectCard
                    project={project}
                    isActive={isActive}
                    isPrev={isPrev}
                    isNext={isNext}
                    index={idx}
                    currentIndex={current}
                    hoveredCard={hoveredCard}
                    mousePosition={mousePosition}
                    cardRef={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    getTiltTransform={getTiltTransform}
                  />
                </AnimatePresence>
              );
            })}
          </div>
        </div>

        <ProjectDetails project={mainProject} />
      </div>

      <motion.div
        className="absolute bottom-8 text-center text-black/80 text-sm font-medium tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {current + 1} / {displayedProjects.length}
      </motion.div>
    </section>
  );
}
