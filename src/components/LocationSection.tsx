import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const address = "Centro, Florianópolis - SC";
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.5789!2d-48.548!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sFlorinanopolis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="localizacao" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="animate-fade-up inline-block mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Localização
          </span>
          <h2 className="animate-fade-up animate-delay-100 font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Onde me encontrar
          </h2>
          <p className="animate-fade-up animate-delay-200 mt-4 text-muted-foreground text-lg">
            Consultório localizado em região de fácil acesso, próximo ao metrô.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Map */}
          <div className="animate-fade-up lg:col-span-2 rounded-xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>

          {/* Address Card */}
          <div className="animate-fade-up animate-delay-200">
            <div className="rounded-xl bg-card border border-border/50 p-6 shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Consultório Florianópolis
                </h3>
                
                <address className="mt-4 not-italic text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">Centro</p>
                  <p>Florianópolis - SC</p>
                  <p>CEP: 88.015-000</p>
                </address>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>🚗 Fácil acesso e estacionamento próximo</p>
                  <p>🏖️ Região central de Florianópolis</p>
                  <p>♿ Acessibilidade para cadeirantes</p>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
