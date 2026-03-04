import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import type { z } from "zod";

type FormData = z.infer<typeof insertMessageSchema>;

export function Contact() {
  const { mutate, isPending } = useCreateMessage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(insertMessageSchema),
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest text-primary mb-4 uppercase"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Let's Build Something.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:hello@rahulpatel.dev" className="text-white/60 hover:text-white transition-colors">hello@rahulpatel.dev</a>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-accent/20 text-accent rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-white/60">Dallas, TX (Remote)</p>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Name</label>
                  <input 
                    {...register("name")}
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Email</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
                {errors.message && <p className="text-xs text-red-400 ml-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className="group w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
