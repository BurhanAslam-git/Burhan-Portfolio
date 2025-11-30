import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Button from '../Button/Button';
import Typewriter from '../Typewriter/Typewriter';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Wallpaper Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/assets/visuals/hero-wallpaper.svg" type="image/svg+xml" />
          <img
            src="/assets/visuals/hero-wallpaper.svg"
            alt=""
            className="w-full h-full object-cover animate-drift opacity-40 dark:opacity-20"
            loading="eager"
            aria-hidden="true"
          />
        </picture>
        
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/5 via-transparent to-transparent dark:from-neutral-900/20"></div>
        
        {/* Radial Lighting Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Profile Image - Left Side on Desktop, Top on Mobile */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-2 lg:order-1 w-full lg:w-auto"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-20 blur-2xl animate-pulse-slow"></div>
              
              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-primary-500/30 dark:border-primary-400/30 shadow-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {!imageError ? (
                  <img
                    src="/images/profile/burhan-aslam.jpg?v=1"
                    alt="Burhan Aslam"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                    onLoad={() => {
                      setImageLoaded(true);
                      console.log('✅ Profile image loaded successfully!');
                    }}
                    onError={(e) => {
                      console.error('❌ Profile image failed to load from:', e.target.src);
                      console.log('Please ensure the file exists at: public/images/profile/burhan-aslam.jpg');
                      setImageError(true);
                      setImageLoaded(false);
                    }}
                  />
                ) : null}
                {/* Placeholder Content - Shows if image fails to load or while loading */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    <div className="text-center text-white/90">
                      <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-2 opacity-80">
                        BA
                      </div>
                      <div className="text-sm sm:text-base font-medium opacity-70">
                        Burhan Aslam
                      </div>
                    </div>
                  </div>
                )}
                {/* Gradient Overlay - Only show if image loaded */}
                {imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                )}
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  CMO @ DevSol
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right Side on Desktop, Bottom on Mobile */}
          <motion.div
            variants={itemVariants}
            className="flex-1 order-1 lg:order-2 text-center lg:text-left max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
                <span className="text-neutral-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">
                  <Typewriter 
                    text="Burhan Aslam" 
                    speed={120}
                    className="gradient-text"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6">
                Software Engineering Student at FAST-NUCES
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Passionate about building innovative solutions, exploring new technologies, and creating meaningful connections. Currently pursuing my Bachelor's in Software Engineering with expected graduation in June 2027.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
                icon={FaArrowDown}
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button
                variant="neutral"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                icon={FaEnvelope}
                iconPosition="left"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <motion.a
                href="https://github.com/BurhanAslam-git"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="w-12 h-12 sm:w-14 sm:h-14 glass-surface rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/burhan-aslam/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="w-12 h-12 sm:w-14 sm:h-14 glass-surface rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:burhanaslam944@gmail.com"
                data-magnetic
                className="w-12 h-12 sm:w-14 sm:h-14 glass-surface rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Send Email"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              aria-label="Scroll to about section"
            >
              <FaArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
