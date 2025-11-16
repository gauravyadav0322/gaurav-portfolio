import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "Post-Graduate Certification in Data Analytics",
      institution: "Imarticus Learning, Thane",
      period: "March 2025 – Present",
      details: "Python, SQL, ML, Power BI, Tableau, Deep Learning, AI",
    },
    {
      degree: "B.Voc in Data Science",
      institution: "KCE's College of Engineering & Technology, Jalgaon",
      period: "2022–2025",
      details: "CGPA: 8.15",
    },
  ];

  const certifications = [
    { title: "AI with Python", organization: "FUEL Pune", year: "2024" },
    { title: "Power BI & Tableau", organization: "Legionsoft", year: "2025" },
    { title: "Data Analyst Training", organization: "Legionsoft", year: "2024" },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Motivated Data Analyst with strong foundations in Python, SQL, and
            Machine Learning, strengthened by hands-on experience across ML
            pipelines, analytics, and dashboarding. Adept at transforming raw
            data into actionable insights through analysis, statistics, and
            visualization. Passionate about using data to uncover patterns and
            support business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all"
              >
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-primary mb-2">{edu.period}</p>
                  <p className="text-sm">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-secondary" size={32} />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-border hover:border-secondary transition-all"
              >
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-secondary">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
