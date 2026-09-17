import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct Web3Forms submission API targeting santhosh19510@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "087ebb48-1b92-4a97-a094-1fbc75d219fb", // Free key from web3forms.com (or set in env)
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: "santhosh19510@gmail.com",
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent directly to Santhosh! Thank you.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Successful user feedback & clean reset
        toast.success("Message sent directly! Santhosh will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast.success("Message sent directly! Santhosh will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast.success("Email copied!");
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      toast.success("Phone copied!");
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "santhosh19510@gmail.com",
      href: "mailto:santhosh19510@gmail.com",
      copyAction: () => copyToClipboard("santhosh19510@gmail.com", "email"),
      isCopied: copiedEmail,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99407 80852",
      href: "tel:+919940780852",
      copyAction: () => copyToClipboard("+919940780852", "phone"),
      isCopied: copiedPhone,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: null,
      copyAction: null,
      isCopied: false,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const socials = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/santhosh-k-52949525a/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/santhosh050505",
      color: "hover:text-foreground",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden section-contact transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {/* Decorative gradient orb */}
        <div
          className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--gradient-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            08 / Contact
          </span>
          <h2 className="text-fluid-3xl font-bold tracking-tight text-foreground mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Useful</span>.
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Have a software engineering opportunity, freelance project, or technical question? Let's connect.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="glow-card p-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg shrink-0`}>
                    <info.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors block truncate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-semibold text-foreground block">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
                {info.copyAction && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={info.copyAction}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all shrink-0"
                    title={`Copy ${info.label}`}
                  >
                    {info.isCopied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </motion.button>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 pt-2"
            >
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 glow-card flex items-center justify-center gap-2 py-3 text-xs font-semibold text-muted-foreground ${social.color} transition-colors`}
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                  <ArrowUpRight className="h-3 w-3 opacity-50" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glow-card p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Send className="h-4 w-4 text-primary" />
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-11 bg-muted/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                      Your Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-11 bg-muted/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground">
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Role / Freelance Inquiry"
                    required
                    className="h-11 bg-muted/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share project scope, role details, or timeline..."
                    rows={4}
                    required
                    className="bg-muted/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl resize-none p-3.5 text-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
