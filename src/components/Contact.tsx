import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-up px-2">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-wider break-words">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
          <p className="text-foreground/50 mt-6 max-w-2xl mx-auto font-medium uppercase tracking-widest text-xs">
            Ready to build something amazing? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-right">
            {/* Image Card */}
            <div className="relative flex justify-center py-6">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full" />
              <img 
                src="/contact.png" 
                alt="Contact Me" 
                className="w-[60%] max-w-[250px] object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative z-10"
              />
            </div>

            <div className="bg-card p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-widest">Connect with me</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover/item:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:santhosh19510@gmail.com" className="text-lg sm:text-xl font-bold text-white hover:text-primary transition-colors break-all">
                      santhosh19510@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover/item:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+919940780852" className="text-lg sm:text-xl font-bold text-white hover:text-primary transition-colors">
                      +91 99407 80852
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover/item:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold text-white">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card p-8 rounded-3xl shadow-2xl border border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Availability</h3>
                <p className="text-foreground/50 text-xs uppercase font-bold">Open for collaborations</p>
              </div>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-10 rounded-3xl shadow-2xl border border-white/5 animate-fade-left">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black text-primary uppercase tracking-widest ml-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-14 bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-white/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black text-primary uppercase tracking-widest ml-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-14 bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-white/20 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black text-primary uppercase tracking-widest ml-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                  className="h-14 bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-white/20 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black text-primary uppercase tracking-widest ml-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-white/20 rounded-xl resize-none p-5"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-sm rounded-xl shadow-lg shadow-primary/20 glow-effect"
              >
                <Send className="mr-3 h-5 w-5" />
                Transmit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
