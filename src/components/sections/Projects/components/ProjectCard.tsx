import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";  

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  index: number;
  currentIndex: number;
  hoveredCard: number | null;
  mousePosition: { x: number; y: number };
  cardRef: React.RefObject<HTMLDivElement | null>;
  onMouseMove: (e: React.MouseEvent, cardIndex: number) => void;
  onMouseEnter: (cardIndex: number) => void;
  onMouseLeave: () => void;
  getTiltTransform: (cardIndex: number) => { rotateX: number; rotateY: number };
}

export function ProjectCard({
  project,
  isActive,
  isPrev,
  index,
  hoveredCard,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  getTiltTransform,
}: ProjectCardProps) {
  const tiltTransform = getTiltTransform(index);

  return (
    <motion.div
      key={project.id}
      className="tilt-card-container absolute top-0 left-0 w-full h-full"
      initial={
        isActive
          ? { opacity: 0, scale: 0.95, y: 20 }
          : isPrev
          ? { opacity: 0, scale: 0.9, y: 50, x: 0 }
          : { opacity: 0, scale: 0.9, y: 40, x: 0 }
      }
      animate={
        isActive
          ? { opacity: 1, scale: 1, y: 0 }
          : isPrev
          ? { opacity: 0, scale: 0.95, y: 0, x: 0 }
          : { opacity: 1, scale: 0.95, y: 30, x: 0 }
      }
      exit={
        isActive
          ? { opacity: 0, scale: 0.95, y: -20 }
          : isPrev
          ? { opacity: 0, scale: 0.9, y: 40, x: 0 }
          : { opacity: 0, scale: 0.9, y: 40, x: 0 }
      }
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        zIndex: isActive ? 30 : isPrev ? 20 : 10,
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="tilt-card w-full h-full rounded-3xl overflow-hidden bg-white cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: isActive ? tiltTransform.rotateX : 0,
          rotateY: isActive ? tiltTransform.rotateY : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onMouseMove={(e) => onMouseMove(e, index)}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        whileHover={
          isActive
            ? {
                scale: 1.3,
                transition: { duration: 0.3 },
              }
            : {}
        }
      >
        <div className="relative w-full h-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority={isActive}
          />
          {!isActive && <div className="absolute inset-0 bg-black/20" />}
          {isActive && hoveredCard === index && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {isActive && (
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                boxShadow:
                  hoveredCard === index
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                    : "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
} 