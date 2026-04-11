import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "M.Kumarasamy College of Engineering",
    score: "7.6 CGPA",
    period: "2022 - 2026",
    status: "In Progress",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Akshaya Academy Matric Hr.Sec.School, Kosavapatty",
    score: "88.8%",
    period: "2021 - 2022",
    status: "Completed",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Akshaya Academy Matric Hr.Sec.School, Kosavapatty",
    score: "96.4%",
    period: "2019 - 2020",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            Educational <span className="text-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />

          {/* Education Cards */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background shadow-[0_0_20px_rgba(45,212,191,0.5)] z-10" />

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card p-8 rounded-2xl shadow-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {edu.degree.includes("Bachelor") ? (
                          <GraduationCap className="h-6 w-6 text-primary" />
                        ) : (
                          <Award className="h-6 w-6 text-primary" />
                        )}
                      </div>
                    </div>
                    
                    <div className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <p className="text-primary font-bold uppercase tracking-widest text-sm">{edu.field}</p>
                      )}
                      <p className="text-foreground/70 text-sm font-medium">
                        {edu.institution}
                      </p>
                      <div className={`flex items-center gap-4 pt-4 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black bg-primary/10 text-primary border border-primary/20">
                          {edu.score}
                        </span>
                        <span className="text-foreground/50 text-xs font-bold uppercase tracking-widest">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
