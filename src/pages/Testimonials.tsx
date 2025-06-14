
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from technology leaders who have transformed their careers through coaching
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
