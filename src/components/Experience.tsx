import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "TechFlow Solutions",
    period: "Jan 5 2026 - June 5 2026",
    duration: "5 Months",
    description: "Contributed to the development of scalable web applications using React and Node.js. Focused on performance optimization and creating intuitive user interfaces.",
    achievements: [
      "Optimized database queries, leading to a 25% faster data retrieval rate.",
      "Developed 10+ reusable UI components used across the primary company dashboard.",
      "Collaborated with the QA team to resolve 50+ critical bugs before production launch.",
      "Participated in daily stand-ups and Agile sprints to ensure timely project delivery."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        {/* Experience Content */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group hover:border-primary/50 transition-all duration-500">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white leading-tight">{exp.role}</h3>
                      <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mt-1">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-foreground/50 bg-white/5 px-6 py-2.5 rounded-full border border-white/5 font-bold text-xs uppercase tracking-widest">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{exp.period} • {exp.duration}</span>
                  </div>
                </div>

                <p className="text-xl text-foreground font-light mb-10 leading-relaxed border-l-2 border-primary/20 pl-6">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 group/achievement hover:bg-primary/5 transition-all duration-300">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover/achievement:scale-110 transition-transform" />
                      <p className="text-sm text-foreground/70 leading-relaxed font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
