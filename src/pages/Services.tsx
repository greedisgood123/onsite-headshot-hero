import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    {
      title: "Livefeed Full Event Recording",
      description: "Complete live streaming and recording of your entire event with professional equipment and multi-camera setups.",
      pricing: [
        { tier: "Basic", price: "RM 2,500", features: ["Single camera setup", "4-hour recording", "Basic audio", "HD quality"] },
        { tier: "Premium", price: "RM 4,500", features: ["Multi-camera setup", "8-hour recording", "Professional audio", "4K quality", "Live streaming"] },
        { tier: "Enterprise", price: "Custom Quote", features: ["Unlimited cameras", "Full day coverage", "Audio mixing", "8K quality", "Multi-platform streaming"] }
      ]
    },
    {
      title: "Corporate Headshots",
      description: "Professional headshots for corporate profiles, LinkedIn, and business materials with on-site convenience.",
      pricing: [
        { tier: "Individual", price: "RM 300", features: ["1 person", "30-minute session", "5 edited photos", "Digital delivery"] },
        { tier: "Team (5-15)", price: "RM 200/person", features: ["Group session", "20 minutes per person", "3 edited photos each", "Bulk delivery"] },
        { tier: "Company (15+)", price: "RM 150/person", features: ["Full day session", "15 minutes per person", "3 edited photos each", "Company branding"] }
      ]
    },
    {
      title: "Event Coverage",
      description: "Comprehensive event photography and videography for corporate events, conferences, and special occasions.",
      pricing: [
        { tier: "Half Day", price: "RM 1,800", features: ["4-hour coverage", "Photo + video", "200+ edited photos", "Highlight reel"] },
        { tier: "Full Day", price: "RM 3,200", features: ["8-hour coverage", "Photo + video", "500+ edited photos", "Extended highlight reel"] },
        { tier: "Multi-Day", price: "Custom Quote", features: ["Multiple days", "Comprehensive coverage", "Daily deliverables", "Event documentation"] }
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Supabase to store the form data
    toast({
      title: "Request Submitted",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Professional livestream and photography services delivered on-site with cutting-edge equipment
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {service.pricing.map((tier, tierIndex) => (
                  <Card key={tierIndex} className={`shadow-soft ${tier.tier === "Premium" ? "border-primary shadow-elegant" : ""}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">{tier.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={tier.tier === "Premium" ? "default" : "outline"}
                        onClick={() => setFormData({...formData, service: `${service.title} - ${tier.tier}`})}
                      >
                        Select Package
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Request to Book</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll provide a detailed quote
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interested</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      placeholder="Select from packages above"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your event, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;