import { Brain, Users, HeartHandshake, Sparkles, Briefcase, Baby } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Emagrecimento Saudável",
    description: "Plano nutricional personalizado para perda de peso de forma segura e sustentável, sem privações.",
  },
  {
    icon: Users,
    title: "Reeducação Alimentar",
    description: "Desenvolvimento de hábitos alimentares saudáveis e duradouros para toda a vida.",
  },
  {
    icon: HeartHandshake,
    title: "Nutrição Clínica",
    description: "Atendimento para doenças crônicas: diabetes, hipertensão, colesterol e outras condições.",
  },
  {
    icon: Sparkles,
    title: "Performance e Energia",
    description: "Nutrição otimizada para aumentar disposição, energia e bem-estar no dia a dia.",
  },
  {
    icon: Briefcase,
    title: "Nutrição Comportamental",
    description: "Trabalho com a relação emocional com a comida, ansiedade alimentar e compulsão.",
  },
  {
    icon: Baby,
    title: "Nutrição Familiar",
    description: "Orientação nutricional para toda a família, incluindo crianças e adolescentes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="animate-fade-up inline-block mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Serviços
          </span>
          <h2 className="animate-fade-up animate-delay-100 font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Como posso ajudar você
          </h2>
          <p className="animate-fade-up animate-delay-200 mt-4 text-muted-foreground text-lg">
            Ofereço um espaço de acolhimento para diferentes demandas nutricionais e objetivos de saúde.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-up group p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
