import { Code, Brain, Database, BarChart3, Wrench, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
      skills: ["Python (Pandas, NumPy)", "Scikit-learn", "TensorFlow", "SQL"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary",
      skills: [
        "Regression & Classification",
        "CNN & Deep Learning",
        "Supervised & Unsupervised",
        "Model Training & Evaluation",
      ],
    },
    {
      icon: Database,
      title: "Data Handling",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
      skills: ["SQL Queries", "ETL Processes", "Data Cleaning", "Data Preprocessing"],
    },
    {
      icon: BarChart3,
      title: "Visualization",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
      skills: ["Git & Version Control", "Excel", "Streamlit", "OpenCV"],
    },
    {
      icon: TrendingUp,
      title: "Analytics Skills",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary",
      skills: ["Statistical Analysis", "KPI Design", "DAX Formulas", "Business Intelligence"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary/50 transition-all card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl ${category.bgColor}`}>
                      <IconComponent className={category.iconColor} size={28} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
