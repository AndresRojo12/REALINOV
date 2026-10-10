'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';

const projectTypes = [
  'Sitio web',
  'Tienda virtual',
  'Software empresarial',
  'Aplicación web o móvil',
  'Automatización e IA',
  'API o integración',
  'Otro',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Formulario preparado para conectar posteriormente
    // con un servicio de envío o API propia.
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-realinov-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-realinov-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-realinov-primary/20 bg-realinov-primary/10 px-4 py-2 text-sm font-semibold text-realinov-accent">
            Hablemos
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
            Cuéntanos qué quieres transformar.
          </h2>

          <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
            No necesitas tener definida la solución tecnológica. Cuéntanos
            qué está pasando en tu negocio y analizaremos contigo el mejor
            camino.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-white/[0.07] bg-realinov-surface p-8 sm:p-10"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
                Empecemos por el problema
              </p>

              <h3 className="mt-5 text-2xl font-bold leading-relaxed text-realinov-foreground sm:text-3xl">
                Una conversación puede ser el primer paso para encontrar una
                solución.
              </h3>

              <p className="mt-5 text-sm leading-7 text-realinov-muted sm:text-base">
                Cuéntanos sobre tu empresa, proyecto o necesidad. Revisaremos
                la información y definiremos contigo los siguientes pasos.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-realinov-primary/10">
                  <MessageCircle
                    size={20}
                    className="text-realinov-accent"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-realinov-foreground">
                    Conversación inicial
                  </p>

                  <p className="mt-1 text-xs text-realinov-muted">
                    Entendemos tu necesidad antes de proponer.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-realinov-primary/10">
                  <Mail size={20} className="text-realinov-accent" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-realinov-foreground">
                    Propuesta adecuada
                  </p>

                  <p className="mt-1 text-xs text-realinov-muted">
                    Definimos el camino según el proyecto.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-realinov-primary/10">
                  <CheckCircle2
                    size={20}
                    className="text-realinov-accent"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-realinov-foreground">
                    Solución orientada al negocio
                  </p>

                  <p className="mt-1 text-xs text-realinov-muted">
                    Tecnología con un propósito claro.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/[0.07] bg-realinov-surface p-8 sm:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-realinov-primary/10">
                  <CheckCircle2
                    size={32}
                    className="text-realinov-accent"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-realinov-foreground">
                  Información recibida
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-realinov-muted">
                  Gracias por compartir tu proyecto. En la siguiente etapa
                  conectaremos este formulario con el canal de comunicación
                  correspondiente.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-semibold text-realinov-accent transition-colors hover:text-white"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-realinov-foreground"
                    >
                      Nombre
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm text-realinov-foreground outline-none transition-all placeholder:text-realinov-muted/60 focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-realinov-foreground"
                    >
                      Empresa
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm text-realinov-foreground outline-none transition-all placeholder:text-realinov-muted/60 focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-realinov-foreground"
                    >
                      Correo electrónico
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="correo@empresa.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm text-realinov-foreground outline-none transition-all placeholder:text-realinov-muted/60 focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-realinov-foreground"
                    >
                      WhatsApp / Teléfono
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+57 300 000 0000"
                      className="w-full rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm text-realinov-foreground outline-none transition-all placeholder:text-realinov-muted/60 focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-realinov-foreground"
                  >
                    ¿Qué necesitas?
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm text-realinov-foreground outline-none transition-all focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-realinov-foreground"
                  >
                    Cuéntanos sobre tu necesidad
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="¿Qué problema quieres resolver? Cuéntanos brevemente qué hace tu empresa y qué necesitas mejorar."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-realinov-background px-4 py-3.5 text-sm leading-6 text-realinov-foreground outline-none transition-all placeholder:text-realinov-muted/60 focus:border-realinov-primary focus:ring-2 focus:ring-realinov-primary/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-realinov-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-realinov-primary/90 hover:shadow-lg hover:shadow-realinov-primary/20"
                >
                  Enviar solicitud
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-realinov-muted">
                  La información proporcionada será utilizada únicamente para
                  dar seguimiento a tu solicitud.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-lg font-medium text-realinov-foreground">
            ¿Prefieres hablar directamente?
          </p>

          <p className="mt-2 text-sm text-realinov-muted">
            También podemos comenzar la conversación por el canal que te
            resulte más cómodo.
          </p>

          <a
            href="mailto:contacto@realinov.co"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-realinov-accent transition-colors hover:text-white"
          >
            realinovbussines@gmail.com
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}