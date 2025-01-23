"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    const throttledControlNavbar = () => {
      setTimeout(controlNavbar, 100);
    };

    window.addEventListener("scroll", throttledControlNavbar);
    return () => window.removeEventListener("scroll", throttledControlNavbar);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navItems = [
    "Home",
    "About",
    "Work",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-8 md:py-6">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Badrish Srinivasan
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-white">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                href={`#${section.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                aria-label={`Go to ${section}`}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10 transition duration-300 fixed top-4 right-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-90 text-white z-50 flex flex-col items-center justify-start h-screen overflow-y-auto"
          >
            <div className="w-full flex flex-col items-center justify-start mt-20">
              {navItems.map((section) => (
                <motion.div key={section} className="w-full text-center">
                  <Link
                    href={`#${section.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl hover:text-purple-400 transition duration-300 hover:bg-white/5"
                  >
                    {section}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
