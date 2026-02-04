import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container-wide px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-background">
              Dra. Vanessa
            </h3>
            <p className="mt-2 text-sm">
              Nutricionista | CRN 06/123456
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Atendimento nutricional humanizado em Florianópolis. 
              Cuidando da sua saúde e bem-estar com ética, respeito e profissionalismo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-background transition-colors">
                  Atendimento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-background transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Ethics */}
          <div>
            <h4 className="font-medium text-background mb-4">Compromisso Ético</h4>
            <p className="text-sm leading-relaxed">
              Atendimento em conformidade com o Código de Ética Profissional do 
              Psicólogo e resoluções do Conselho Federal de Psicologia.
            </p>
            <p className="mt-4 text-sm">
              Sigilo profissional garantido.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} Dra. Vanessa. Todos os direitos reservados.
          </p>
          <p className="text-sm flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-accent fill-accent" /> em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
