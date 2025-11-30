import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaMicrophone, FaPenFancy, FaCrown } from 'react-icons/fa';

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-10 relative overflow-hidden border-2 border-primary-500/20 dark:border-primary-400/20 shadow-glow">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>
              
              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <FaCrown className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white">
                    About Me
                  </h2>
                </div>

                {/* Profile Description */}
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <span className="font-bold text-neutral-900 dark:text-white">Burhan Aslam</span> — Software Engineering student at{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">FAST-NUCES</span>,{' '}
                    <span className="font-semibold">public speaker</span>,{' '}
                    <span className="font-semibold">creative writer</span>, and currently serving as the{' '}
                    <span className="font-bold text-primary-600 dark:text-primary-400 text-xl">Chief Marketing Officer</span> at{' '}
                    <motion.a
                      href="https://www.devsol-ai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center gap-1 group/link"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>DevSol</span>
                      <FaExternalLinkAlt className="text-sm group-hover/link:rotate-12 transition-transform" />
                    </motion.a>
                    .
                  </p>
                </div>

                {/* Icons representing roles */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <FaGraduationCap className="text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium">Software Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <FaMicrophone className="text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium">Public Speaker</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <FaPenFancy className="text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium">Creative Writer</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                    <FaBriefcase className="text-primary-600 dark:text-primary-400" />
                    <span className="text-sm">CMO at DevSol</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;

