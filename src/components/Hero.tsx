import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
const profilePhoto = "/16c9a771-a202-4ecd-8ff0-8f515ed1354b.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Santhosh_K_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-32">
        <div className="flex flex-col items-center text-center space-y-10 animate-fade-up">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-glow" />
            <img
              src={profilePhoto}
              alt="Santhosh K"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Name & Title */}
          <div className="space-y-6 px-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white break-words">
              Santhosh <span className="text-primary tracking-normal">K</span>
            </h1>
            <p className="text-xl md:text-3xl text-foreground font-medium tracking-tight">
              Software Engineer <span className="text-primary">|</span> Tech Enthusiast
            </p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Transforming complex problems into elegant, user-centric web solutions with modern technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full glow-effect transition-all duration-300 hover:scale-105"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-white hover:bg-primary/10 font-bold px-10 h-14 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/santhosh-k-52949525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 p-4 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/santhosh050505"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 p-4 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:santhosh19510@gmail.com"
              className="bg-card/50 p-4 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
