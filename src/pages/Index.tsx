import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedWork />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
