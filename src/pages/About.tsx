
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Brain, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Your Coach
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              15 years in the trenches, building high performance tech teams and helping leaders gain career clarity
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                I've Been in Your Shoes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I have been in the trenches, building high performance tech teams for the last 15 years. 
                  I understand the unique challenges that technology leaders face because I've lived them.
                </p>
                <p>
                  I have been working with AI way before it became mainstream and realize first hand its true 
                  potential and where it's going. This gives me a unique perspective on the future of 
                  technology leadership.
                </p>
                <p>
                  As a side hustle, I'm an Executive Coach who helps tech leaders gain career clarity, 
                  build confidence, and leverage executive presence to accelerate their careers.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">My Mission</h3>
              <p className="text-muted-foreground">
                To help ambitious technology leaders overcome self-doubt, imposter syndrome, and anything 
                getting in their way that they might not see. I help you get that exciting promotion faster 
                and successfully navigate your role.
              </p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "15 Years",
                description: "Building high performance tech teams"
              },
              {
                icon: Brain,
                title: "AI Pioneer",
                description: "Working with AI before it became mainstream"
              },
              {
                icon: Award,
                title: "Executive Coach",
                description: "Certified in leadership development"
              },
              {
                icon: Lightbulb,
                title: "4P Program",
                description: "Proprietary coaching methodology"
              }
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <item.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What I Help With */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              What I Help Technology Leaders With
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Overcoming self-doubt and imposter syndrome",
                "Navigating organizational politics effectively",
                "Making confident decisions in high-pressure situations",
                "Developing stronger leadership presence and influence",
                "Building and managing high-performance teams",
                "Planning and executing successful career transitions",
                "Balancing technical expertise with leadership skills",
                "Creating sustainable career success without burnout"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's connect and discuss how the 4P Leadership Compass can accelerate your career.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
