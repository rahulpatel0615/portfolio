import { motion } from "framer-motion";

export function About() {
  const title = "Architecting the Digital Workplace.";
  const words = title.split(" ");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 blur-2xl opacity-30 scale-110"
              />
              
              {/* Profile Photo with Mask */}
              <div className="relative w-full h-full">
                <img 
                  src="/profile.jpg" 
                  alt="Rahul Patel"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage: 'radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              className="text-sm font-mono tracking-widest text-primary mb-4 uppercase relative inline-block"
            >
              About Me
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
              />
            </motion.h2>

            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 flex flex-wrap gap-x-3">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
            </h3>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
              <p>
                I am a passionate software engineer with over 4 years of experience specializing in the Microsoft ecosystem. My journey began with a deep curiosity for how technology can streamline human effort.
              </p>
              <p>
                Holding a Master's in Computer Science from the University of North Texas, I blend academic rigor with practical, hands-on experience building enterprise-grade solutions.
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
          </div>

        </div>
      </div>
    </section>
  );
}
