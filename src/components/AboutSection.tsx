import profileImage from "@/assets/psychologist-profile.jpg";
import { Award, GraduationCap, Heart } from "lucide-react";

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
              Dra. Vanessa
            </h2>
            
            <p className="mt-2 text-lg text-primary font-medium">
              CRN 06/123456
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Sou nutricionista especialista em emagrecimento há mais de 10 anos, dedicada a ajudar 
              você a alcançar seus objetivos de saúde e bem-estar. Acredito que cada pessoa é única 
              e merece um plano nutricional personalizado, respeitando seu estilo de vida e preferências.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Minha abordagem combina nutrição científica com comportamento alimentar saudável, 
              oferecendo ferramentas práticas e sustentáveis para perda de peso, saúde metabólica 
              e melhora da qualidade de vida.
            </p>

            {/* Credentials */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-card">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Formação</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    USP - Nutrição
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-card">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Especialização</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Emagrecimento - PUC-SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-card">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Experiência</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    +10 anos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
