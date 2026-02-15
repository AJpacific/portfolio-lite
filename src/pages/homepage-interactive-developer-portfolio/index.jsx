import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';

import HeroSection from './components/HeroSection';
import SkillsLaboratory from './components/SkillsLaboratory';
import ProjectShowcase from './components/ProjectShowcase';
import SecurityArsenal from './components/SecurityArsenal';
import Achievements from './components/Achievements';

const HomepageInteractiveDeveloperPortfolio = () => {
  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-800">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32 bg-section-alt">
        <SkillsLaboratory />
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 bg-section-white">
        <ProjectShowcase />
      </section>

      {/* Security */}
      <section id="security" className="py-24 md:py-32 bg-section-alt">
        <SecurityArsenal />
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 md:py-32 bg-section-white">
        <Achievements />
      </section>

      {/* CTA Footer */}
      <section className="py-24 md:py-32 bg-apple-gray-800">
        <div className="max-w-apple mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-sm md:text-section font-bold text-white mb-5">
              Let's build something
              <br />
              <span className="text-gradient-apple">amazing together.</span>
            </h2>
            <p className="text-body-xl text-apple-gray-300 max-w-xl mx-auto mb-10">
              Whether it's full-stack development or cybersecurity — I'm here to bring your vision to life.
            </p>
            <a
              href="mailto:aj4ashutoshjha@gmail.com"
              className="btn-apple btn-apple-primary text-body px-8 py-4"
            >
              <span className="flex items-center gap-2">
                <Icon name="Mail" size={20} />
                Start Collaboration
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-apple-gray-800 border-t border-apple-gray-700">
        <div className="max-w-apple-lg mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-caption text-apple-gray-400">
              © {new Date().getFullYear()} Ashutosh Jha. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/AJpacific" target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Github" size={18} />
              </a>
              <a href="http://www.linkedin.com/in/ajpacific" target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Linkedin" size={18} />
              </a>
              <a href="https://leetcode.com/u/AJpacific/" target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Code" size={18} />
              </a>
              <a href="mailto:aj4ashutoshjha@gmail.com" className="text-apple-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="Mail" size={18} />
              </a>
              <a href="/Portfolio/assets/images/Ashutosh_Jha_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-white transition-colors duration-300">
                <Icon name="FileText" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepageInteractiveDeveloperPortfolio;