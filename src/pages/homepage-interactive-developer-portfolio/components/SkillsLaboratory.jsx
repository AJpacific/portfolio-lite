import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const skills = [
  {
    id: 'java',
    name: 'Java',
    icon: 'Code',
    tags: ['OOP', 'Multithreading', 'Concurrency', 'Java 21'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'Code',
    tags: ['ES6+', 'Async/Await', 'DOM'],
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'Terminal',
    tags: ['Scripting', 'Data Science', 'Automation'],
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'Rocket',
    tags: ['REST APIs', 'Auto-Config', 'Microservices'],
  },
  {
    id: 'spring-framework',
    name: 'Spring Framework',
    icon: 'Leaf',
    tags: ['Spring Core', 'MVC', 'Security', 'Data JPA'],
  },
  {
    id: 'database',
    name: 'Databases',
    icon: 'Database',
    tags: ['MySQL', 'PostgreSQL', 'Redis', 'H2', 'JPA/Hibernate'],
  },
  {
    id: 'security-backend',
    name: 'Backend Security',
    icon: 'Shield',
    tags: ['JWT (JJWT)', 'BCrypt', 'RBAC', 'Auth Filters'],
  },
  {
    id: 'api-dev',
    name: 'API Development',
    icon: 'Globe',
    tags: ['RESTful Design', 'WebSocket', 'STOMP'],
  },
  {
    id: 'testing',
    name: 'Testing',
    icon: 'CheckCircle',
    tags: ['JUnit', 'Spring Boot Test', 'Integration (H2)'],
  },
  {
    id: 'dev-tools',
    name: 'Development Tools',
    icon: 'Wrench',
    tags: ['Git/GitHub', 'Maven', 'Postman', 'HikariCP', 'CUDA'],
  },
  {
    id: 'react',
    name: 'React',
    icon: 'Code',
    tags: ['Frontend', 'UI', 'Component-Based'],
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    icon: 'Palette',
    tags: ['Utility-First', 'Responsive Design'],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: 'Lock',
    tags: ['Pen Testing', 'OWASP Top 10', 'Encryption'],
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    icon: 'Cpu',
    tags: ['PyTorch', 'Transformers', 'Multi-Head Attention', 'Mixed Precision (FP16)', 'Model Training & Eval'],
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: 'Atom',
    tags: ['Qubits', 'Quantum Gates', 'Superposition', 'Entanglement', 'Quantum Algorithms'],
  },
];

const SkillsLaboratory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
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
          Skills & Expertise
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
        >
          An interactive showcase of technical skills across backend development, frontend, and cybersecurity.
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            className="card-apple p-6 group"
          >
            {/* Icon & Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-apple-sm bg-apple-gray-50 flex items-center justify-center text-apple-gray-600">
                <Icon name={skill.icon} size={22} />
              </div>
              <h3 className="text-body font-semibold text-apple-gray-800">{skill.name}</h3>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-apple-gray-50 text-apple-gray-500 rounded-full text-caption font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsLaboratory;