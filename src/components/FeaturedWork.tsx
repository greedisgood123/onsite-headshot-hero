import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Camera, Zap } from "lucide-react";

export const FeaturedWork = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Tech Conference Live Stream",
      description: "Multi-camera setup for 1,000+ attendees with real-time streaming",
      image: "/placeholder.svg",
      category: "Livefeed",
      icon: Play
    },
    {
      id: 2,
      title: "Corporate Headshot Session",
      description: "Professional headshots for 50+ executives in a single day",
      image: "/placeholder.svg",
      category: "Photography",
      icon: Camera
    },
    {
      id: 3,
      title: "Wedding Live Coverage",
      description: "Complete ceremony and reception with cinematic highlights",
      image: "/placeholder.svg",
      category: "Event Coverage",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise in delivering exceptional livestreaming and photography services across Malaysia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    <project.icon className="w-4 h-4 mr-2" />
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};