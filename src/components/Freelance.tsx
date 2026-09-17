import { motion } from "framer-motion";
import { Laptop, Layers, Gauge, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    num: "01",
    title: "Full-Stack Web Applications",
    description: "Building complete web solutions from database schema design to front-end user interfaces using React, Node.js, and MySQL.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Layers,
    num: "02",
    title: "Responsive Frontend Engineering",
    description: "Designing clean, modern user interfaces adhering to UI/UX standards, accessibility, and high performance across all devices.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gauge,
    num: "03",
    title: "Code Optimization & Testing",
    description: "Conducting manual and automated testing, defect tracking, and query optimization to ensure application stability.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Freelance = () => {
  return (
    <section id="freelance" className="relative py-24 md:py-32 overflow-hidden section-freelance transition-colors duration-500">
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
            05 / Freelance & Client Work
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Building Beyond the{" "}
            <span className="gradient-text">Classroom</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-5"
          >
            <p className="text-fluid-base text-muted-foreground leading-relaxed">
              Beyond academics and my internship, I work on independent client
              projects—helping turn requirements into production-ready web
              products.
            </p>
            <motion.div
              whileHover={{ y: -2 }}
              className="glow-card p-5 space-y-2"
            >
              <span className="text-xs font-bold text-foreground flex items-center gap-2">
                <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                Client Commitment
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Focus on clear communication, maintainable code, and timely
                project delivery.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Service Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glow-card p-5 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-bold text-muted-foreground/20 font-mono group-hover:text-primary/30 transition-colors">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
