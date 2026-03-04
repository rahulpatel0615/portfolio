import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Lock scroll while loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoaded]);

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <Loader onComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Only render custom cursor on non-touch devices ideally, but assuming desktop focus for portfolio */}
          <div className="hidden md:block">
            <CustomCursor />
          </div>
          
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Timeline />
            <Stats />
            <Contact />
          </main>
          
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
