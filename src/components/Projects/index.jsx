"use client";
import React, { useState, useEffect } from 'react'; // Import React hooks
import { Card, CardContent } from "@/components/ui/card"; // Correct named import
import { motion } from "framer-motion";
import { FaProjectDiagram, FaTools, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // ScrollReveal animation
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default; 
        const sr = ScrollReveal({ 
          origin: 'bottom',
          distance: '20px',
          duration: 500,
          delay: index * 100,
          easing: 'ease-in-out',
        });
        sr.reveal(`.project-card-${index}`); // Scoped reveal to specific project card
      }
    };

    initScrollReveal();
  }, [index]);

  return (
    <motion.div
      className={`project-card-${index}`} // Scoped class for specific project card
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="relative  p-6 rounded-xl shadow-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Feather fade effect around the card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#260012] via-transparent to-transparent opacity-80" />

        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 transform rotate-12 scale-150" />

        {/* Floating 3D Elements */}
        <motion.div
          className="absolute -right-4 -top-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 90 : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        <CardContent className="relative z-10">
          {/* Project Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaProjectDiagram className="text-pink-400 text-3xl" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-pink-300">{project.organization} | {project.date}</p>
              </div>
            </div>

            {/* Github Link */}
            <motion.a
              href={`https://github.com/yourusername/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-2xl" />
            </motion.a>
          </div>

          {/* Description */}
          <motion.ul className="space-y-3 text-gray-300 mb-6">
            {project.description.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-pink-400 mt-1">•</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <FaTools className="text-pink-400" />
              <span className="text-white font-semibold">Tools Used:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-pink-500/20 rounded-full text-pink-300 text-sm"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Examination Management System",
      organization: "Constructor University | Team Project",
      date: "August 2024 – December 2024",
      description: [
        "Led the development of a cloud-based examination planning system using AWS services, ensuring scalability and performance.",
        "Designed and implemented a GDPR-compliant microservices architecture for secure and efficient data handling.",
        "Developed a dynamic admin dashboard using React and Material-UI for streamlined user management and data visualization.",
        "Managed a diverse, international team of four members, ensuring timely project delivery and adherence to quality standards."
      ],
      tools: ["AWS Glue", "AWS Lambda", "RDS", "EC2", "React", "Material-UI", "Docker", "Python", "Git"]
    },
    {
      title: "Real-Time Weather Analytics Platform",
      organization: "Personal Project",
      date: "December 2023",
      description: [
        "Built a real-time data streaming pipeline capable of processing over 100,000 weather data points daily.",
        "Implemented real-time analytics using Apache Kafka and Python to deliver immediate insights into weather patterns.",
        "Containerized application components with Docker for enhanced scalability and simplified deployment.",
        "Ensured fault-tolerant and reliable data streaming using Kafka Connect and Zookeeper."
      ],
      tools: ["Apache Kafka", "Python", "Docker", "Kafka Connect", "Zookeeper", "Pandas", "Matplotlib"]
    },
    {
      title: "Flight Data Analysis Platform",
      organization: "Personal Project",
      date: "2023",
      description: [
        "Analyzed over 10 million flight datasets using Python’s data analysis ecosystem, including Pandas and NumPy.",
        "Developed machine learning models achieving 85% accuracy for flight delay predictions using Scikit-learn.",
        "Created interactive dashboards in Tableau for visualizing flight patterns and delays.",
        "Engineered ETL pipelines to automate data ingestion, transformation, and loading."
      ],
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Tableau", "SQL", "Jupyter Notebook"]
    },
    {
      title: "COVID-19 Case Data Cleansing & Modeling",
      organization: "Personal Project",
      description: [
        "Cleansed and transformed COVID-19 datasets for better consistency and accuracy using Python.",
        "Built machine learning models to forecast infection trends with Scikit-learn and XGBoost.",
        "Designed interactive dashboards using Tableau for visualizing regional infection surges.",
        "Engineered a data pipeline for automated ingestion and transformation using AWS Glue."
      ],
      tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Tableau", "AWS Glue", "Matplotlib"]
    },
    {
      title: "E-Commerce Sales Cleansing & Modeling",
      organization: "Personal Project",
      description: [
        "Cleaned and modeled e-commerce sales data using SQL and Python for data accuracy.",
        "Implemented feature engineering techniques for enhanced customer segmentation and performance tracking.",
        "Developed Tableau dashboards to highlight sales trends and customer behavior.",
        "Built a data pipeline using Python and PostgreSQL for streamlined data analysis."
      ],
      tools: ["Python", "SQL", "PostgreSQL", "Tableau", "Pandas", "Matplotlib"]
    },
    {
      title: "Real Estate Transactions Cleansing & Modeling",
      organization: "Personal Project",
      description: [
        "Performed data cleansing and transformation on real estate datasets using Python and SQL.",
        "Developed a data pipeline for automating data cleaning and transformation using Pandas.",
        "Built a regression model using Scikit-learn for property price prediction.",
        "Created an interactive Tableau dashboard showcasing property trends and insights."
      ],
      tools: ["Python", "SQL", "PostgreSQL", "Pandas", "Scikit-learn", "Tableau"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header for Projects Section */}
        <h2 className="text-4xl font-semibold text-white text-center mb-12">Projects</h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
