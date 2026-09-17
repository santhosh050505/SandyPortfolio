import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificatesData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "January — April 2024",
    badge: "Accredited NPTEL",
    description: "Covering Object-Oriented Programming, Data Structures, Exception Handling, and Multithreading.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft Azure",
    date: "February 2025",
    badge: "Global Certification",
    description: "Cloud architecture concepts, Azure core services, security, governance, and cloud management tools.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "HTML & CSS Web Development",
    issuer: "Great Learning",
    date: "2024",
    badge: "Web Certification",
    description: "Responsive layout design, HTML5 semantic elements, and modern CSS flexbox and grid architecture.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden section-certificates transition-colors duration-500">
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
            06 / Certifications
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Verified Technical{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glow-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-lg font-bold uppercase">
                    {cert.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold gradient-text inline-block">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">
                  {cert.date}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
