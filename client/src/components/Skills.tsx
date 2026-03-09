import { motion } from "framer-motion";
import { 
  FaMicrosoft, 
  FaPython, 
  FaDatabase, 
  FaJs,
  FaChartBar,
  FaCloud,
  FaUsers,
  FaCode
} from "react-icons/fa6";

const SKILLS = [
  { name: "SharePoint", icon: FaMicrosoft, color: "#0078D4", url: "https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" },
  { name: "Power Apps", icon: FaMicrosoft, color: "#742774", url: "https://powerapps.microsoft.com/" },
  { name: "Power Automate", icon: FaMicrosoft, color: "#0066FF", url: "https://powerautomate.microsoft.com/" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811", url: "https://powerbi.microsoft.com/" },
  { name: "Azure", icon: FaCloud, color: "#0089D6", url: "https://azure.microsoft.com/" },
  { name: "Python", icon: FaPython, color: "#3776AB", url: "https://www.python.org/" },
  { name: "C#", icon: FaCode, color: "#512BD4", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "SQL", icon: FaDatabase, color: "#CC2927", url: "https://www.microsoft.com/en-us/sql-server/" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Teams", icon: FaUsers, color: "#6264A7", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-accent mb-4 uppercase relative inline-block"
          >
            Expertise
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
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            My Tech Arsenal
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1 
              }}
              animate={{
                y: [0, -10, 0],
              }}
              //@ts-ignore
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
              whileHover={{ 
                y: -18,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-visible border border-white/5 hover:border-transparent transition-colors duration-300"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
              />
              
              <div 
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderColor: skill.color, boxShadow: `0 0 20px ${skill.color}40` }}
              />

              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10"
                style={{ color: skill.color }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <skill.icon className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_8px_currentColor]" />
                </motion.div>
              </motion.div>
              <span className="text-white/70 font-medium text-sm text-center group-hover:text-white transition-colors relative z-10">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
