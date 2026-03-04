import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative framing */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl rotate-6 transition-transform duration-500 hover:rotate-12" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl backdrop-blur-3xl" />
              
              {/* Inner content (Abstract Avatar Replacement since no photo provided) */}
              <div className="absolute inset-4 glass-card rounded-2xl flex items-center justify-center overflow-hidden group">
                <div className="text-9xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">R.</div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-10 p-3 glass rounded-xl text-cyan-400"
                >
                  <Code2 size={24} />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 right-10 p-3 glass rounded-xl text-indigo-400"
                >
                  <Database size={24} />
                </motion.div>
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-4 p-3 glass rounded-xl text-purple-400"
                >
                  <LayoutTemplate size={24} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono tracking-widest text-primary mb-4 uppercase">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Architecting the <span className="text-gradient">Digital Workplace</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
              <p>
                I am a passionate software engineer with over 4 years of experience specializing in the Microsoft ecosystem. My journey began with a deep curiosity for how technology can streamline human effort.
              </p>
              <p>
                Holding a Master of Science in Computer Science from the University of North Texas, I blend academic rigor with practical, hands-on experience building enterprise-grade solutions.
              </p>
              <p>
                Currently based in Dallas, TX, I work remotely to design, develop, and deploy scalable applications using SharePoint Online, Power Platform, and Azure—empowering organizations to do their best work.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 glass-card rounded-xl">
                <h4 className="text-3xl font-display font-bold text-white mb-1">4+</h4>
                <p className="text-sm text-white/50">Years Experience</p>
              </div>
              <div className="p-4 glass-card rounded-xl">
                <h4 className="text-3xl font-display font-bold text-white mb-1">MS</h4>
                <p className="text-sm text-white/50">Computer Science</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
