import profileImage from "@/assets/vanessa.jpeg";
import { MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-up relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={profileImage}
                alt="Dra. Ana Clara - Psicóloga"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up animate-delay-200">
            <span className="inline-block mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Sobre mim
            </span>
            
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              Dra. Vanessa Lenzi
            </h2>
            
            <p className="mt-2 text-lg text-primary font-medium">
              Nutricionista Especialista
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Sou Nutricionista especialista em Nutrição Funcional, Esportiva, Clínica, Estética e Emagrecimento. Nos últimos meses já acompanhei mais de 300 pacientes no uso estratégico da Tirzepatida (Mounjaro), ajudando cada um deles a emagrecer com segurança, preservar massa magra e transformar a relação com a comida.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ao perceber o quanto um acompanhamento correto faz diferença nos resultados e como muitas pessoas usam esses medicamentos sem orientação adequada, decidi reunir todo o meu conhecimento prático e clínico em um material completo, direto e pensado para pessoas como você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
