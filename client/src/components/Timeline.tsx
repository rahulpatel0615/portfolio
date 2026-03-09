import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    role: "SharePoint Developer",
    company: "Bright Mind",
    period: "Jul 2025 – Present (9 months, Remote)",
    desc: "Spearheaded migration of legacy on-premise farms to SharePoint Online. Built highly customized SPFx web parts and extensions for the corporate intranet.",
    type: "work"
  },
  {
    role: "Power Platform Engineer",
    company: "Infosys",
    period: "2020 - 2022",
    desc: "Developed 20+ enterprise canvas and model-driven applications. Automated 50+ business processes using Power Automate, reducing manual entry time by 40%.",
    type: "work"
  },
  {
    role: "Software Developer Intern",
    company: "KlientsGrowth",
    period: "2019 - 2020",
    desc: "Assisted in building custom Azure functions and logic apps to integrate external APIs with internal Microsoft systems.",
    type: "work"
  },
];

const EDUCATION = [
  {
    degree: "MS Computer Science",
    school: "University of North Texas",
    period: "Aug 2023 – May 2025",
    type: "edu"
  },
  {
    degree: "BTech Computer Engineering",
    school: "Dr. Babasaheb Ambedkar Technological University",
    period: "Jul 2017 – Jul 2021",
    type: "edu"
  }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".timeline-line-inner", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: 1
      },
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-accent mb-4 uppercase relative inline-block"
          >
            Journey
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
            />
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Experience & Education
          </motion.h3>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          <div className="timeline-line-inner absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

          {[...EXPERIENCES, ...EDUCATION].map((item, idx) => (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full h-full rounded-full glass border border-primary/50 text-white flex items-center justify-center relative bg-[#050510]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border border-accent/50 pointer-events-none"
                  />
                </motion.div>
              </div>

              <div className="hidden md:block w-5/12" />

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", damping: 20 }}
                className="w-full pl-20 md:pl-0 md:w-5/12 group perspective-1000"
              >
                <motion.div 
                  whileHover={{ 
                    rotateY: idx % 2 === 0 ? -5 : 5,
                    rotateX: 5,
                    scale: 1.02,
                    borderColor: "rgba(6, 182, 212, 0.5)"
                  }}
                  className="glass-card p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-visible"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-accent font-mono mb-4">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {item.type === 'work' ? (item as any).role : (item as any).degree}
                  </h4>
                  <h5 className="text-lg text-white/50 mb-4 font-display">
                    {item.type === 'work' ? (item as any).company : (item as any).school}
                  </h5>
                  {item.type === 'work' && (
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      {(item as any).desc}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
