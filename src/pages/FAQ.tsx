
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is the 4P Leadership Compass program?",
      answer: "The 4P Leadership Compass is a 3-month intensive coaching program designed to expand your leadership in four key dimensions: Purpose (clarity and confident decision-making), People (navigating influence and politics), Presence (leadership presence and communication), and Progress (planning your next career step)."
    },
    {
      question: "Who is this program designed for?",
      answer: "This program is specifically designed for ambitious technology leaders, tech executives, and professionals who feel stuck in their career, are dealing with team challenges, struggling with organizational politics, or want to strengthen their confidence and leadership presence."
    },
    {
      question: "How long does the program take?",
      answer: "The 4P Leadership Compass is a 3-month intensive program. This timeframe allows for deep transformation while providing enough time to implement and practice new leadership strategies in your current role."
    },
    {
      question: "What can I expect to achieve from this program?",
      answer: "Clients typically achieve faster and clearer decision-making in high-pressure situations, stronger leadership presence and influence in critical conversations, and sustainable career success without stress while controlling their career pace. Many also receive promotions or successfully navigate career transitions."
    },
    {
      question: "What is your background in technology?",
      answer: "I have 15 years of experience building high-performance tech teams. I've been working with AI technology before it became mainstream, giving me unique insights into the future of technology leadership and the challenges that come with it."
    },
    {
      question: "How do I know if I need coaching?",
      answer: "If you feel stuck or uncertain about your next career move, are dealing with conflict or high-pressure decisions, struggling to navigate organizational politics, lack clarity about your career roadmap, have an inner critic taking up too much mental space, or want to strengthen your confidence and leadership presence, coaching can help."
    },
    {
      question: "What makes your coaching approach different?",
      answer: "Having been in the trenches as a technology leader myself, I understand the unique challenges you face. My approach combines real-world tech leadership experience with professional coaching methodologies, focusing on practical strategies that work in high-tech environments."
    },
    {
      question: "How do we get started?",
      answer: "Simply DM me '4P' and we can discuss your specific situation and goals. I'll help you understand how the 4P Leadership Compass program can address your particular challenges and accelerate your career growth."
    },
    {
      question: "Is this coaching or consulting?",
      answer: "This is executive coaching focused on your personal leadership development and career acceleration. While I bring extensive tech industry experience, the focus is on developing you as a leader rather than consulting on technical or business strategy."
    },
    {
      question: "What if I'm not sure I'm ready for a 3-month commitment?",
      answer: "That's completely normal. We can start with an initial consultation to explore your goals and see if the program is a good fit. The investment in your leadership development pays dividends throughout your entire career."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about the 4P Leadership Compass program
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-yellow-400 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass-card golden-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-300 mb-8">
                I'm here to help. Reach out and let's discuss your specific situation.
              </p>
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-orange-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
