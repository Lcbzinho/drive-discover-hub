import { useState } from "react";
import { ChevronRight, Zap, Gauge, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carMuscle from "@/assets/car-muscle.jpg";

const vehicles = [
  {
    id: 1,
    name: "APEX GT",
    category: "SUV Premium",
    image: carSuv,
    specs: {
      power: "480 cv",
      acceleration: "4.5s",
      consumption: "8.2 km/l",
    },
    price: "R$ 485.000",
  },
  {
    id: 2,
    name: "PHANTOM S",
    category: "Sedan Elétrico",
    image: carSedan,
    specs: {
      power: "610 cv",
      acceleration: "3.1s",
      consumption: "Elétrico",
    },
    price: "R$ 720.000",
  },
  {
    id: 3,
    name: "LEGACY V8",
    category: "Muscle Car",
    image: carMuscle,
    specs: {
      power: "550 cv",
      acceleration: "3.8s",
      consumption: "6.5 km/l",
    },
    price: "R$ 395.000",
  },
];

const FeaturedVehicles = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="modelos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Nossa Coleção
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              VEÍCULOS EM<br />
              <span className="text-gradient">DESTAQUE</span>
            </h2>
          </div>
          <Button variant="heroOutline" size="lg">
            Ver Todos os Modelos
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group relative rounded-2xl overflow-hidden card-gradient border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
              onMouseEnter={() => setHoveredId(vehicle.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-foreground">
                  {vehicle.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-3xl text-foreground mb-2">
                  {vehicle.name}
                </h3>
                
                {/* Specs */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Zap className="w-4 h-4 text-primary" />
                    {vehicle.specs.power}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Gauge className="w-4 h-4 text-primary" />
                    {vehicle.specs.acceleration}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Fuel className="w-4 h-4 text-primary" />
                    {vehicle.specs.consumption}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground text-xs">A partir de</span>
                    <p className="font-display text-2xl text-foreground">{vehicle.price}</p>
                  </div>
                  <Button
                    variant="hero"
                    size="sm"
                    className={`transition-all duration-300 ${
                      hoveredId === vehicle.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    Detalhes
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
