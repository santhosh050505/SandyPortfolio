import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Online Residential Rental Management",
    description: "Created a comprehensive web-based Residential Rental Management system that streamlines property listings and bookings. The system reduced management time by 30% and received positive user reviews for its real-time search capabilities and seamless communication features.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlights: ["30% reduction in management time", "Real-time search", "User-friendly interface"],
    github: "https://github.com/santhosh050505",
  },
  {
    title: "Diabetech - Intelligent Diabetes Monitor",
    description: "Developed an intelligent diabetes prediction system leveraging machine learning algorithms. Built with Python, Pandas, NumPy, and Streamlit, featuring a Random Forest model with 85% accuracy. The application was validated on 2,000+ health records to support proactive diabetes management.",
    technologies: ["Python", "Pandas", "NumPy", "Streamlit", "Machine Learning"],
    highlights: ["85% accuracy", "2,000+ records processed", "Random Forest model"],
    github: "https://github.com/santhosh050505",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Image & Title */}
        <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-up px-2">
          <div className="relative flex justify-center mb-8">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 overflow-hidden shadow-lg shadow-primary/20">
               <img 
                  src="/projects.png" 
                  alt="Featured Projects" 
                  className="w-20 h-20 object-contain hover:rotate-12 transition-transform duration-500"
                />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider break-words">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
          <p className="text-foreground/50 mt-6 max-w-2xl mx-auto font-medium uppercase tracking-widest text-xs">
            Showcasing technical excellence through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-8 space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                      <span className="text-xs text-foreground/80 font-bold uppercase tracking-widest">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/50 text-white hover:bg-primary/10 font-bold px-8 rounded-xl h-14 transition-all duration-300 w-full md:w-auto"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      Repository
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
