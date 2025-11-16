import { Briefcase, Code, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Availability = () => {
  const availableFor = [
    {
      icon: Briefcase,
      title: "Data Analyst Roles",
      description: "Full-time and part-time positions",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Code,
      title: "Freelance Projects",
      description: "Data analysis and ML consulting",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics Work",
      description: "Power BI and Tableau development",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Currently <span className="gradient-text">Available For</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {availableFor.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary/50 transition-all card-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-flex p-5 rounded-2xl ${item.bgColor} mb-4`}>
                    <IconComponent className={item.iconColor} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Availability;
