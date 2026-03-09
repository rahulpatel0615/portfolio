import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import type { z } from "zod";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type FormData = z.infer<typeof insertMessageSchema>;

export function Contact() {
  const { mutate, isPending } = useCreateMessage();
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(insertMessageSchema),
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => {
        emailjs.send(
          'service_default',
          'template_contact',
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_name: 'Rahul Patel'
          },
          'YOUR_PUBLIC_KEY' // User will need to replace this or I use env var if provided
        ).then(() => {
          toast({ title: "Message sent!", description: "I'll get back to you soon." });
          reset();
        }).catch(() => {
          toast({ title: "Stored locally", description: "Email service pending setup, but your message is saved!" });
          reset();
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-primary mb-4 uppercase relative inline-block mx-auto"
          >
            Get In Touch
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
            />
          </motion.h2>
          <motion.h3 
            animate={{ 
              color: ["#ffffff", "#06b6d4", "#6366f1", "#ffffff"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Let's Build Something.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="p-3 bg-primary/20 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:rkpatel10116@gmail.com" className="text-white/60 hover:text-white transition-colors">rkpatel10116@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="p-3 bg-accent/20 text-accent rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-white/60">Dallas, TX</p>
              </div>
            </motion.div>

            <div className="pt-4 flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a 
                      whileHover={{ scale: 1.2, boxShadow: "0 0 25px #0077b5", backgroundColor: "#0077b5" }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.1}
                      href="https://www.linkedin.com/in/rahulpatel0615" 
                      target="_blank"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,119,181,0.3)]"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a 
                      whileHover={{ scale: 1.2, boxShadow: "0 0 25px rgba(255,255,255,0.8)", backgroundColor: "#333" }}
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.1}
                      href="https://github.com/rahulpatel0615" 
                      target="_blank"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                      <Github size={20} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    {...register("name")}
                    type="text" 
                    id="name"
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-[0_0_0px_rgba(6,182,212,0)] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                  <label htmlFor="name" className="absolute left-4 top-3 text-white/30 transition-all peer-focus:-top-6 peer-focus:left-1 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-1 peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">Name</label>
                  {errors.name && <p className="text-xs text-red-400 mt-1 ml-1">{errors.name.message}</p>}
                </div>
                <div className="relative group">
                  <input 
                    {...register("email")}
                    type="email" 
                    id="email"
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-[0_0_0px_rgba(6,182,212,0)] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                  <label htmlFor="email" className="absolute left-4 top-3 text-white/30 transition-all peer-focus:-top-6 peer-focus:left-1 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-1 peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">Email</label>
                  {errors.email && <p className="text-xs text-red-400 mt-1 ml-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="relative group">
                <textarea 
                  {...register("message")}
                  id="message"
                  rows={5}
                  placeholder=" "
                  className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none shadow-[0_0_0px_rgba(6,182,212,0)] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                />
                <label htmlFor="message" className="absolute left-4 top-3 text-white/30 transition-all peer-focus:-top-6 peer-focus:left-1 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-1 peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">Message</label>
                {errors.message && <p className="text-xs text-red-400 mt-1 ml-1">{errors.message.message}</p>}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isPending}
                className="relative overflow-hidden group w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
