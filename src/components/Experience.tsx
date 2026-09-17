import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const experienceData = [
  {
    role: "Software Development & Testing Intern",
    company: "Vectarc Private Limited",
    period: "January 2026 — June 2026",
    location: "Tamil Nadu, India",
    techStack: ["React", "Node.js", "MySQL", "Software Testing", "Agile Sprints"],
    contributions: [
      {
        title: "Full-Stack Web Development",
        detail: "Contributed to front-end and back-end feature development for web applications using React and Node.js.",
      },
      {
        title: "Reusable Dashboard Components",
        detail: "Designed and built 10+ reusable UI components integrated across primary company dashboard modules.",
      },
      {
        title: "Database Query Optimization",
        detail: "Optimized relational database queries and MySQL schemas, achieving a 25% faster data retrieval rate.",
      },
      {
        title: "QA Testing & Defect Resolution",
        detail: "Executed manual and automated testing scripts, tracking and resolving 50+ software defects prior to production releases.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden section-experience transition-colors duration-500">
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
            02 / Experience
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Career & Internship{" "}
            <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline connector line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

              <div className="glow-card p-6 sm:p-8 space-y-6 md:ml-14">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] shadow-lg shadow-primary/30 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-fluid-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold gradient-text inline-block">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-lg border border-border/60">
                      <Calendar className="h-3 w-3 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-lg border border-border/60">
                      <MapPin className="h-3 w-3 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1.5 bg-primary/5 text-primary border border-primary/20 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Contributions */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {exp.contributions.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="group p-4 rounded-xl bg-muted/30 border border-border/60 hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300"
                    >
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
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

export default Experience;
