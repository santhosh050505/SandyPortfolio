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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group relative overflow-hidden"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg glow-effect">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
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
