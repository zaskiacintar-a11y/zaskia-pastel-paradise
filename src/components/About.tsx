import { Sparkles, Heart, Star } from "lucide-react";
const About = () => {
  return <section id="tentang" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tentang Kami
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Smanska Store adalah destinasi fashion untuk remaja yang mencintai gaya lembut dan feminin. Kami percaya bahwa setiap remaja berhak mengekspresikan diri melalui pakaian yang nyaman, cantik, dan mencerminkan kepribadian mereka.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Koleksi Eksklusif</h3>
              <p className="text-muted-foreground">
                Desain unik dengan warna pastel yang lembut dan menenangkan
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dibuat dengan Cinta</h3>
              <p className="text-muted-foreground">
                Setiap produk dipilih dengan cermat untuk kualitas terbaik
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
                <Star className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Style Personal</h3>
              <p className="text-muted-foreground">
                Temukan gaya yang sempurna untuk setiap momen spesialmu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;