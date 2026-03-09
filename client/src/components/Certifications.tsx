import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTS = [
  {
    title: "Power Platform App Maker Associate",
    issuer: "Microsoft",
    date: "2023",
    badge: "https://images.credly.com/size/340x340/images/29ef06ef-06bb-4df0-88cf-6009ec00600d/microsoft-certified-power-platform-app-maker-associate.png",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    badge: "https://images.credly.com/size/340x340/images/be26ed4d-ec33-480c-809f-06796696160e/microsoft-certified-azure-ai-fundamentals.png",
  },
  {
    title: "PL-400: Power Platform Developer",
    issuer: "Microsoft",
    date: "2023",
    badge: "https://images.credly.com/size/340x340/images/39908ef2-9494-46fd-b60d-000000000000/power-platform-developer-associate.png",
  },
  { title: "Global Agile Developer", issuer: "Infosys", date: "2022" },
  { title: "Quality Certified Engineer", issuer: "Infosys", date: "2022" },
  { title: "SPFx Basics", issuer: "Infosys", date: "2022" },
  { title: "Certified CPQ Developer", issuer: "Infosys", date: "2022" },
  { title: "Machine Learning", issuer: "NPTEL", date: "2021" },
  { title: "Cloud Computing", issuer: "NPTEL", date: "2021" },
  { title: "Java Programming", issuer: "HackerRank", date: "2021" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-primary mb-4 uppercase relative inline-block mx-auto"
          >
            Accolades
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
            />
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Certifications
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/50 transition-all border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-tight mb-1">{cert.title}</h4>
                <p className="text-white/50 text-xs">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
