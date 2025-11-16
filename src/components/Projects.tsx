import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Data Storyteller – Automated Streamlit Dashboard",
      description:
        "Built an interactive EDA dashboard with CSV upload, validation, and Plotly charts. Enabled automated PDF/DOCX report generation for comprehensive data storytelling.",
      tags: ["Python", "Streamlit", "Plotly", "Pandas", "Data Visualization"],
      features: [
        "CSV upload with data validation",
        "Interactive charts and visualizations",
        "Automated report generation (PDF/DOCX)",
        "Real-time exploratory data analysis",
      ],
      github: "https://github.com/gauravyadav0322/AI-Data-Storyteller",
    },
    {
      title: "UPI Transaction Analytics Dashboard – Power BI",
      description:
        "Used Power Query, DAX, and KPIs to visualize UPI patterns across banks, cities, and months. Provided insights on growth, success rates, and top banks.",
      tags: ["Power BI", "DAX", "Power Query", "Business Intelligence"],
      features: [
        "Multi-dimensional UPI transaction analysis",
        "KPI tracking and trend analysis",
        "Bank and city-wise comparisons",
        "Success rate monitoring",
      ],
      github:
        "https://github.com/gauravyadav0322/UPI-Transaction-Data-Analysis-Dashboard",
    },
    {
      title: "Real-Time Facial Emotion Recognition System",
      description:
        "Built a CNN-based real-time emotion classification model using labeled datasets. Integrated with OpenCV for live emotion detection from webcam feed.",
      tags: ["Deep Learning", "CNN", "OpenCV", "TensorFlow", "Computer Vision"],
      features: [
        "Real-time emotion detection",
        "CNN architecture for classification",
        "Webcam integration with OpenCV",
        "Multi-class emotion recognition",
      ],
      github:
        "https://github.com/gauravyadav0322/Real-Time-Facial-Emotion-Detection-CNN-OpenCV-TensorFlow-",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data science, machine learning, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Features:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline-glow" size="sm" className="w-full">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </Button>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm">
                      <Github size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
