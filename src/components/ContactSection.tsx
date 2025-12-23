import { MapPin, Phone, Mail, Clock, ChevronRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Entre em Contato
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              AGENDE SEU<br />
              <span className="text-gradient">TEST DRIVE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg">
              Pronto para sentir a emoção de dirigir um dos nossos veículos? 
              Preencha o formulário e entraremos em contato em até 24 horas.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Modelo de Interesse
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground">
                  <option value="">Selecione um modelo</option>
                  <option value="apex">APEX GT</option>
                  <option value="phantom">PHANTOM S</option>
                  <option value="legacy">LEGACY V8</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Conte-nos mais sobre o que você procura..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Enviar Solicitação
                <ChevronRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:pl-12">
            <div className="card-gradient rounded-2xl border border-border/50 p-8 md:p-10">
              <h3 className="font-display text-3xl text-foreground mb-8">
                INFORMAÇÕES
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. das Américas, 4200<br />
                      Barra da Tijuca, Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(21) 3333-4444</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@velocity.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Horário</h4>
                    <p className="text-muted-foreground">
                      Seg - Sáb: 9h às 19h<br />
                      Domingo: 10h às 16h
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Siga-nos</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
