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
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-black text-white uppercase tracking-widest text-sm">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-foreground/80 lowercase tracking-tighter">{skill.name}</span>
                      <span className="text-xs font-black text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Area of Interest */}
        <div className="mt-20 text-center">
          <div className="bg-card p-10 max-w-3xl mx-auto rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden">
             {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-widest">Areas of Interest</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Database Management Systems",
                "Web Development",
                "App Development",
                "Logo Designing",
                "Poster making",
                "Video Editing"
              ].map((interest, idx) => (
                <span key={idx} className="px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/20 transition-colors cursor-default shadow-lg">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
