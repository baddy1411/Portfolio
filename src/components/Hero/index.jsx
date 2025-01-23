'use client';
import React from "react";
import Image from "next/image";
import profilepic from "../../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-[80px] min-h-screen p-4 md:p-8 lg:p-12 text-white overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 w-full max-w-7xl mx-auto">
        {/* Left Section: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-left w-full px-4 lg:px-0"
        >
          {/* Typing Effect */}
          <TypeAnimation
            sequence={[
              "Data Engineer",
              1000,
              "Data Analyst",
              1000,
              "Cloud Enthusiast",
              1000,
              "ML Engineer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-3xl lg:text-4xl italic mb-2 md:mb-4"
          />

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-200 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 md:mb-4 leading-tight" 
          >
            HI, I AM <br />
            <span className="text-red-500 font-black">BADRISH M S</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-400 max-w-[700px] text-sm md:text-base lg:text-lg font-light tracking-wide mb-4 md:mb-6" 
          >
            I am a passionate Data Engineer & Analyst pursuing a Master of Science in Data Engineering.
          </motion.p>

          {/* Call to Action & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
          >
            {/* Download Button */}
            <a href="/Badrish_CV.pdf" download>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer font-bold text-gray-400 px-4 py-2 md:px-6 md:py-3 border border-red-500 rounded-xl text-sm md:text-base"
              >
                Download CV
              </motion.button>
            </a>

            {/* Social Icons */}
            <div className="flex flex-row gap-4 md:gap-6 text-2xl md:text-3xl lg:text-4xl text-red-500">
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                target="_blank"
                className="hover:text-red-600 transition-colors duration-300"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                target="_blank"
                className="hover:text-red-600 transition-colors duration-300"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 relative"
        >
          <Image
            src={profilepic}
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;