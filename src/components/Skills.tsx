import { motion } from "framer-motion";
import { Code, Globe, Database, Server } from "lucide-react";

const skillMatrix = [
  {
    category: "Languages",
    icon: Code,
    gradient: "from-violet-500 to-purple-600",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    category: "Frontend",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "State Management"],
  },
  {
    category: "Backend & Testing",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Software QA Testing", "Defect Tracking", "Agile Sprints"],
  },
  {
    category: "Databases & Tools",
    icon: Database,
    gradient: "from-amber-500 to-orange-500",
    skills: ["MySQL", "Database Design", "SQL Optimization", "Microsoft Azure", "Git & GitHub", "Vite"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden section-skills transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            04 / Technical Matrix
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Technical Stack &{" "}
            <span className="gradient-text">Competencies</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillMatrix.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glow-card p-5 flex flex-col group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border/60">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-lg`}
                >
                  <group.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5 flex-1">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1.5 bg-muted/60 text-foreground border border-border/80 rounded-lg text-[11px] font-medium hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill count indicator */}
              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground">
                  {group.skills.length} skills
                </span>
                <div className="flex gap-0.5">
                  {group.skills.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${group.gradient} opacity-60`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
