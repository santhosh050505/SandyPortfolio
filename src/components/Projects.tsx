import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, CheckCircle2, Layers } from "lucide-react";

const categories = ["All", "Web Applications", "AI & Machine Learning"];

const projectsData = [
  {
    num: "01",
    title: "Online Residential Rental Management",
    category: "Web Applications",
    problem: "Manual property listings and slow booking queries caused delays for tenants and property managers.",
    solution: "Engineered a centralized web platform enabling real-time property filtering, tenant booking requests, and fast database queries.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    outcome: "Achieved a 30% reduction in property management processing time.",
    github: "https://github.com/santhosh050505",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "Diabetech — Intelligent Diabetes Monitor",
    category: "AI & Machine Learning",
    problem: "Clinical diagnosis requires fast, early classification of diabetes risk from historical health datasets.",
    solution: "Developed an interactive machine learning classification application leveraging Random Forest algorithms trained on 2,000+ medical records.",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    outcome: "Delivered 85% prediction accuracy on test validation records.",
    github: "https://github.com/santhosh050505",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    num: "03",
    title: "Developer Portfolio & Client Platform",
    category: "Web Applications",
    problem: "Generic templates fail to communicate product engineering standards and technical depth.",
    solution: "Built a high-performance developer portfolio featuring an editorial design system, dark/light theme adaptivity, and responsive mobile architecture.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    outcome: "Engineered for 100/100 Lighthouse performance and zero layout shift.",
    github: "https://github.com/santhosh050505/SandyPortfolio",
    gradient: "from-violet-500 to-purple-500",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden section-projects transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            03 / Featured Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
                Selected Software{" "}
                <span className="gradient-text">Projects</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white shadow-lg shadow-primary/20"
                      : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                key={project.title}
                className="glow-card p-6 sm:p-8 group"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left: Case Study */}
                  <div className="lg:col-span-8 space-y-5">
                    {/* Number & Category */}
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.num}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase bg-muted/60 px-2.5 py-1 rounded-lg border border-border">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-fluid-xl font-bold text-foreground tracking-tight group-hover:gradient-text transition-all duration-500">
                      {project.title}
                    </h3>

                    {/* Problem / Solution cards */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="p-4 bg-muted/30 rounded-xl border border-border/60 space-y-2 hover:border-red-500/20 transition-colors"
                      >
                        <span className="text-[10px] font-mono text-red-400 uppercase font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          Problem Context
                        </span>
                        <p className="text-xs text-foreground/80 leading-relaxed">
                          {project.problem}
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -2 }}
                        className="p-4 bg-muted/30 rounded-xl border border-border/60 space-y-2 hover:border-emerald-500/20 transition-colors"
                      >
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Engineering Solution
                        </span>
                        <p className="text-xs text-foreground/80 leading-relaxed">
                          {project.solution}
                        </p>
                      </motion.div>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>
                        <strong className="text-foreground">Impact:</strong>{" "}
                        {project.outcome}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stack & Links */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-border/40 lg:pl-6">
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-3 flex items-center gap-1.5">
                        <Layers className="h-3 w-3" /> Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, techIdx) => (
                          <motion.span
                            key={techIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIdx * 0.04 }}
                            className="px-2.5 py-1 text-[11px] font-semibold bg-primary/5 text-primary border border-primary/20 rounded-lg"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-card border border-border hover:border-primary/40 text-foreground text-xs font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <Github className="h-4 w-4 text-muted-foreground" />
                      View Source
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
