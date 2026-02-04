import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorkSection from "@/components/HowItWorkSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Vanessa | Nutricionista em Florianópolis - Emagrecimento e Nutrição</title>
        <meta
          name="description"
          content="Nutricionista especialista em emagrecimento em Florianópolis. Atendimento humanizado para perda de peso, reeducação alimentar e saúde metabólica. Sessões presenciais e online. Agende pelo WhatsApp."
        />
        <meta
          name="keywords"
          content="nutricionista Florianópolis, nutricionista SC, emagrecimento, nutrição, reeducação alimentar, perda de peso"
        />
        <meta property="og:title" content="Dra. Vanessa | Nutricionista em Florianópolis" />
        <meta
          property="og:description"
          content="Atendimento nutricional humanizado em Florianópolis. Cuide da sua saúde e bem-estar com profissionalismo e acolhimento."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.dra-vanessa.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <HowItWorkSection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
