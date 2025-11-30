import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaCrown } from 'react-icons/fa';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Find DevSol experience (should be first)
  const devsolExperience = experience.find(exp => exp.company === "DevSol");

  return (
    <section id="experience" className="section-padding bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4 sm:px-0">
              My professional journey and the experiences that have shaped my
              career.
            </p>
          </motion.div>

          {/* DevSol CMO Highlight Card */}
          {devsolExperience && (
            <motion.div
              variants={itemVariants}
              className="mb-12 max-w-4xl mx-auto"
            >
              <div className="glass-card p-8 md:p-10 relative overflow-hidden border-2 border-primary-500/30 dark:border-primary-400/30 shadow-glow" data-magnetic data-card>
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent"></div>
                
                {/* Crown icon for prominence */}
                <div className="absolute top-4 right-4">
                  <FaCrown className="text-primary-500 dark:text-primary-400 text-2xl opacity-50" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary-500/20 dark:bg-primary-500/30 text-primary-700 dark:text-primary-300 text-xs font-bold rounded-full border border-primary-500/30">
                          CURRENT ROLE
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                        Chief Marketing Officer
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-lg">
                          <FaBriefcase className="text-primary-600 dark:text-primary-400" />
                          <span className="text-2xl">DevSol</span>
                        </div>
                        {devsolExperience.website && (
                          <motion.a
                            href="https://www.devsol-ai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-semibold group/link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="text-sm group-hover/link:rotate-12 transition-transform" />
                            <span className="text-sm">Visit Website</span>
                          </motion.a>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt />
                          <span>{devsolExperience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt />
                          <span>{devsolExperience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {devsolExperience.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-700 dark:text-neutral-300 flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1.5 font-bold">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    {devsolExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full font-medium border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Experience Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200/50 dark:bg-primary-800/50 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experience
                .filter(exp => exp.company !== "DevSol")
                .map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-neutral-50 dark:border-neutral-900 shadow-lg transform md:-translate-x-1/2 z-10"></div>

                    {/* Content card */}
                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <motion.div
                        className="glass-card p-6 hover:shadow-xl transition-all duration-300"
                        data-magnetic
                        data-card
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-1">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                              <FaBriefcase className="text-sm" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="text-neutral-600 dark:text-neutral-400 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1.5">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium border border-primary-200 dark:border-primary-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
