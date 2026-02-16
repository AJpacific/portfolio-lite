import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Achievements = () => {
  const techStack = [
    'React 18', 'Vite', 'Tailwind CSS', 'React Router DOM', 'Axios',
    'Chart.js', 'react-chartjs-2', 'Node.js', 'Express.js', 'MongoDB',
    'Mongoose', 'JWT', 'bcryptjs', 'Helmet', 'CORS', 'Rate Limiting',
  ];

  const highlights = [
    { icon: 'Shield', text: 'Security-hardened Express API (Helmet, CORS, rate limiting)' },
    { icon: 'KeyRound', text: 'JWT auth, bcryptjs hashing, RBAC + audit logs' },
    { icon: 'BarChart3', text: 'Analytics dashboards (Chart.js, react-chartjs-2)' },
    { icon: 'CreditCard', text: 'Automated billing cycles, discounts, payment tracking' },
  ];

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
    <div className="max-w-apple mx-auto px-6">
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
          Achievements
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
        >
          Recognitions that reflect my passion for building and securing systems.
        </motion.p>
      </motion.div>

      {/* Achievement Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="card-apple p-8 md:p-12"
        >
          {/* Award Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white">
              <Icon name="Trophy" size={20} />
            </span>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-caption font-semibold">
              2nd Place
            </span>
          </div>

          {/* Title */}
          <h3 className="text-subtitle-sm md:text-subtitle font-bold text-apple-gray-800 mb-3">
            Lumen Quest 2026 Hackathon
          </h3>

          {/* Description */}
          <p className="text-body-lg text-apple-gray-500 mb-8 max-w-2xl leading-relaxed">
            Secured 2nd position by delivering a robust, user-centric subscription platform with an emphasis on security and scalability.
          </p>

          {/* Project Details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-full bg-apple-gray-50 flex items-center justify-center text-apple-blue flex-shrink-0">
                <Icon name="Layers" size={20} />
              </span>
              <div>
                <h4 className="text-body font-bold text-apple-gray-800 leading-tight">
                  Subscription Management System
                </h4>
                <div className="mt-3 inline-flex items-center px-3 py-1.5 rounded-lg bg-apple-blue/5 border border-apple-blue/10">
                  <span className="text-caption font-medium text-apple-gray-500">
                    Role: <span className="text-apple-blue font-bold">Team Lead & Backend Developer</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-body-sm text-apple-gray-500 mb-6 mt-4 leading-relaxed">
              Full-stack platform for telecom/ISP subscriptions: customers, plans, billing, and analytics.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={item.icon} size={16} className="text-apple-blue mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-apple-gray-500">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-apple-gray-50 text-apple-gray-500 rounded-full text-caption font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/AJpacific/lumen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-300"
            >
              <Icon name="Github" size={18} />
              <span>View Code</span>
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievements;
