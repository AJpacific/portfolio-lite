import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SecurityArsenal = () => {
  const tools = [
    { name: 'Linux', description: 'Operating system for security testing and administration', icon: 'Terminal', category: 'Operating System' },
    { name: 'Nmap', description: 'Network discovery and security auditing tool', icon: 'Search', category: 'Network Security' },
    { name: 'OpenVAS', description: 'Open-source vulnerability scanning framework', icon: 'AlertTriangle', category: 'Vulnerability Assessment' },
    { name: 'Metasploit', description: 'Penetration testing and exploit development framework', icon: 'Target', category: 'Penetration Testing' },
    { name: 'John the Ripper', description: 'Password cracking and security testing tool', icon: 'Key', category: 'Password Security' },
    { name: 'Hashcat', description: 'Advanced password recovery and hash cracking', icon: 'Lock', category: 'Password Security' },
    { name: 'SQLmap', description: 'Automated SQL injection and database takeover tool', icon: 'Database', category: 'Database Security' },
    { name: 'Gobuster', description: 'Directory and file brute-forcing tool', icon: 'Folder', category: 'Web Enumeration' },
    { name: 'Gophish', description: 'Phishing campaign simulation and training platform', icon: 'Mail', category: 'Social Engineering' },
    { name: 'Aircrack-ng', description: 'Wi-Fi network security testing suite', icon: 'Wifi', category: 'Wireless Security' },
    { name: 'Burp Suite', description: 'Web application vulnerability scanning and exploitation', icon: 'Shield', category: 'Web Security' },
    { name: 'Wireshark', description: 'Network protocol analyzer for deep packet inspection and traffic analysis', icon: 'Search', category: 'Network Security' },
    { name: 'SQL Injection', description: 'Manual and automated SQL injection discovery and exploitation techniques', icon: 'Database', category: 'Web Exploitation' },
    { name: 'XSS Attacks', description: 'Cross-site scripting detection, payload crafting, and exploitation', icon: 'Code', category: 'Web Exploitation' },
    { name: 'CSRF Attacks', description: 'Cross-site request forgery testing and mitigation analysis', icon: 'AlertTriangle', category: 'Web Exploitation' },
    { name: 'Python Scripting', description: 'Automating security tasks and developing custom tools', icon: 'Code', category: 'Programming' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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
          Security Toolkit
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
        >
          Professional tools for penetration testing, vulnerability assessment, and security auditing.
        </motion.p>
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card-apple p-6 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-apple-sm bg-apple-gray-50 flex items-center justify-center text-apple-gray-500 group-hover:bg-apple-gray-800 group-hover:text-white transition-all duration-400 flex-shrink-0">
                <Icon name={tool.icon} size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-body font-semibold text-apple-gray-800 mb-1">
                  {tool.name}
                </h3>
                <span className="text-caption text-apple-blue font-medium">
                  {tool.category}
                </span>
                <p className="text-body-sm text-apple-gray-400 mt-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecurityArsenal;
