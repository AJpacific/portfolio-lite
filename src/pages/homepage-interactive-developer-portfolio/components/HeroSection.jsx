import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import './HeroSection.css';

const SanskritBackground = () => {
  const containerRef = useRef(null);
  const [words, setWords] = useState([]);
  const wordIdCounter = useRef(0);

  const sanskritWords = ['ॐ', 'ॐ नमः शिवाय'];
  const sizes = ['medium', 'large', 'xlarge'];
  const [targetWordCount, setTargetWordCount] = useState(15);

  // Update word count based on screen size
  useEffect(() => {
    const updateWordCount = () => {
      if (window.innerWidth < 768) {
        setTargetWordCount(5); // Fewer words on mobile
      } else {
        setTargetWordCount(10);
      }
    };

    updateWordCount(); // Initial check
    window.addEventListener('resize', updateWordCount);
    return () => window.removeEventListener('resize', updateWordCount);
  }, []);

  // Get random position within safe zone
  const getRandomPosition = (containerWidth, containerHeight, wordSize) => {
    const padding = wordSize === 'xlarge' ? 100 : wordSize === 'large' ? 80 : 60;

    return {
      x: Math.random() * (containerWidth - padding), // Random position across full width
      y: Math.random() * (containerHeight - padding * 2) + padding, // Random position across full height
    };
  };

  // Check if new word overlaps with existing words
  const checkOverlap = (newPos, existingWords, newSize) => {
    const minDistance = newSize === 'xlarge' ? 150 : newSize === 'large' ? 120 : 100;

    for (let word of existingWords) {
      const distance = Math.sqrt(
        Math.pow(newPos.x - word.x, 2) + Math.pow(newPos.y - word.y, 2)
      );
      if (distance < minDistance) {
        return true;
      }
    }
    return false;
  };

  // Create a new word with random properties
  const createWord = (containerWidth, containerHeight, existingWords) => {
    const text = sanskritWords[Math.floor(Math.random() * sanskritWords.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const duration = 25 + Math.random() * 20; // 25-45 seconds (increased life span)

    let position;
    let attempts = 0;
    const maxAttempts = 50;

    // Try to find non-overlapping position
    do {
      position = getRandomPosition(containerWidth, containerHeight, size);
      attempts++;
    } while (
      checkOverlap(position, existingWords, size) &&
      attempts < maxAttempts
    );

    // If we couldn't find a spot after max attempts, use the last position anyway
    if (!position) {
      position = getRandomPosition(containerWidth, containerHeight, size);
    }

    return {
      id: wordIdCounter.current++,
      text,
      size,
      x: position.x,
      y: position.y,
      duration,
      delay: Math.random() * -20 // Start animation at random point
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;

    const initialWords = [];
    for (let i = 0; i < targetWordCount; i++) {
      const newWord = createWord(width, height, initialWords);
      initialWords.push(newWord);
    }
    setWords(initialWords);
  }, [targetWordCount]);

  return (
    <div className="sanskrit-background" ref={containerRef}>
      {words.map(word => (
        <div
          key={word.id}
          className={`sanskrit-word ${word.size}`}
          style={{
            left: word.x,
            top: word.y,
            animationDuration: `${word.duration}s`,
            animationDelay: `${word.delay}s`
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = ['Backend Development', 'Cybersecurity', 'Quantum Computing', 'Deep Learning'];

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
    { icon: 'Swords', href: 'https://codeforces.com/profile/AJpacific', label: 'Codeforces' },
    { icon: 'Mail', href: 'mailto:aj4ashutoshjha@gmail.com', label: 'Email' },
    { icon: 'FileText', href: 'https://drive.google.com/drive/u/1/folders/1SdoRbrI4-a58DQPXN5V_ryLVdvofROgA', label: 'Resume' },
  ];

  return (
    <div className="hero-section bg-apple-white">
      <SanskritBackground />
      <div className="max-w-apple mx-auto px-6 py-14 md:py-20 text-center relative z-10">
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
          Building secure backend systems, deep learning models, and cybersecurity-focused solutions that scale with impact.
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