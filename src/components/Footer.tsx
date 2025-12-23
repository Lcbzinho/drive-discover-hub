const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-wider text-foreground">
              VELOCITY
            </span>
            <span className="text-primary font-display text-2xl">.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Cookies
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Velocity. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
