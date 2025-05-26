import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      className="flex flex-col justify-center items-start ml-4 space-y-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-md space-y-20">
        <motion.p
          className="text-lg font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="space-y-1 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {project.features.map((feature: string, idx: number) => (
            <motion.p
              key={idx}
              className="text-md text-gray-700 dark:text-white"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
            >
              • {feature}
            </motion.p>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm font-semibold bg-black/50 dark:bg-white/70 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm font-semibold bg-black/50 dark:bg-white/70 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SITE
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
} 