import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/santhosh-k-52949525a/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/santhosh050505", icon: Github },
    { name: "Email", href: "mailto:santhosh19510@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative py-16 overflow-hidden section-footer transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <a href="#home" className="flex items-center gap-2.5 group">
              <img
                src="/Logo.png"
                alt="Santhosh K Logo"
                className="w-9 h-9 object-contain rounded-lg drop-shadow-md"
              />
              <span className="text-sm font-bold text-white tracking-tight">
                Santhosh K
              </span>
            </a>
            <p className="text-xs text-slate-300 max-w-xs">
              Software Developer · Building useful software with thoughtful engineering.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-300 hover:text-white transition-colors animated-underline font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl border border-slate-700 bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-all shadow-sm"
                title={social.name}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            © {currentYear} Santhosh K. Built with{" "}
            <Heart className="h-3 w-3 text-red-400 inline" /> using React &
            TypeScript
          </span>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/60 hover:border-slate-500 transition-all"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
