import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const skills = [
  {
    id: 'java',
    name: 'Java',
    icon: 'Code',
    tags: ['OOP', 'Multithreading', 'Concurrency'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'Code',
    tags: ['ES6+', 'Async/Await', 'DOM'],
  },
  {
    id: 'spring-framework',
    name: 'Spring Framework',
    icon: 'Leaf',
    tags: ['Spring Core', 'MVC', 'DI'],
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'Rocket',
    tags: ['REST APIs', 'Auto-Config', 'Microservices'],
  },
  {
    id: 'jdbc',
    name: 'JDBC',
    icon: 'Database',
    tags: ['Java SQL API', 'PreparedStatement', 'ResultSet'],
  },
  {
    id: 'spring-jdbc',
    name: 'Spring JDBC',
    icon: 'DatabaseZap',
    tags: ['JdbcTemplate', 'Data Access', 'RowMapper'],
  },
  {
    id: 'spring-data-jpa',
    name: 'Spring Data JPA',
    icon: 'Table',
    tags: ['JpaRepository', 'Entity Mapping', '@Query'],
  },
  {
    id: 'hibernate',
    name: 'Hibernate',
    icon: 'Layers',
    tags: ['ORM', 'HQL', 'Entity Lifecycle'],
  },
  {
    id: 'spring-security',
    name: 'Spring Security',
    icon: 'Shield',
    tags: ['Authentication', 'Authorization', 'JWT'],
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'Terminal',
    tags: ['Scripting', 'Data Science', 'Security'],
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
    tags: ['CSS', 'Utility-First', 'Responsive Design'],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: 'Shield',
    tags: ['Pen Testing', 'OWASP Top 10', 'Encryption'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    tags: ['SQL', 'PostgreSQL', 'Redis', 'Stored Procedures'],
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: 'Cpu',
    tags: ['Qubits', 'Quantum Algorithms'],
  },
  {
    id: 'numpy',
    name: 'NumPy',
    icon: 'Table',
    tags: ['Arrays', 'Shapes', 'Matrix Multiply'],
  },
  {
    id: 'neural-networks',
    name: 'Neural Networks',
    icon: 'Cpu',
    tags: ['Weights & Bias', 'ReLU', 'Cross Entropy', 'Gradient Descent'],
  },
  {
    id: 'nlp-basics',
    name: 'NLP Basics',
    icon: 'MessageSquare',
    tags: ['Tokenization', 'Embeddings'],
  },
  {
    id: 'attention',
    name: 'Attention Mechanism',
    icon: 'Focus',
    tags: ['Q, K, V', 'Scaled Dot Product'],
  },
  {
    id: 'transformers',
    name: 'Transformers',
    icon: 'Layers',
    tags: ['Multi-Head Attention', 'Positional Encoding', 'Feed Forward', 'Residual + LayerNorm'],
  },
  {
    id: 'gpt-vs-bert',
    name: 'GPT vs BERT',
    icon: 'GitBranch',
    tags: ['Text Generation', 'Understanding', 'Classification'],
  },
  {
    id: 'practical-tools',
    name: 'Practical AI Tools',
    icon: 'Wrench',
    tags: ['PyTorch', 'HuggingFace Transformers'],
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
              <div className="w-11 h-11 rounded-apple-sm bg-apple-gray-50 flex items-center justify-center text-apple-gray-600 group-hover:bg-apple-blue group-hover:text-white transition-all duration-400">
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