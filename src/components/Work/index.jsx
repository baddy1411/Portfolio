'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Building2, Calendar, Medal } from 'lucide-react';

const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Riot Labz Pvt. Ltd.",
      date: "Jan 2024 – Jul 2024",
      logo: "/logos/riotlabz.png", // Ensure this path is correct
      description: [
        "Engineered data pipelines using Python, Pandas, and SQLAlchemy to automate data extraction, transformation, and loading (ETL).",
        "Developed machine learning models for customer behavior analysis and sales forecasting, improving campaign accuracy by 18%.",
        "Created interactive Tableau dashboards for real-time performance insights.",
        "Implemented Docker to containerize data applications.",
        "Collaborated with senior data engineers to optimize data pipeline performance.",
      ],
      skills: [
        "Python", 
        "Pandas", 
        "SQLAlchemy", 
        "Machine Learning", 
        "Tableau", 
        "Docker", 
        "Data Pipelines"
      ],
      achievements: [
        "Improved campaign accuracy by 18% through machine learning models.",
        "Reduced data pipeline performance bottlenecks by 20%."
      ]
    },
    {
      id: 2,
      title: "Software Engineer/Analyst",
      company: "Capgemini",
      date: "Feb 2022 – Nov 2023",
      logo: "/logos/capgemini.png", // Ensure this path is correct
      description: [
        "Developed and optimized ETL pipelines using Apache Spark and AWS Glue.",
        "Contributed to predictive models with 90% accuracy using Scikit-learn.",
        "Automated data validation tasks with Python and SQL, reducing manual effort by 40%.",
        "Collaborated with data engineers to deliver scalable data pipelines.",
        "Used AWS Lambda and CloudWatch for data pipeline monitoring.",
      ],
      skills: [
        "Apache Spark", 
        "AWS Glue", 
        "Scikit-learn", 
        "Python", 
        "SQL", 
        "AWS Lambda", 
        "CloudWatch", 
        "ETL Pipelines"
      ],
      achievements: [
        "Optimized ETL pipeline performance, reducing processing time by 30%.",
        "Contributed to a predictive model with 90% accuracy."
      ]
    },
    {
      id: 3,
      title: "Graduate Engineer Trainee",
      company: "Bosch India",
      date: "Oct 2020 – Jan 2021",
      logo: "/logos/bosch.png", // Ensure this path is correct
      description: [
        "Implemented a data-driven process optimization project using SQL and Power BI.",
        "Automated data reporting tasks using Python and Excel VBA.",
        "Conducted data analysis to identify bottlenecks, reducing equipment downtime by 12%.",
        "Collaborated with teams across Germany and India for performance benchmarking.",
      ],
      skills: [
        "SQL", 
        "Power BI", 
        "Python", 
        "Excel VBA", 
        "Data Analysis"
      ],
      achievements: [
        "Reduced equipment downtime by 12% through data-driven optimizations.",
        "Automated reporting tasks, reducing manual work by 50%."
      ]
    },
    {
      id: 4,
      title: "Student Assistant",
      company: "Sri Ramakrishna Engineering College",
      date: "Nov 2019 – Aug 2020",
      logo: "/logos/srec.png", // Ensure this path is correct
      description: [
        "Provided technical support for laboratory setups and data collection.",
        "Assisted in academic research projects, contributing to data analysis.",
        "Coordinated workshops on data analysis tools like Excel and MATLAB.",
      ],
      skills: [
        "Excel", 
        "MATLAB", 
        "Data Analysis", 
        "Technical Support"
      ],
      achievements: [
        "Coordinated workshops to improve data analysis skills among students.",
        "Assisted in several academic research projects contributing to data analysis."
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h2 className="text-5xl font-bold text-transparent  text-white">
          Work Experience
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 max-w-6xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <motion.div
          key={index}
          variants={item}
          className="relative"
          whileInView={{ opacity: 1, y: 0 }} // Only animate when in view
          initial={{ opacity: 0, y: 20 }} // Start from hidden state
          transition={{ duration: 0.3 }} // Quick transition
          viewport={{ once: true }} // Trigger animation only once
          >
            <div className="relative h-full rounded-xl p-6 border border-zinc-700/50 group overflow-hidden">
              {/* Feather Fade Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#260012] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-250" />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-zinc-400">{exp.title}</p>
                  </div>
                </motion.div>

                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>

                <p className="text-zinc-300 mb-4">{exp.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }} // Add scale effect on hover for skills
                      className="px-3 py-1 text-sm rounded-full bg-zinc-700/50 text-zinc-300 border border-zinc-600/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achieveIndex) => (
                    <motion.div
                      key={achieveIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * achieveIndex }}
                      className="flex items-center gap-2 text-zinc-400"
                    >
                      <Medal className="w-4 h-4 text-white" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-900/90 to-transparent"
                >
                  <div className="flex items-center justify-center gap-2 text-white cursor-pointer">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperience;
