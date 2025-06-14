
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, TrendingUp, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded animate-fadeIn"></div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fadeInUp">
              Accelerate Your Tech Leadership Career
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mb-8 animate-fadeInUp uppercase tracking-wide">
              Get that exciting promotion faster and successfully navigate your role with the 4P Leadership Compass program.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card golden-border rounded-2xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center relative pb-4 golden-underline">
              Many of My Clients Are Ambitious Technology Leaders Who:
            </h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {[
                "Feel stuck or uncertain about their next career move",
                "Are dealing with conflict, high-pressure decisions, or team challenges",
                "Struggling to navigate organization politics",
                "Lack clarity and a roadmap for the next chapter of their career",
                "Have an inner critic that is using up too much time",
                "Want to strengthen their confidence, communication, and leadership presence"
              ].map((challenge, index) => (
                <li key={index} className="flex items-start text-white relative pl-8 py-2 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <span className="absolute left-0 text-yellow-400 font-bold">→</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section - 4P Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card golden-border rounded-2xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text mb-4 text-center relative pb-4 golden-underline">
              The 4P Leadership Compass Program
            </h2>
            <p className="text-center text-white font-medium text-lg mb-8">
              A 3-month intensive program to expand your leadership in four key dimensions
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Purpose",
                  description: "Gain clarity in complex situations and make confident decisions."
                },
                {
                  icon: MessageCircle,
                  title: "Presence",
                  description: "Develop the leadership presence, influence, and communication skills to thrive."
                },
                {
                  icon: Users,
                  title: "People",
                  description: "Family, Navigating influence, organization politics, work-life balance."
                },
                {
                  icon: TrendingUp,
                  title: "Progress",
                  description: "Understand and plan how to make this next step successfully."
                }
              ].map((pillar) => (
                <div key={pillar.title} className="bg-white/5 rounded-lg p-6 hover-lift">
                  <pillar.icon className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card golden-border rounded-2xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center relative pb-4 golden-underline">
              What My Clients Achieve
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "Faster, clearer decision-making in high-pressure situations",
                "Stronger leadership presence & influence in critical conversations",
                "Sustainable career success without stress, controlling the pace"
              ].map((result, index) => (
                <div key={index} className="flex items-start text-white relative pl-8 py-2">
                  <CheckCircle className="absolute left-0 w-6 h-6 text-green-400" />
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card golden-border rounded-2xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text mb-4 text-center relative pb-4 golden-underline">
              This Means
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "Less second-guessing",
                "Stronger leadership",
                "More control over your career"
              ].map((benefit, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 hover-lift">
                  <div className="flex items-start text-white relative pl-8">
                    <span className="absolute left-0 text-yellow-400 font-bold text-xl">✓</span>
                    {benefit}
                  </div>
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
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-white mb-8 font-medium">
              If you're a tech executive or ambitious professional preparing for the next phase of your career, let's connect.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-orange-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full uppercase tracking-wide"
            >
              DM me "4P" to Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
