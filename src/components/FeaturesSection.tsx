import { Shield, Wrench, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia Premium",
    description: "5 anos de garantia completa em todos os modelos, sem limite de quilometragem.",
  },
  {
    icon: Wrench,
    title: "Manutenção Inclusa",
    description: "Primeiro ano de manutenção gratuita com peças originais e técnicos certificados.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Cada veículo passa por 150+ pontos de inspeção antes da entrega.",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Assistência técnica disponível a qualquer hora, em qualquer lugar do país.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Por Que Nos Escolher
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            EXCELÊNCIA EM<br />
            <span className="text-gradient">CADA DETALHE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais do que vender carros, proporcionamos uma experiência completa de propriedade 
            com serviços exclusivos e atendimento personalizado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl card-gradient border border-border/50 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
