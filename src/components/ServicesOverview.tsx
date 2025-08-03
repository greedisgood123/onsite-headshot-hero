import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Camera, Mic, Monitor } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: Video,
      title: "Livefeed Full Event Recording",
      description: "Professional live streaming with multi-camera setups, real-time broadcasting, and high-quality recording for events of any size.",
      features: ["Multi-camera setup", "4K/8K recording", "Live streaming", "Professional audio"],
      startingPrice: "RM 3,500"
    },
    {
      icon: Camera,
      title: "Corporate Headshots",
      description: "On-site professional headshots for individuals and teams, perfect for LinkedIn profiles, company websites, and marketing materials.",
      features: ["On-site service", "Professional lighting", "Quick turnaround", "Digital delivery"],
      startingPrice: "RM 350"
    },
    {
      icon: Mic,
      title: "Event Coverage",
      description: "Comprehensive event documentation including photography, videography, and highlight reels for corporate events and special occasions.",
      features: ["Photo + video", "Highlight reels", "Unlimited images", "24 hour preview"],
      startingPrice: "RM 1,800"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional livestreaming and photography services delivered on-site across Kuala Lumpur and Malaysia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <span className="text-2xl font-bold text-primary">{service.startingPrice}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};
