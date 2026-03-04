import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-white/50 text-sm font-light">
          © {new Date().getFullYear()} Rahul Patel. All rights reserved.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </motion.button>
        
      </div>
    </footer>
  );
}
