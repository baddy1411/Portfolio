"use client";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiCypress } from "react-icons/si";
import { BsAwardFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Certifications = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component has mounted (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Return null during SSR to avoid hydration mismatch

  const certifications = [
    {
      title: "Cypress - Modern Automation Testing",
      year: "2023",
      icon: <SiCypress className="text-4xl text-green-400" />,
      color: "from-green-600/20 to-green-400/5",
      link: "#" // Add your certification link here
    },
    {
      title: "AWS Certified Data Engineer",
      year: "2025",
      icon: <FaAws className="text-4xl text-yellow-400" />,
      color: "from-yellow-600/20 to-yellow-400/5",
      link: "#" // Add your certification link here
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="text-white min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-4"
      >
        <BsAwardFill className="text-4xl md:text-5xl text-white" />
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text ">
          Certifications
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`relative group rounded-xl bg-gradient-to-br ${cert.color} p-6 border border-white/10 backdrop-blur-sm transition-all duration-300`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/30 backdrop-blur-sm">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Issued: {cert.year}
                  </p>
                </div>
              </div>
            </a>

            {/* Hover indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute bottom-4 right-4 text-purple-400/50 group-hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-sm">View Certificate →</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
