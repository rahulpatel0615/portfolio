import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const STATS = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Enterprise Projects" },
  { value: 3, suffix: "", label: "Major Certifications" },
  { value: 40, suffix: "%", label: "Faster Workflows" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-primary/5 mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} useEasing={true} />
                ) : "0"}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-white/50 text-sm md:text-base font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
