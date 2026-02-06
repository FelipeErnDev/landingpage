import { Monitor, CalendarCheck, MapPin } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Agendamento",
    description: "Entre em contato pelo WhatsApp para agendar sua primeira consulta. Responderei em até 24 horas.",
  },
  {
    icon: MapPin,
    title: "Escolha a modalidade",
    description: "Atendimento presencial em Florianópolis ou online via plataforma segura.",
  },
  {
    icon: Monitor,
    title: "Plano Nutricional",
    description: "Receba seu plano personalizado, prático e adaptado ao seu estilo de vida.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="atendimento" className="section-padding bg-primary/5">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="animate-fade-up inline-block mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Atendimento
          </span>
          <h2 className="animate-fade-up animate-delay-100 font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Como funciona
          </h2>
          <p className="animate-fade-up animate-delay-200 mt-4 text-muted-foreground text-lg">
            O processo é simples e acolhedor. Estou aqui para facilitar seu caminho até seus objetivos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-3 justify-center">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="animate-fade-up relative text-center"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-border" />
              )}
              
              <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-card">
                <step.icon className="h-7 w-7" />
              </div>
              
              <h3 className="font-serif text-lg font-medium text-foreground">
                {step.title}
              </h3>
              
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-background p-6 shadow-card">
            <h4 className="font-serif text-lg font-medium text-foreground mb-2">
              Público Atendido
            </h4>
            <p className="text-muted-foreground text-sm">
              Adultos e adolescentes (a partir de 14 anos). Atendimento individual, 
              grupos de emagrecimento e orientação para famílias.
            </p>
          </div>
          
          <div className="rounded-xl bg-background p-6 shadow-card">
            <h4 className="font-serif text-lg font-medium text-foreground mb-2">
              Horários Flexíveis
            </h4>
            <p className="text-muted-foreground text-sm">
              Segunda a sexta, das 8h às 20h. Sábados pela manhã mediante disponibilidade.
            </p>
          </div>
          
          <div className="rounded-xl bg-background p-6 shadow-card">
            <h4 className="font-serif text-lg font-medium text-foreground mb-2">
              Primeira Consulta
            </h4>
            <p className="text-muted-foreground text-sm">
              A primeira consulta é dedicada a conhecer você, seus hábitos, objetivos 
              e criar um plano nutricional alinhado com suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
