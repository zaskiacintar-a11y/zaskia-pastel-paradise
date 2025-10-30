import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "./ProductCard";
import { Trash2 } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveFromCart: (productId: number) => void;
}

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
}: CartModalProps) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Keranjang Belanja</DialogTitle>
          <DialogDescription>
            {cartItems.length === 0
              ? "Keranjangmu masih kosong"
              : `${cartItems.length} item dalam keranjang`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Belum ada produk di keranjang
            </p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    Rp {total.toLocaleString("id-ID")}
                  </span>
                </div>
                <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                  Checkout (Demo)
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
