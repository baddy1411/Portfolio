import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"; // Import global styles for the background animation and others

// ✅ Keep metadata here without "use client"
export const metadata = {
    title: "Badrish M S | Portfolio",
    description: "Data Engineer & Analyst Portfolio",
};

// ✅ Use Client Components Separately
import ClientLayout from "./client-layout";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col overflow-x-hidden bg-[radial-gradient(circle, #66027e, #3b0b18, #080724)] animate-gradientShift">
                {/* Client layout separated here */}
                <ClientLayout>
                    {/* Optional Navbar: You can add this globally in the layout if needed */}
                    <Navbar />
                    {children}
                    {/* Optional Footer: Add Footer at the bottom */}
                    
                </ClientLayout>
            </body>
        </html>
    );
}
