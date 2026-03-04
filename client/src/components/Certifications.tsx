export function Certifications() {
  const certs = [
    "Microsoft Certified: Power Platform App Maker Associate",
    "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    "Microsoft Certified: Azure AI Fundamentals",
    "SharePoint Online Administrator Certification",
    "Microsoft Certified: Power Platform App Maker Associate",
    "Microsoft Certified: Power Platform Developer Associate (PL-400)",
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden flex relative">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-ticker">
        {certs.map((cert, i) => (
          <div key={i} className="flex items-center mx-8">
            <div className="w-2 h-2 rounded-full bg-accent mr-4" />
            <span className="text-xl md:text-2xl font-display font-medium text-white/40 uppercase tracking-wider">
              {cert}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
