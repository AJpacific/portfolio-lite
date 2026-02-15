import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'Software Engineering',
            issuer: 'NPTEL (IIT Kharagpur)',
            date: 'Jul-Oct 2024',
            description: 'Ranked in the Top 5% nationwide; awarded Elite certification with a score of 73%.',
            link: '/assets/images/Software%20Engineering.pdf',
            icon: 'Award',
            color: 'text-blue-500',
        },
        {
            id: 2,
            title: 'Compiler Design',
            issuer: 'NPTEL (IIT Kharagpur)',
            date: 'Jan-Apr 2025',
            description: 'Ranked in the Top 5% nationwide; awarded Elite certification with a score of 75%.',
            link: '/assets/images/Compiler%20Design.pdf',
            icon: 'Cpu',
            color: 'text-purple-500',
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
                    Certifications
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
                >
                    Specialized credentials and academic recognitions.
                </motion.p>
            </motion.div>

            {/* Certs Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid md:grid-cols-2 gap-6"
            >
                {certifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        variants={itemVariants}
                        className="card-apple p-8 flex flex-col items-start hover:border-apple-blue/30 border border-transparent transition-colors duration-300"
                    >
                        <div className={`w-12 h-12 rounded-2xl bg-apple-gray-50 flex items-center justify-center mb-6 ${cert.color}`}>
                            <Icon name={cert.icon} size={24} />
                        </div>

                        <h3 className="text-subtitle-sm font-bold text-apple-gray-800 mb-2">
                            {cert.title}
                        </h3>

                        <div className="mb-4">
                            <p className="text-body-sm font-semibold text-apple-gray-500">
                                {cert.issuer}
                            </p>
                            <p className="text-caption font-medium text-apple-blue mt-1">
                                {cert.date}
                            </p>
                        </div>

                        <p className="text-body text-apple-gray-500 mb-6 leading-relaxed flex-grow">
                            {cert.description}
                        </p>

                        <a
                            href={cert.link}
                            className="inline-flex items-center gap-2 text-body-sm font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-300"
                        >
                            <Icon name="ExternalLink" size={16} />
                            <span>Verify Credential</span>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Certifications;
