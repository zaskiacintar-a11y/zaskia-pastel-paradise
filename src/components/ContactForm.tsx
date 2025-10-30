import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nama tidak boleh kosong" })
    .max(100, { message: "Nama maksimal 100 karakter" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email tidak valid" })
    .max(255, { message: "Email maksimal 255 karakter" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Pesan tidak boleh kosong" })
    .max(1000, { message: "Pesan maksimal 1000 karakter" }),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
      setErrors({});

      toast.success("Pesan berhasil dikirim!", {
        description: "Kami akan segera menghubungi kamu. Terima kasih!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="kontak" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Punya pertanyaan? Kami siap membantu!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nama Kamu"
                value={formData.name}
                onChange={handleChange}
                className={`rounded-xl ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email Kamu"
                value={formData.email}
                onChange={handleChange}
                className={`rounded-xl ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Pesan Kamu"
                value={formData.message}
                onChange={handleChange}
                className={`rounded-xl min-h-[150px] ${
                  errors.message ? "border-destructive" : ""
                }`}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-smooth"
            >
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
