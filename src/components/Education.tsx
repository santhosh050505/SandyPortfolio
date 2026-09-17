import { motion } from "framer-motion";
import { GraduationCap, Trophy, TrendingUp } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech — Information Technology",
    institution: "M.Kumarasamy College of Engineering",
    score: "CGPA: 7.6 / 10",
    period: "2022 — 2026",
    details: "Focus on software engineering, database management, web architecture, and algorithms.",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-600",
    featured: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Akshaya Academy Matric Hr.Sec.School, Kosavapatty",
    score: "88.8%",
    period: "2021 — 2022",
    details: "Mathematics, Physics, Chemistry, and Computer Science background.",
    icon: Trophy,
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Akshaya Academy Matric Hr.Sec.School, Kosavapatty",
    score: "96.4%",
    period: "2019 — 2020",
    details: "Excellence in Mathematics and General Science.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden section-education transition-colors duration-500">
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
            07 / Education
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Academic{" "}
            <span className="gradient-text">Background</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className={`glow-card p-5 sm:p-6 group ${edu.featured ? 'ring-1 ring-primary/20' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${edu.gradient} text-white shadow-lg shrink-0 mt-0.5`}>
                    <edu.icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 shrink-0 pl-12 sm:pl-0">
                  <span className="text-sm font-bold gradient-text">
                    {edu.score}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
