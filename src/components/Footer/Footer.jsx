import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Burhan Aslam</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating amazing web
              experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/BurhanAslam-git"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/burhan-aslam/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/burhanaslam"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="mailto:burhanaslam944@gmail.com"
                data-magnetic
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  data-magnetic
                  className="hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  data-magnetic
                  className="hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  data-magnetic
                  className="hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  data-magnetic
                  className="hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  data-magnetic
                  className="hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">
              Have a project in mind? Let's work together to bring your ideas to
              life.
            </p>
            <a
              href="mailto:burhanaslam944@gmail.com"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              burhanaslam944@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Burhan Aslam © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

