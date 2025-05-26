import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <motion.div
      className="flex flex-col items-end text-5xl font-extrabold leading-tight space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-end">
        <div className="flex gap-2">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-normal text-gray-900 dark:text-white"
          >
            {project.year}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.category}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {project.title}
        </motion.p>

        <div className="flex gap-2">
          {project.techStack.map((tech, index) => (
            <p
              key={tech}
              className="px-3 py-1 text-sm bg-black/50 dark:bg-white/70 text-white dark:text-black rounded-full shadow-md shadow-black/40 dark:shadow-white/40 hover:bg-black/70 dark:hover:bg-white/90 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
