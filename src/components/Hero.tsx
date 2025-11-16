import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_hsl(191_100%_50%_/_0.4)] animate-float">
              <img
                src={profileImage}
                alt="Gaurav Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary rounded-full opacity-30"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 max-w-2xl animate-slide-in-right">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Gaurav Yadav</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Data Analyst & Aspiring Machine Learning Engineer
            </p>
            <p className="text-lg text-muted-foreground">
              Turning Data Into Insights
            </p>
            <p className="text-base text-muted-foreground max-w-xl">
              Motivated Data Analyst fresher with expertise in Python, SQL,
              Machine Learning, Data Visualization, and end-to-end data projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/resume_gaurav_yadav.pdf" download="Gaurav_Yadav_Resume.pdf">
                <Button variant="hero" size="lg">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline-glow" size="lg">
                  View Projects
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="mailto:gauravyadav.e0322@gmail.com"
                className="p-3 rounded-full border border-primary hover:bg-primary hover:text-background transition-all hover:shadow-[0_0_20px_hsl(191_100%_50%_/_0.5)]"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-y-a2b7b8234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary hover:bg-primary hover:text-background transition-all hover:shadow-[0_0_20px_hsl(191_100%_50%_/_0.5)]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/gaurav-yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary hover:bg-primary hover:text-background transition-all hover:shadow-[0_0_20px_hsl(191_100%_50%_/_0.5)]"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
