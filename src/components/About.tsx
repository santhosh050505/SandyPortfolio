import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, ShieldCheck } from "lucide-react";

const aboutImage = "/WhatsApp Image 2026-04-11 at 1.38.04 PM.jpeg";

const facts = [
  {
    icon: GraduationCap,
    title: "B.Tech Information Technology",
    detail: "M.Kumarasamy College of Engineering (7.6 CGPA)",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Briefcase,
    title: "6 Months Industry Internship",
    detail: "Vectarc Private Limited (Feature Dev & QA Testing)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    detail: "React, TypeScript, Node.js, Python, PHP, MySQL",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Software Testing & Quality",
    detail: "Defect Tracking, Manual & Automated QA Testing",
    color: "from-amber-500 to-orange-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden section-about transition-colors duration-500">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
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
            01 / About
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Turning ideas into{" "}
            <span className="gradient-text">practical software</span>.
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 w-full max-w-xs mx-auto lg:max-w-none"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                }}
              />
              <div className="relative glow-card p-2">
                <img
                  src={aboutImage}
                  alt="Santhosh K"
                  className="w-full h-[300px] sm:h-[350px] object-cover object-top rounded-xl"
                />
                <div className="mt-2 p-3 bg-muted/40 rounded-xl text-center">
                  <span className="text-xs font-bold text-foreground block">
                    Santhosh K
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Information Technology Graduate
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative + Grid */}
          <div className="lg:col-span-8 space-y-8">
            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-fluid-base leading-relaxed text-muted-foreground"
            >
              <p>
                I'm{" "}
                <strong className="text-foreground font-semibold">
                  Santhosh K
                </strong>
                , an Information Technology graduate with hands-on experience in
                full-stack software development, software testing, and modern
                web application development.
              </p>
              <p>
                During my{" "}
                <span className="text-foreground font-medium">
                  6-month Software Development & Testing internship at Vectarc
                  Private Limited
                </span>
                , I worked on real-world applications—contributing to feature
                development, database query optimization, automated and manual
                testing, and defect resolution.
              </p>
              <p>
                I also build independent and freelance projects, collaborating
                with clients to transform requirements into clean, performant,
                and user-friendly digital products.
              </p>
            </motion.div>

            {/* Fact Cards with staggered animation */}
            <div className="grid sm:grid-cols-2 gap-3">
              {facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="glow-card p-4 group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-br ${fact.color} text-white shadow-lg shrink-0`}
                    >
                      <fact.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-xs font-bold text-foreground tracking-wide leading-snug">
                        {fact.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {fact.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
