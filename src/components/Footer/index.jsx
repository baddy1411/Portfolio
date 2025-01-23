"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-gradient #260012 to-black text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm md:text-base">
          © {new Date().getFullYear()} Badrish M Srinivasan. All Rights Reserved.
        </p>

        <div className="mt-6 flex justify-center space-x-6">
          <motion.a
            href="https://linkedin.com/in/badrishms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 transition-colors duration-300 text-lg"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:badrishms@gmail.com"
            className="text-white hover:text-red-400 transition-colors duration-300 text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Email
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
