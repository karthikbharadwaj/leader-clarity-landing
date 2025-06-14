
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Brain, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp">
            About Your Coach
          </h1>
          <p className="text-xl text-white mb-8 font-medium">
            15 years in the trenches, building high performance tech teams and helping leaders gain career clarity
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card golden-border rounded-2xl p-8 mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text mb-6 relative pb-4 golden-underline">
              I've Been in Your Shoes
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              <div key={item.title} className="glass-card rounded-lg p-6 text-center hover-lift">
                <item.icon className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* What I Help With */}
          <div className="glass-card golden-border rounded-2xl p-8">
            <h3 className="text-3xl font-bold gradient-text mb-8 text-center relative pb-4 golden-underline">
              What I Help Technology Leaders With
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
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
                <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-4 hover-lift">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card golden-border rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white mb-8 font-medium">
              Let's connect and discuss how the 4P Leadership Compass can accelerate your career.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-orange-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
