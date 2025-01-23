'use client';   
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const About = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Mark as client-side after mounting
    }, []);

    if (!isClient) return null; // Prevent rendering on the server

    return (
        <section 
            id="about" 
            className="relative flex items-center justify-center p-20 text-white"
        >
            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 max-w-3xl text-center"
            >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg leading-relaxed">
                    I am a Data Engineering student at Constructor University, Germany, specializing in Big Data Analytics, Cloud Computing, and Machine Learning. 
                    I have over 2 years of experience in ETL optimization, cloud infrastructure development, and predictive modeling with Python, SQL, and AWS tools.
                </p>
            </motion.div>
        </section>
    );
}

export default About;
