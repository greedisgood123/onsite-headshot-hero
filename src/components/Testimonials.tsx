import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechCorp Malaysia",
      image: "/placeholder.svg",
      rating: 5,
      text: "Ainan Studio delivered exceptional live streaming for our annual conference. The multi-camera setup was flawless and the team was incredibly professional."
    },
    {
      name: "Ahmad Rahman",
      company: "Corporate Solutions Sdn Bhd",
      image: "/placeholder.svg",
      rating: 5,
      text: "Outstanding headshot session for our entire executive team. The on-site service was convenient and the results exceeded our expectations."
    },
    {
      name: "Lisa Wong",
      company: "Event Management Co.",
      image: "/placeholder.svg",
      rating: 5,
      text: "Professional event coverage with same-day delivery. The highlight reel perfectly captured the essence of our client's wedding celebration."
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "/placeholder.svg" },
    { name: "Corporate Solutions", logo: "/placeholder.svg" },
    { name: "Event Management Co.", logo: "/placeholder.svg" },
    { name: "Digital Agency KL", logo: "/placeholder.svg" },
    { name: "Malaysia Events", logo: "/placeholder.svg" },
    { name: "Professional Services", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading companies across Malaysia
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t pt-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};