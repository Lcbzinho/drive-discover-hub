import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury sports car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Novo Modelo 2024
            </span>
          </div>

          <h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            EXPERIÊNCIA
            <br />
            <span className="text-gradient">SUPREMA</span>
          </h1>

          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Descubra o equilíbrio perfeito entre potência bruta e elegância refinada. 
            Cada curva, cada detalhe, projetado para despertar emoções.
          </p>

          <div 
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl">
              Explorar Modelos
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Assistir Vídeo
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-12 mt-16 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <span className="font-display text-4xl md:text-5xl text-foreground">650</span>
              <span className="text-primary font-display text-4xl md:text-5xl">+</span>
              <p className="text-muted-foreground text-sm mt-1">Cavalos de Potência</p>
            </div>
            <div>
              <span className="font-display text-4xl md:text-5xl text-foreground">3.2</span>
              <span className="text-primary font-display text-4xl md:text-5xl">s</span>
              <p className="text-muted-foreground text-sm mt-1">0-100 km/h</p>
            </div>
            <div>
              <span className="font-display text-4xl md:text-5xl text-foreground">330</span>
              <span className="text-primary font-display text-4xl md:text-5xl">km/h</span>
              <p className="text-muted-foreground text-sm mt-1">Velocidade Máxima</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
