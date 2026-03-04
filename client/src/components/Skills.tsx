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
  { name: "SharePoint", icon: FaMicrosoft, color: "#0078D4" },
  { name: "Power Apps", icon: FaMicrosoft, color: "#742774" },
  { name: "Power Automate", icon: FaMicrosoft, color: "#0066FF" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
  { name: "Azure", icon: FaCloud, color: "#0089D6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "C#", icon: FaCode, color: "#512BD4" },
  { name: "SQL", icon: FaDatabase, color: "#CC2927" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Teams", icon: FaUsers, color: "#6264A7" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-accent mb-4 uppercase"
          >
            Expertise
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
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer"
            >
              <div 
                className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10"
                style={{ color: skill.color }}
              >
                <skill.icon className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_8px_currentColor]" />
              </div>
              <span className="text-white/70 font-medium text-sm text-center group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
