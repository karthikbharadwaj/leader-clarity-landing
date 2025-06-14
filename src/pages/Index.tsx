
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, TrendingUp, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Accelerate Your Tech Leadership Career
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get that exciting promotion faster and successfully navigate your role with the 4P Leadership Compass program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Are You Facing These Challenges?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Feel stuck or uncertain about your next career move",
              "Dealing with conflict, high-pressure decisions, or team challenges",
              "Struggling to navigate organization politics",
              "Lack clarity and a roadmap for the next chapter of your career",
              "Have an inner critic that is using up too much time",
              "Want to strengthen confidence, communication, and leadership presence"
            ].map((challenge, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - 4P Program */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The 4P Leadership Compass Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A 3-month intensive program to expand your leadership in four key dimensions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Purpose",
                description: "Gain clarity in complex situations and make confident decisions."
              },
              {
                icon: Users,
                title: "People",
                description: "Navigate influence, organization politics, and work-life balance."
              },
              {
                icon: MessageCircle,
                title: "Presence",
                description: "Develop leadership presence, influence, and communication skills to thrive."
              },
              {
                icon: TrendingUp,
                title: "Progress",
                description: "Understand and plan how to make your next step successfully."
              }
            ].map((pillar) => (
              <Card key={pillar.title} className="text-center">
                <CardHeader>
                  <pillar.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What My Clients Achieve
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Faster, clearer decision-making in high-pressure situations",
              "Stronger leadership presence & influence in critical conversations",
              "Sustainable career success without stress, controlling the pace"
            ].map((result, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <p className="text-muted-foreground">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            If you're a tech executive or ambitious professional preparing for the next phase of your career, let's connect.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            DM me "4P" to Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
