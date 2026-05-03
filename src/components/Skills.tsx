import { Code, Database, Globe, Server } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 75 },
    ],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: Server,
    skills: [
      { name: "Azure", level: 70 },
      { name: "Git", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider break-words">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 order-2 lg:order-1">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-xs">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">{skill.name}</span>
                        <span className="text-[10px] font-black text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Illustration & Interests */}
          <div className="space-y-8 order-1 lg:order-2 flex flex-col items-center">
            <div className="w-[70%] max-w-[300px] relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src="/skills.png" 
                alt="Tech Skills Illustration" 
                className="relative w-full h-auto object-contain hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>

            <div className="bg-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <h3 className="text-xl font-black mb-6 text-white uppercase tracking-widest text-center">Areas of Interest</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Database Management Systems",
                  "Web Development",
                  "App Development",
                  "Logo Designing",
                  "Poster making",
                  "Video Editing"
                ].map((interest, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-primary/5 text-primary border border-primary/10 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-primary/10 transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

