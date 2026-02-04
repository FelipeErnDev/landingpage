import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const WHATSAPP_NUMBER = "554799055968";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta.";

const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consultório de nutrição acolhedor"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-wide w-full">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-block mb-4 text-sm font-medium tracking-wide text-primary uppercase">
            Nutrição e Emagrecimento
          </span>
          
          <h1 className="animate-fade-up animate-delay-100 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Transforme sua saúde com nutrição personalizada em Florianópolis
          </h1>
          
          <p className="animate-fade-up animate-delay-200 mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-xl">
            Um espaço acolhedor para você alcançar seus objetivos de saúde e bem-estar. 
            Atendimento presencial e online com abordagem científica e humanizada.
          </p>

          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Consulta
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 border-primary/30 hover:bg-primary/5"
            >
              <a href="#sobre">
                Conhecer mais
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#sobre" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-wider uppercase mb-2">Saiba mais</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
