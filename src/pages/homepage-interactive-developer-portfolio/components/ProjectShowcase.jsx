import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Backend',
      category: 'Backend Development',
      description: 'Production-ready REST API for modern e-commerce platforms using Spring Boot 3 and Java 21. Features JWT authentication, role-based access control, and complete order management.',
      technologies: ['Spring Boot', 'Java', 'Spring Security', 'MySQL', 'JWT', 'REST API'],
      githubUrl: 'https://github.com/AJpacific/E-Commerce-Backend',
    },
    {
      id: 2,
      title: 'LMS Backend',
      category: 'Backend Development',
      description: 'Comprehensive Learning Management System with JWT-based authentication, role-based access control, course management, enrollments, and progress tracking.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'JUnit 5'],
      githubUrl: 'https://github.com/AJpacific/LMS-Backend',
    },
    {
      id: 8,
      title: 'API Rate Limiter',
      category: 'Backend Development',
      description: 'Production-grade distributed API rate limiter with Sliding Window Log and Token Bucket algorithms, atomic operations via Redis Lua scripting.',
      technologies: ['Java 21', 'Spring Boot', 'Redis', 'Lua', 'Docker', 'Spring AOP'],
      githubUrl: 'https://github.com/AJpacific/api-rate-limiter',
    },
    {
      id: 6,
      title: 'Real-Time Chat Backend',
      category: 'Backend Development',
      description: 'Scalable real-time messaging backend with WebSocket (STOMP over SockJS), JWT authentication, and PostgreSQL persistence with HikariCP.',
      technologies: ['Spring Boot 4.0', 'Java 21', 'WebSocket', 'PostgreSQL', 'JWT', 'HikariCP'],
      githubUrl: 'https://github.com/AJpacific/chat-app-backend',
    },
    {
      id: 3,
      title: 'Network Vulnerability Scanner',
      category: 'Cybersecurity',
      description: 'Python-based network vulnerability scanner that detects open TCP ports, identifies running services, and checks for known vulnerabilities.',
      technologies: ['Python', 'Nmap', 'Requests', 'BeautifulSoup4'],
      githubUrl: 'https://github.com/AJpacific/Network-Vulnerability-Scanner',
    },
    {
      id: 4,
      title: 'WiFi DoS Tool',
      category: 'Cybersecurity',
      description: 'Wireless network analysis and deauthentication tool leveraging Aircrack-ng suite for educational security testing in authorized environments.',
      technologies: ['Python', 'Aircrack-ng', 'Linux (Kali)'],
      githubUrl: 'https://github.com/AJpacific/DoS-WiFi',
    },
    {
      id: 5,
      title: 'HomeBite — Food Delivery',
      category: 'Frontend Development',
      description: 'Dynamic and responsive food delivery web application with modern UI and clean user experience.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/AJpacific/HomeBite',
    },
    {
      id: 7,
      title: 'Rigveda Digital Explorer',
      category: 'Frontend Development',
      description: 'Modern web app for exploring the Rigveda with hierarchical navigation, universal search, random verse discovery, Sanskrit dictionary, and AI assistant.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI Integration'],
      githubUrl: 'https://github.com/AJpacific/rigveda',
      liveUrl: 'https://rigveda-snh2.vercel.app/',
    },
  ];

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="max-w-apple-lg mx-auto px-6">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-section-sm md:text-section font-bold text-apple-gray-800 mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
        >
          Explore my work across backend development, frontend, and cybersecurity.
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12 w-full">
        <div className="flex items-center bg-apple-gray-100 rounded-full p-1 gap-1 max-w-full overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-body-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? 'bg-white text-apple-gray-800 shadow-apple-sm'
                : 'text-apple-gray-500 hover:text-apple-gray-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory}
        className="grid md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="card-apple p-8 flex flex-col"
          >
            {/* Category */}
            <span className="text-caption font-medium text-apple-blue mb-3 uppercase tracking-wider">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-subtitle-sm font-semibold text-apple-gray-800 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-body text-apple-gray-500 mb-5 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-apple-gray-50 text-apple-gray-500 rounded-full text-caption font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-300"
              >
                <Icon name="Github" size={18} />
                <span>View Code</span>
                <Icon name="ArrowRight" size={14} />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-apple-gray-500 hover:text-apple-gray-800 transition-colors duration-300"
                >
                  <Icon name="ExternalLink" size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
