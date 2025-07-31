import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Corporate", "Livefeed"];

  // Mock portfolio data - replace with actual images
  const portfolioItems = [
    {
      id: 1,
      category: "Corporate",
      title: "Tech Conference 2024",
      image: "/placeholder.svg",
      description: "Multi-camera live streaming setup for 500+ attendees"
    },
    {
      id: 2,
      category: "Weddings",
      title: "Elegant Wedding Ceremony",
      image: "/placeholder.svg",
      description: "Full day coverage with cinematic highlights"
    },
    {
      id: 3,
      category: "Livefeed",
      title: "Product Launch Event",
      image: "/placeholder.svg",
      description: "Live streaming to multiple platforms simultaneously"
    },
    {
      id: 4,
      category: "Corporate",
      title: "Executive Headshots",
      image: "/placeholder.svg",
      description: "Professional headshots for C-suite executives"
    },
    {
      id: 5,
      category: "Corporate",
      title: "Annual Company Meeting",
      image: "/placeholder.svg",
      description: "4K recording and live streaming hybrid event"
    },
    {
      id: 6,
      category: "Weddings",
      title: "Garden Wedding Reception",
      image: "/placeholder.svg",
      description: "Outdoor ceremony with natural lighting"
    },
    {
      id: 7,
      category: "Livefeed",
      title: "International Webinar",
      image: "/placeholder.svg",
      description: "Global audience streaming with real-time Q&A"
    },
    {
      id: 8,
      category: "Corporate",
      title: "Team Building Event",
      image: "/placeholder.svg",
      description: "Full day event documentation and highlights"
    },
    {
      id: 9,
      category: "Livefeed",
      title: "Fashion Show Stream",
      image: "/placeholder.svg",
      description: "Multi-angle live streaming with professional commentary"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Showcasing our expertise in livestreaming, event coverage, and professional photography
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-8 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your vision and bring it to life with our professional services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              View Services
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;