import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Lumen Technologies India',
            role: 'Intern',
            period: 'Feb 2026 – Present',
            location: 'Hybrid, India',
            icon: 'Briefcase',
            stack: ['Microsoft Fabric', 'Copilot Studio', 'Power Automate', 'Azure', 'OneLake', 'SQL', 'Python', 'PySpark', 'Pandas'],
            bullets: [
                'Developed Microsoft Fabric data agent to answer natural-language queries on pipelines, workflows, and processes.',
                'Building Microsoft Fabric accelerators to automate manual data engineering tasks and streamline workflows.',
                'Designing and deploying additional AI agents and Power Automate flows to eliminate repetitive manual processes across data engineering operations.',
            ],
        },
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
                    Experience
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
                >
                    Professional work and internship experience.
                </motion.p>
            </motion.div>

            {/* Experience Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="flex flex-col gap-6"
            >
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="card-apple p-8"
                    >
                        {/* Header: Icon + Company + Period badge */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-apple-gray-50 flex items-center justify-center text-apple-gray-600 flex-shrink-0">
                                    <Icon name={exp.icon} size={24} />
                                </div>
                                <div>
                                    <h3 className="text-subtitle-sm font-bold text-apple-gray-800 leading-tight mb-1">
                                        {exp.company}
                                    </h3>
                                    <p className="text-body-sm text-apple-gray-500">{exp.location}</p>
                                </div>
                            </div>
                            <span className="text-caption font-semibold text-apple-blue bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                {exp.period}
                            </span>
                        </div>

                        {/* Role */}
                        <p className="text-body font-semibold text-apple-gray-800 mb-5">
                            {exp.role}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {exp.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-caption font-medium text-apple-gray-600 bg-apple-gray-50 border border-apple-gray-200 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                            {exp.bullets.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-apple-blue flex-shrink-0" />
                                    <p className="text-body-sm text-apple-gray-600 leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Experience;
