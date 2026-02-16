import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Education = () => {
    const education = [
        {
            id: 1,
            institution: 'Galgotias University',
            degree: 'B.Tech, Computer Science and Engineering',
            period: '2022 – 2026',
            location: 'Greater Noida, Uttar Pradesh',
            grade: '9.31 CGPA (Current)',
            icon: 'GraduationCap',
        },
        {
            id: 2,
            institution: 'Indian Public School (CBSE)',
            degree: 'School Education',
            location: 'Madhubani, Bihar',
            details: [
                { label: 'HSC (Class 12 - PCM)', value: '83.6%', year: '2021' },
                { label: 'SSC (Class 10)', value: '94%', year: '2019' },

            ],
            icon: 'School',
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
                    Education
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-body-lg text-apple-gray-400 max-w-2xl mx-auto"
                >
                    Academic background and qualifications.
                </motion.p>
            </motion.div>

            {/* Education Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid md:grid-cols-2 gap-6"
            >
                {education.map((edu) => (
                    <motion.div
                        key={edu.id}
                        variants={itemVariants}
                        className="card-apple p-8 flex flex-col h-full"
                    >
                        {/* Header: Icon + Institution */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-apple-gray-50 flex items-center justify-center text-apple-gray-600 flex-shrink-0">
                                <Icon name={edu.icon} size={24} />
                            </div>
                            <div>
                                <h3 className="text-subtitle-sm font-bold text-apple-gray-800 leading-tight mb-1">
                                    {edu.institution}
                                </h3>
                                <p className="text-body-sm text-apple-gray-500">{edu.location}</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow space-y-4">
                            {/* Degree/Period */}
                            <div>
                                <p className="text-body font-semibold text-apple-gray-800 mb-1">
                                    {edu.degree}
                                </p>
                                {edu.period && (
                                    <p className="text-caption font-medium text-apple-blue">{edu.period}</p>
                                )}
                            </div>

                            {/* Grades */}
                            <div className="bg-apple-gray-50 rounded-xl p-4">
                                {edu.grade ? (
                                    <div className="flex justify-between items-center">
                                        <span className="text-body-sm font-medium text-apple-gray-600">CGPA</span>
                                        <span className="text-body-sm font-bold text-apple-gray-800">{edu.grade}</span>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {edu.details.map((detail, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-apple-gray-200 last:border-0 pb-2 last:pb-0">
                                                <span className="text-caption font-medium text-apple-gray-600">{detail.label}</span>
                                                <div className="text-right">
                                                    <span className="text-body-sm font-bold text-apple-gray-800 block">{detail.value}</span>
                                                    {detail.year && <span className="text-caption text-apple-gray-400 block">{detail.year}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
