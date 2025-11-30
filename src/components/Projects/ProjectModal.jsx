import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTag, FaCode } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999]"
            onClick={handleBackdropClick}
          />

          {/* Modal - Centered */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 custom-scrollbar pointer-events-auto"
            >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 flex items-center justify-center text-neutral-700 dark:text-neutral-300 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </motion.button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center gap-2">
                        <FaTag className="text-primary-600 dark:text-primary-400" />
                        <span className="font-medium">{project.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary-600 dark:text-primary-400" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Image/Thumbnail */}
              <div className="mb-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-primary-500 to-accent-500">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      // Hide image if it fails to load, gradient will show
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-64 md:h-80 flex items-center justify-center">
                    <div className="text-white/80 text-center">
                      <FaCode className="text-6xl mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-3">
                  About This Project
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-lg group-hover:rotate-12 transition-transform" />
                  <span>View on GitHub</span>
                </motion.a>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3 gradient-primary text-white rounded-xl font-semibold hover:shadow-glow transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="text-lg group-hover:rotate-12 transition-transform" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

