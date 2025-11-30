import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGamepad, FaLaptopCode } from 'react-icons/fa';

const ProjectCard = ({ project, index, onClick }) => {
  // Get icon based on category
  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes('game')) return FaGamepad;
    if (category.toLowerCase().includes('web')) return FaLaptopCode;
    return FaCode;
  };

  const CategoryIcon = getCategoryIcon(project.category);

  // Generate gradient colors based on project index
  const gradients = [
    'from-blue-500 via-purple-500 to-pink-500',
    'from-green-500 via-teal-500 to-cyan-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-purple-500 via-indigo-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-cyan-500 via-blue-500 to-indigo-500',
    'from-pink-500 via-rose-500 to-red-500',
    'from-emerald-500 via-green-500 to-teal-500',
  ];

  const gradient = gradients[index % gradients.length];

  const handleCardClick = (e) => {
    // Don't trigger modal if clicking on links
    if (e.target.closest('a')) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-magnetic
      data-card
      onClick={handleCardClick}
      className="project-card group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
    >
      {/* Project Image/Thumbnail with Enhanced Design */}
      <div className={`relative h-56 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_20s_linear_infinite]"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
        
        {/* Project Icon/Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
              <CategoryIcon className="text-white text-4xl" />
            </div>
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl"></div>
          </motion.div>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-display font-bold text-lg mb-1 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="text-white/90 text-xs font-medium">
            {project.date}
          </p>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="glass-surface backdrop-blur-md bg-white/95 dark:bg-neutral-900/95 text-primary-600 dark:text-primary-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Tech Stack Preview */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.technologies.slice(0, 2).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full font-medium border border-primary-200 dark:border-primary-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm group/link"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="group-hover/link:rotate-12 transition-transform" />
            <span>View Code</span>
          </motion.a>
          {project.liveUrl !== "#" && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm group/link"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="group-hover/link:rotate-12 transition-transform" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
    </motion.div>
  );
};

export default ProjectCard;
