import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
          <Button
            size="icon"
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-primary hover:bg-primary/90 shadow-soft"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
