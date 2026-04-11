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
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            Certs & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Badge (if applicable) */}
                {cert.badge && (
                  <div className="mb-4">
                    <span className="inline-flex px-4 py-1 text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary rounded-full border border-primary/20">
                      {cert.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-black mb-3 text-white leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">{cert.issuer}</p>

                {/* Date */}
                <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-6">{cert.date}</p>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Strengths */}
        <div className="mt-20 text-center">
          <div className="bg-card p-10 max-w-4xl mx-auto rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            
            <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-widest">Personal Artifacts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-primary/5 transition-colors text-left">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">Adaptability</p>
                <p className="text-xl font-bold text-white mb-2">Highly Versatile</p>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium">Engineered to quickly integrate new technologies and methodologies into functional workflows.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-primary/5 transition-colors text-left">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">efficiency</p>
                <p className="text-xl font-bold text-white mb-2">Strategic Execution</p>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium">Optimized for high-output performance through rigorous time management and organizational strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
