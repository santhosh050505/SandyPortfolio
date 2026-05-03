import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificatesData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "January - April 2024",
    description: "Comprehensive Java programming certification covering OOP concepts, data structures, and advanced Java features",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft Azure",
    date: "February 2025",
    description: "Global certification in Microsoft Azure cloud services and fundamentals",
    badge: "Global Certification",
  },
  {
    title: "HTML & CSS",
    issuer: "Great Learning",
    date: "2024",
    description: "Web development fundamentals certification focusing on HTML5 and CSS3",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider break-words">
            Certs & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-20">
          {/* Illustration Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative w-full flex justify-center">
              <img 
                src="/certs.png" 
                alt="Achievements Illustration" 
                className="w-48 h-48 object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] animate-[pulse_3s_ease-in-out_infinite]"
              />
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-xs font-black text-white uppercase tracking-widest mb-4">Core Philosophy</h3>
              <p className="text-xs text-foreground/50 leading-relaxed font-medium">
                Constant growth through specialized certification and structured learning pathways in emerging technologies.
              </p>
            </div>
          </div>

          {/* Certificates List */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {certificatesData.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  {cert.badge && (
                    <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest bg-primary/20 text-primary rounded-full border border-primary/20">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black mb-1 text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">{cert.issuer}</p>
                <p className="text-[9px] text-foreground/40 font-bold uppercase tracking-widest mb-4">{cert.date}</p>
                <p className="text-xs text-foreground/60 leading-relaxed font-medium line-clamp-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Artifacts */}
        <div className="mt-20">
          <div className="bg-card p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden max-w-5xl mx-auto shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <h3 className="text-sm font-black mb-8 text-white uppercase tracking-widest text-center">Personal Artifacts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-primary/5 transition-colors">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Adaptability</p>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter">Highly Versatile</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Engineered to quickly integrate new technologies and methodologies into functional workflows with precision.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-primary/5 transition-colors">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Efficiency</p>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter">Strategic Execution</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Optimized for high-output performance through rigorous time management and advanced organizational systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

