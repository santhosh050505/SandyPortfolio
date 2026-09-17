import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";

const profilePhoto = "/16c9a771-a202-4ecd-8ff0-8f515ed1354b.png";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Santhosh_K_Resume.pdf";
    link.click();
    toast.success("Resume download initiated!");
  };

  // Stagger container variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden section-hero transition-colors duration-500"
    >
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, var(--gradient-1), transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--gradient-2), transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      <motion.div
        style={{ y: yParallax, scale }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
          >
            {/* Status Pill */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Software Engineering Roles
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={item} className="space-y-4">
              <h1 className="text-fluid-4xl font-bold tracking-tight leading-[1.05] text-foreground">
                Building software
                <br />
                that solves{" "}
                <span className="gradient-text">real problems</span>.
              </h1>
              <p className="text-fluid-base text-muted-foreground leading-relaxed max-w-xl">
                Hi, I'm{" "}
                <strong className="text-foreground font-semibold">
                  Santhosh K
                </strong>
                . An Information Technology graduate and software developer
                focused on full-stack web development, product thinking, and
                engineering fundamentals.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white text-sm font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Sparkles className="h-4 w-4" />
                View My Work
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="Santhosh_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-semibold hover:border-primary/40 hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Download className="h-4 w-4 text-muted-foreground" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Location metadata */}
            <motion.div
              variants={item}
              className="pt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/60 rounded-full">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Tamil Nadu,
                India
              </span>
              <span className="px-3 py-1.5 bg-muted/60 rounded-full font-medium">
                Full-Stack & QA Testing
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Animated gradient ring behind image */}
              <motion.div
                className="absolute -inset-3 rounded-3xl opacity-40 blur-xl"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative bg-card rounded-2xl p-2 border border-border/80 shadow-2xl shadow-black/5 overflow-hidden">
                <motion.img
                  src={profilePhoto}
                  alt="Santhosh K - Software Engineer"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover object-top rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Floating orbiting elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-2)] to-[var(--gradient-3)] shadow-lg flex items-center justify-center"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white text-[10px] font-bold">{'</>'}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg flex items-center justify-center"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white text-[10px]">✓</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
