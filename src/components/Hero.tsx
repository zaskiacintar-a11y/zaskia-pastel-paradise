import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
interface HeroProps {
  onViewCollection: () => void;
}
const Hero = ({
  onViewCollection
}: HeroProps) => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">Smanska Store</h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in font-light">
          Pastel Fashion for Every Teen Mood
        </p>
        <Button size="lg" onClick={onViewCollection} className="animate-fade-in bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-smooth">
          Lihat Koleksi
        </Button>
      </div>
    </section>;
};
export default Hero;