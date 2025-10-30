import ProductCard, { Product } from "./ProductCard";
import { toast } from "sonner";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Soft Pink Sweater",
    price: 299000,
    image: product1,
    category: "Atasan",
  },
  {
    id: 2,
    name: "Lavender Tote Bag",
    price: 189000,
    image: product2,
    category: "Aksesoris",
  },
  {
    id: 3,
    name: "Mint Pleated Skirt",
    price: 349000,
    image: product3,
    category: "Bawahan",
  },
  {
    id: 4,
    name: "Cream Pearl Cardigan",
    price: 399000,
    image: product4,
    category: "Atasan",
  },
  {
    id: 5,
    name: "Pastel Hair Clips Set",
    price: 89000,
    image: product5,
    category: "Aksesoris",
  },
  {
    id: 6,
    name: "Lavender Knit Crop Top",
    price: 249000,
    image: product6,
    category: "Atasan",
  },
  {
    id: 7,
    name: "Mint Pattern Socks",
    price: 59000,
    image: product7,
    category: "Aksesoris",
  },
  {
    id: 8,
    name: "Cream Bucket Hat",
    price: 149000,
    image: product8,
    category: "Aksesoris",
  },
];

interface ProductGalleryProps {
  onAddToCart: (product: Product) => void;
}

const ProductGallery = ({ onAddToCart }: ProductGalleryProps) => {
  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`, {
      description: `Harga: Rp ${product.price.toLocaleString("id-ID")}`,
    });
  };

  return (
    <section id="koleksi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Koleksi Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan fashion favoritmu dengan gaya pastel yang lembut
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
