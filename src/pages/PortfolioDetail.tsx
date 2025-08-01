import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock portfolio data - same as in Portfolio.tsx
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

  const item = portfolioItems.find(p => p.id === parseInt(id || "0"));

  if (!item) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Item Not Found</h1>
          <Button onClick={() => navigate("/portfolio")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Title Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => navigate("/portfolio")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {item.category}
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">{item.title}</h1>
          <p className="text-xl text-muted-foreground">{item.description}</p>
        </div>
      </section>

      {/* Work Sample */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;