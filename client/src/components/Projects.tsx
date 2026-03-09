import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TiltCard } from "./TiltCard";

const PROJECTS = [
  {
    title: "Sales Data Dashboard",
    description: "An interactive Power BI dashboard tracking global sales metrics in real-time, pulling data via complex SQL pipelines.",
    tech: ["Power BI", "SQL Server", "DAX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Leave Management Portal",
    description: "A comprehensive canvas app for employees to request and managers to approve time off, fully automated with Power Automate flows.",
    tech: ["Power Apps", "Power Automate", "SharePoint Lists"],
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Enterprise Intranet Hub",
    description: "A modern, highly customized SharePoint Online communication site serving as the central hub for 500+ employees.",
    tech: ["SharePoint Online", "SPFx", "React"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Agent-based Ridesharing Simulation",
    description: "Advanced simulation of autonomous ridesharing behavior developed at UNT using complex algorithms.",
    tech: ["Python", "Simulation", "AI"],
    image: "https://images.unsplash.com/photo-1558444479-c8f010524776?w=800&q=80",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "InfoPath to Power App Conversion",
    description: "Modernization of legacy InfoPath forms into high-performance Power Apps canvas applications for enterprise scale.",
    tech: ["Power Apps", "Legacy Migration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "SharePoint Workflow to Power Automate",
    description: "Automated migration and redevelopment of legacy SharePoint workflows into modern Power Automate flows.",
    tech: ["Power Automate", "SharePoint"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "Power Platform Apps Dev & Migration",
    description: "Full-lifecycle development and migration of suite of Power Platform applications for global enterprise clients.",
    tech: ["Power Platform", "Dataverse", "Azure"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono tracking-widest text-primary mb-4 uppercase"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Featured Works
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group border-white/5 hover:border-primary/30 transition-colors duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay z-10`} />
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                    {/* Unsplash abstract tech imagery */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col relative z-20 bg-card/80 backdrop-blur-xl -mt-4 rounded-t-2xl">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-white/60 text-sm mb-6 flex-1 font-light leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                      <button className="flex items-center gap-2 text-sm text-white hover:text-accent transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </button>
                      <button className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                        <Github size={16} /> Source
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
