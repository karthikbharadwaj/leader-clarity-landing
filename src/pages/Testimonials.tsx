
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client 1",
      role: "Technology Executive",
      content: "I had the privilege of working with Karthik during a one-hour coaching session in the Himalayas—a setting as grounding as the experience itself. In that brief yet powerful time, he helped me navigate a grief I hadn't fully acknowledged. What stood out most was Karthik's deep presence and compassionate approach. He gently guided me to stop minimizing my emotions or comparing them to others' experiences, reminding me that grief is not something to be ranked or rationalized—it's something to be honored. That session gave me clarity, emotional permission, and a sense of peace that I hadn't been able to access on my own. If you're seeking a coach who can create a safe space, meet you where you are, and help you reconnect with your emotional truth, I wholeheartedly recommend Karthik.",
      rating: 5
    },
    {
      name: "Peer Coach",
      role: "Professional Coach",
      content: "I have been interacting with Karthik as a peer coach and experienced his impactful coaching during our reciprocal coaching sessions. His ability to be fully present as a Coach, actively listening to the client, and holding space & silence has helped me go deeper and uncover further layers in my coaching agenda. This has greatly helped me in bringing awareness, alignment and moving towards action. I would recommend Karthik as a coach to those who wish to work on transformational agenda in their life through coaching.",
      rating: 5
    },
    {
      name: "Fellow Coach",
      role: "Executive Coach",
      content: "Every coach needs a coach, and I found mine in Karthik. I met Karthik through an online peer-to-peer coaching platform. Karthik's deep understanding of coaching principles and empathetic approach made each session insightful. Karthik helped me identify my strengths, step out of my comfort zone and build confidence. His practical suggestions equipped me to navigate some events in my life more effectively. Thank you Karthik for all the support and for enabling me!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fadeInUp">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300">
              Hear from technology leaders who have transformed their careers through coaching
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card golden-border rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{testimonial.name}</h3>
                <p className="text-yellow-400 mb-4 font-medium">{testimonial.role}</p>
                <p className="text-gray-300 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
