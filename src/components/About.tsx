const aboutImage = "/WhatsApp Image 2026-04-11 at 1.38.04 PM.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="lg:col-span-5 animate-fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-card p-3 rounded-3xl shadow-2xl border border-white/5 overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                <img 
                  src={aboutImage} 
                  alt="Santhosh K" 
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 animate-fade-left">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="space-y-8 text-lg leading-relaxed relative z-10">
                <p className="text-foreground/90 font-light">
                  I am a driven <span className="text-primary font-bold">Software Engineering student</span> at 
                  M.Kumarasamy College of Engineering, specializing in Information Technology.
                </p>
                
                <p className="text-foreground/90 font-light">
                  My expertise lies in <span className="text-primary font-bold">modern web development</span> and 
                  <span className="text-primary font-bold">intuitive UI/UX design</span>. I am dedicated to building 
                  scalable applications that merge technical efficiency with exceptional user experiences.
                </p>

                <p className="text-foreground/90 font-light">
                  I thrive in fast-paced environments where I can leverage my problem-solving skills and 
                  technical knowledge to deliver impactful digital solutions that solve real-world problems.
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">7.6</div>
                    <div className="text-xs text-primary uppercase font-black tracking-widest">CGPA</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">10+</div>
                    <div className="text-xs text-primary uppercase font-black tracking-widest">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">3+</div>
                    <div className="text-xs text-primary uppercase font-black tracking-widest">Certs</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">8+</div>
                    <div className="text-xs text-primary uppercase font-black tracking-widest">Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
