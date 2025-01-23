"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'SQL', icon: '/icons/sql.svg' },
    { name: 'AWS', icon: '/icons/aws.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Jenkins', icon: '/icons/jenkins.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Pandas', icon: '/icons/pandas.svg' },
    { name: 'NumPy', icon: '/icons/numpy.svg' },
    { name: 'Scikit-Learn', icon: '/icons/scikit-learn.svg' },
    { name: 'Matplotlib', icon: '/icons/matplotlib.svg' },
    { name: 'Tableau', icon: '/icons/tableau.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' }
];

const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="p-10 text-white text-center">
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                className="text-4xl font-bold mb-6"
            >
                Skills
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
            >
                I have experience working with various tools and technologies in data engineering and analysis.
            </motion.p>
            
            <motion.div 
                className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Ensures animation happens only once
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex flex-col items-center space-y-3">
                        <Image 
                            src={skill.icon} 
                            alt={skill.name} 
                            width={64} 
                            height={64} 
                            className="transition-transform transform hover:scale-110 duration-300"
                        />
                        <p className="text-lg font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
