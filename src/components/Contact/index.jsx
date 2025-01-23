'use client';
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';

import anime from "animejs/lib/anime.es.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    return formData.name && formData.email && formData.message;
  };

  // Handle form submission with animation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent animation if there are errors
    if (!validateForm()) {
      setStatus("Please fill out all fields.");
      return;
    }

    const { name, email, message } = formData;

    // If no errors, start animation
    if (!isAnimating) {
      setIsAnimating(true);

      var basicTimeline = anime.timeline({
        autoplay: false,
      });

      // Reset progress bar and button states
      const progressBar = document.querySelector(".progress-bar");
      const button = document.querySelector(".button");

      // Animation for button and progress bar
      basicTimeline
        .add({
          targets: ".button",
          duration: 1300,
          width: "300px",
          height: "10px",
          backgroundColor: "#2B2D2F",
          border: "0",
          borderRadius: "100px",
          easing: "easeInOutQuad",
        })
        .add({
          targets: progressBar,
          duration: 2000,
          width: "100%",
          easing: "linear",
        })
        .add({
          targets: button,
          width: "0px",
          duration: 1,
          easing: "easeInOutQuad",
        })
        .add({
          targets: progressBar,
          width: "80px",
          height: "80px",
          delay: 500,
          duration: 750,
          borderRadius: "50%",
          backgroundColor: "#71DFBE",
          easing: "easeInOutQuad",
        });

      // Trigger animation on button click
      document.querySelector(".button").addEventListener("click", function () {
        basicTimeline.play();
      });

      // Simulate sending the email using EmailJS
      emailjs
        .sendForm(
          "service_uz41vhh",
          "template_rdta6oo",
          e.target,
          "htyfcWVzKKZ8lnezl"
        )
        .then(
          (result) => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setStatus("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto my-12" id="contact">
      {/* Contact Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 text-center">Feel free to reach out! I’d love to hear from you.</p>
      </motion.div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-6xl p-6 md:p-12 bg-gradient-to-br from-black to-red-1200 rounded-xl shadow-xl" id="form">
        <p className="text-gray-100 font-bold text-2xl md:text-3xl mb-6">Let´s connect!</p>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name ..."
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-600 py-3 pl-3 pr-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ..."
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-600 py-3 pl-3 pr-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-600 py-3 pl-3 pr-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color button transition-all duration-300 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        >
          Send Message
        </button>

        {/* Progress Bar */}
        <div className="progress-bar w-0 h-10 bg-gray-600 rounded-md mt-3"></div>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-4 text-lg ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
