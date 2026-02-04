import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

const WHATSAPP_NUMBER = "554799055968";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entrarei em contato em breve. Obrigada!",
      });
      
      setFormData({ name: "", email: "", message: "" });
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`;

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
                  <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                </div>
              </a>

              <a
                href="mailto:vanessalenzibuquete@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-background shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">E-mail</h4>
                  <p className="text-sm text-muted-foreground">vanessalenzibuquete@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-background shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Telefone</h4>
                  <p className="text-sm text-muted-foreground">(11) 3456-7890</p>
                </div>
              </div>
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
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
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
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensagem
                    </>
                  )}
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
