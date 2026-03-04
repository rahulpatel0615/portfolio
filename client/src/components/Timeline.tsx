import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    role: "SharePoint Developer",
    company: "Bright Mind",
    period: "2022 - Present",
    desc: "Spearheaded migration of legacy on-premise farms to SharePoint Online. Built highly customized SPFx web parts and extensions for the corporate intranet.",
  },
  {
    role: "Power Platform Engineer",
    company: "Infosys",
    period: "2020 - 2022",
    desc: "Developed 20+ enterprise canvas and model-driven applications. Automated 50+ business processes using Power Automate, reducing manual entry time by 40%.",
  },
  {
    role: "Software Developer Intern",
    company: "KlientsGrowth",
    period: "2019 - 2020",
    desc: "Assisted in building custom Azure functions and logic apps to integrate external APIs with internal Microsoft systems.",
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    
    items.forEach((item: any, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    // Animate the line drawing down
    gsap.from(".timeline-line", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      },
      scaleY: 0,
      transformOrigin: "top center",
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section id="timeline" className="py-24 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-accent mb-4 uppercase">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Career Journey</h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`timeline-item relative flex items-center justify-between md:justify-normal w-full mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Icon Marker */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full glass border border-primary/50 text-white flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Briefcase size={20} />
              </div>

              {/* Empty Space for alignment on Desktop */}
              <div className="hidden md:block w-5/12" />

              {/* Content Card */}
              <div className="w-full pl-20 md:pl-0 md:w-5/12">
                <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-accent font-mono mb-4">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                  <h5 className="text-lg text-white/50 mb-4 font-display">{exp.company}</h5>
                  <p className="text-white/70 font-light text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
