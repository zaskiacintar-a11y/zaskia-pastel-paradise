import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGallery from "@/components/ProductGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CartModal from "@/components/CartModal";
import { Product } from "@/components/ProductCard";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: number) => {
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
      toast.success("Produk dihapus dari keranjang");
    }
  };

  const scrollToCollection = () => {
    const element = document.getElementById("koleksi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero onViewCollection={scrollToCollection} />
      <About />
      <ProductGallery onAddToCart={handleAddToCart} />
      <ContactForm />
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
