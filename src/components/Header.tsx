import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full py-6 px-6 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Ainan Studio</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="default">
          Book Now
        </Button>
      </div>
    </header>
  );
};
