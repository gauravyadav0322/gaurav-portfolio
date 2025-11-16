import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      emailjs.init("xqRrRly1nVDU0XNiz");

      await emailjs.send(
        "service_gw9no37",
        "template_ogo63s3",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gauravyadav.e0322@gmail.com",
      href: "mailto:gauravyadav.e0322@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7620865784",
      href: "tel:+917620865784",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gaurav-y-a2b7b8234",
      href: "https://www.linkedin.com/in/gaurav-y-a2b7b8234",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",   // ✅ updated here
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to internships, entry-level roles, and freelance data analysis or dashboard projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary transition-all card-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{info.label}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border animate-slide-in-right">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={16} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
