'use client';

import {
  ArrowRight,
  BrainCircuit,
  Hammer,
  RefreshCw,
} from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'Entendemos',
    description:
      'Analizamos tu operación, tus objetivos y los problemas que realmente necesitan solución.',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Construimos',
    description:
      'Diseñamos y desarrollamos una solución alineada con las necesidades reales de tu negocio.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Evolucionamos',
    description:
      'Acompañamos la solución para que pueda crecer junto con tu empresa y sus nuevos desafíos.',
  },
];

export default function ValueProposition() {
  return (
    <section
      id="propuesta"
      className="relative overflow-hidden bg-realinov-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
              Nuestra forma de trabajar
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Convertimos necesidades empresariales en{' '}
              <span className="bg-gradient-to-r from-realinov-primary to-realinov-accent bg-clip-text text-transparent">
                soluciones digitales.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-realinov-muted sm:text-lg sm:leading-8">
              La tecnología es el medio. El verdadero objetivo es mejorar la
              forma en que funciona tu empresa.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-realinov-primary/10 text-realinov-accent">
                <ArrowRight size={16} />
              </span>

              Tecnología diseñada alrededor de tu negocio.
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    flex
                    gap-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-realinov-background/60
                    p-6
                    transition-all
                    duration-300
                    hover:border-realinov-primary/25
                    hover:bg-realinov-background
                    sm:p-7
                  "
                >
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.15em] text-realinov-muted/50">
                      {pillar.number}
                    </span>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-realinov-accent
                        transition
                        duration-300
                        group-hover:border-realinov-primary/30
                        group-hover:bg-realinov-primary/10
                      "
                    >
                      <Icon size={21} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-realinov-muted sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}