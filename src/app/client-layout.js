"use client"; // ✅ Client component handling Parallax and Navbar
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "@/components/Navbar";
// In _app.js or RootLayout.js
import './globals.css'; // Ensure the correct path to your globals.css

import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
    return (
        <ParallaxProvider>
            <Navbar />
            <main className="relative flex-1 w-full">{children}</main>
            
        </ParallaxProvider>
    );
}
