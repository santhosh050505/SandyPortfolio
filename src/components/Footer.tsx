import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Santhosh K</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Aspiring Software Engineer passionate about building innovative web solutions 
              and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#certificates" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Certificates
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/santhosh-k-52949525a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover-lift"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://github.com/santhosh050505"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover-lift"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:santhosh19510@gmail.com"
                className="glass-card p-3 hover-lift"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Santhosh K. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and passion
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed by Santhosh K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
