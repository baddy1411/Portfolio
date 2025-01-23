import Home from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
// In _app.js or RootLayout.js
import './globals.css'; // Ensure the correct path to your globals.css
import StarrySky from '@/components/StarrySky'; // Import the StarrySky component


export default function Homepage() {
  return (
    <>
      {/* Background StarrySky Component */}
      <StarrySky />
      
      {/* Main Content */}
      <main>
        <Home />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
