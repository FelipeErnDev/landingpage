import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

const WHATSAPP_NUMBER = "554799055968";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Create WhatsApp message with name and message
      const whatsappMessage = `Olá! Me chamo ${validatedData.name},\n\n${validatedData.message}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Você será redirecionado para continuar a conversa.",
      });
      
      setFormData({ name: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <span className="inline-block mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Contato
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Estou à disposição para esclarecer dúvidas ou agendar sua primeira consulta. 
              Escolha a forma mais confortável para você entrar em contato.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-background shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Clique aqui para conversar</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up animate-delay-200">
            <form onSubmit={handleSubmit} className="rounded-xl bg-background p-6 md:p-8 shadow-card">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                Envie uma mensagem
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como posso ajudar você?"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6"
                >
                  {isLoading ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
