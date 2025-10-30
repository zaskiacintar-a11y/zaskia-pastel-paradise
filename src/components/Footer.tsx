import { Instagram, Music } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl font-bold text-primary">Smanska Store</h3>
          
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth" aria-label="Instagram">
              <Instagram className="text-primary" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth" aria-label="TikTok">
              <Music className="text-primary" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm text-center">© 2025 Smanska Store. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;