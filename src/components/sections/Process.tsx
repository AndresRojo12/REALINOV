'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Entendemos',
    description:
      'Conocemos tu negocio, tus procesos, tus objetivos y el problema que quieres resolver.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Diseñamos',
    description:
      'Convertimos la necesidad en una estrategia y definimos la solución tecnológica más adecuada.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Construimos',
    description:
      'Desarrollamos la solución con una arquitectura pensada para ser segura, escalable y mantenible.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Implementamos',
    description:
      'Ponemos la solución en funcionamiento, integramos los servicios necesarios y acompañamos su puesta en marcha.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Evolucionamos',
    description:
      'Medimos, mejoramos y adaptamos la solución a medida que las necesidades de tu negocio cambian.',
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-realinov-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-realinov-accent/5 blur-3xl" />
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
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
            De un problema real a una solución que genera valor.
          </h2>

          <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
            Trabajamos de forma estructurada para que cada decisión tecnológica
            tenga un propósito claro dentro de tu negocio.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Connecting line - desktop */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-realinov-primary/10 via-realinov-accent/40 to-realinov-primary/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  {/* Icon */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-realinov-primary/30 bg-realinov-surface shadow-xl shadow-black/10">
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-realinov-primary/15 to-realinov-accent/10" />

                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      className="relative z-10 text-realinov-accent"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-5 text-xs font-bold tracking-[0.25em] text-realinov-primary">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold text-realinov-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-realinov-muted">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main principle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/[0.07] bg-realinov-surface/80 p-8 text-center backdrop-blur sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
            Nuestra filosofía
          </p>

          <p className="mt-5 text-2xl font-bold leading-relaxed text-realinov-foreground sm:text-3xl">
            “La tecnología no es el objetivo.
            <span className="text-realinov-accent">
              {' '}
              Es la herramienta para hacer avanzar tu negocio.
            </span>
            ”
          </p>
        </motion.div>
      </div>
    </section>
  );
}