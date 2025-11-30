import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket, FaGraduationCap, FaHeart, FaTools, FaBriefcase, FaExternalLinkAlt, FaCrown } from 'react-icons/fa';
import { skills } from '../../data/skills';

const About = () => {
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

  const interests = [
    { icon: FaCode, text: "AI & Machine Learning" },
    { icon: FaLightbulb, text: "Problem Solving" },
    { icon: FaUsers, text: "Team Collaboration" },
    { icon: FaRocket, text: "Modern Web Technologies" },
  ];

  const hobbies = [
    "Cooking",
    "Traveling",
    "Writing Poetry",
    "Connecting with Inspiring People"
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4 sm:px-0">
              Get to know more about who I am, what drives me, and what I'm passionate about.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* DevSol CMO Highlight Card - Prominent */}
            <motion.div
              variants={itemVariants}
              data-magnetic
              data-card
              className="glass-card p-8 md:p-10 mb-8 relative overflow-hidden border-2 border-primary-500/30 dark:border-primary-400/30 shadow-glow"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent"></div>
              
              {/* Crown icon for prominence */}
              <div className="absolute top-4 right-4">
                <FaCrown className="text-primary-500 dark:text-primary-400 text-2xl opacity-50" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <FaBriefcase className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary-500/20 dark:bg-primary-500/30 text-primary-700 dark:text-primary-300 text-xs font-bold rounded-full border border-primary-500/30">
                        CURRENT ROLE
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                      Chief Marketing Officer at{' '}
                      <motion.a
                        href="https://www.devsol-ai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center gap-2 group/link"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>DevSol</span>
                        <FaExternalLinkAlt className="text-sm group-hover/link:rotate-12 transition-transform" />
                      </motion.a>
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                      Leading marketing initiatives and brand development
                    </p>
                  </div>
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg mb-4">
                  <span className="font-bold text-neutral-900 dark:text-white">Burhan Aslam</span> — Software Engineering student at{' '}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">FAST-NUCES</span>,{' '}
                  <span className="font-semibold">public speaker</span>,{' '}
                  <span className="font-semibold">creative writer</span>, and currently serving as the{' '}
                  <span className="font-bold text-primary-600 dark:text-primary-400">Chief Marketing Officer</span> at{' '}
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
            </motion.div>

            {/* Main Introduction */}
            <motion.div
              variants={itemVariants}
              data-magnetic
              data-card
              className="glass-card p-8 md:p-10 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                    About Me
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Software Engineering Student at FAST-NUCES
                  </p>
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 text-lg">
                I'm a passionate Software Engineering student at <span className="font-semibold text-primary-600 dark:text-primary-400">FAST-NUCES</span>, a creative thinker, and someone who loves building meaningful connections. I describe myself as an <span className="font-semibold">extrovert</span> who thrives on communication, collaboration, and helping people grow through ideas and conversations.
              </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Interests & Passions */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="glass-card p-6" data-magnetic data-card>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaLightbulb className="text-primary-600 dark:text-primary-400" />
                    What Drives Me
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    I'm deeply interested in <span className="font-semibold text-primary-600 dark:text-primary-400">technology, creativity, and problem-solving</span>. From crafting software solutions to engaging in public speaking and debates, I enjoy expressing ideas in a bold, clear, and impactful way.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {interests.map((interest, index) => {
                      const Icon = interest.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <Icon className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                          <span>{interest.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="glass-card p-6" data-magnetic data-card>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaHeart className="text-primary-600 dark:text-primary-400" />
                    Beyond Code
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                    When I'm not coding, I love:
                  </p>
                  <ul className="space-y-2">
                    {hobbies.map((hobby, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></span>
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Experience & Journey */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="glass-card p-6" data-magnetic data-card>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-primary-600 dark:text-primary-400" />
                    My Journey
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    I've worked with diverse people through <span className="font-semibold">societies, events, and team projects</span> — experiences that strengthened my <span className="text-primary-600 dark:text-primary-400 font-semibold">leadership, communication, and teamwork skills</span>.
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    As a learner, I constantly explore new domains like <span className="font-semibold">AI, Machine Learning, automation tools, and modern web technologies</span>.
                  </p>
                </div>

                <div className="glass-card p-6" data-magnetic data-card>
                  <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaRocket className="text-primary-600 dark:text-primary-400" />
                    Building My Path
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    Today, I'm building my journey <span className="font-semibold">brick by brick</span> — through my projects, my skills, and the connections I make.
                  </p>
                  <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                      "If you and I share a passion for <span className="font-semibold">innovation, storytelling, or technology</span> — let's connect and create something great together."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Section - Without Percentages */}
            <motion.div variants={itemVariants} className="mt-12">
              <div className="glass-card p-8" data-magnetic data-card>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                  <FaTools className="text-primary-600 dark:text-primary-400" />
                  Skills & Technologies
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Programming Languages */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                      Programming Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                        >
                          {skill.name}
                          {skill.experience && (
                            <span className="ml-1 text-xs opacity-75">({skill.experience})</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Software & Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                      Software & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.software.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1.5 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium border border-accent-200 dark:border-accent-800"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Other Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                      Other Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.other.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
