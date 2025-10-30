import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Zaskia Store</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("koleksi")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Koleksi
          </button>
          <button
            onClick={() => scrollToSection("tentang")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Kontak
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("koleksi")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Koleksi
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
