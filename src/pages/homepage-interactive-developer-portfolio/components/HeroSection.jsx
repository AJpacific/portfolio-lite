import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = ['Backend', 'Cybersecurity', 'Quantum Computing', 'Deep Learning'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '3+', label: 'Years' },
    { number: '15+', label: 'Skills' },
  ];

  const socials = [
    { icon: 'Github', href: 'https://github.com/AJpacific', label: 'GitHub' },
    { icon: 'Linkedin', href: 'http://www.linkedin.com/in/ajpacific', label: 'LinkedIn' },
    { icon: 'Code', href: 'https://leetcode.com/u/AJpacific/', label: 'LeetCode' },
    { icon: 'Mail', href: 'mailto:aj4ashutoshjha@gmail.com', label: 'Email' },
    { icon: 'FileText', href: '/assets/images/Ashutosh_Jha_Resume.pdf', label: 'Resume' },
  ];

  return (
    <div className="bg-apple-white min-h-screen flex items-center justify-center relative overflow-hidden pt-12">
      <div className="max-w-apple mx-auto px-6 py-14 md:py-20 text-center">
        {/* Profile Image */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-10 flex justify-center"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-[28px] overflow-hidden shadow-apple-lg ring-8 ring-apple-gray-200">
            <Image
              src="/assets/images/pfp.jpg"
              alt="Ashutosh Jha"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-hero-sm md:text-hero font-bold text-apple-gray-800 mb-5 font-display"
        >
          Ashutosh Jha<span className="text-gradient-apple">.</span>
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="text-subtitle-sm md:text-subtitle text-apple-gray-400 font-semibold">
            {displayText}
            <span className="inline-block w-[2px] h-[1em] bg-apple-blue ml-1 align-middle animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-body-lg md:text-body-xl text-apple-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting secure, scalable applications where innovative code meets cybersecurity excellence. Bridging the gap between creative development and digital protection.
        </motion.p>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex justify-center gap-8 md:gap-16 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-apple-gray-800">{stat.number}</div>
              <div className="text-body-sm text-apple-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex justify-center gap-3"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-apple-gray-50 hover:bg-apple-gray-100 flex items-center justify-center text-apple-gray-500 hover:text-apple-gray-800 transition-all duration-300"
              title={social.label}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-apple-gray-300"
          >
            <Icon name="ChevronDown" size={22} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;