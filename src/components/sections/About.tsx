'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Eye,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';

const values = [
  {
    title: 'Innovación',
    description:
      'Buscamos nuevas formas de utilizar la tecnología para crear soluciones útiles y relevantes.',
    icon: Lightbulb,
  },
  {
    title: 'Orientación al cliente',
    description:
      'Escuchamos y entendemos el negocio antes de proponer una solución.',
    icon: Users,
  },
  {
    title: 'Calidad',
    description:
      'Construimos soluciones pensando en estabilidad, seguridad, rendimiento y evolución.',
    icon: Target,
  },
  {
    title: 'Evolución',
    description:
      'Creemos que una solución digital debe poder crecer junto con el negocio.',
    icon: Eye,
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-realinov-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-realinov-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main introduction */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-realinov-primary/20 bg-realinov-primary/10 px-4 py-2 text-sm font-semibold text-realinov-accent">
              Sobre REALINOV
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
              Construimos tecnología con una visión de largo plazo.
            </h2>

            <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
              REALINOV nace con una idea sencilla: la tecnología debe ayudar a
              las empresas a resolver problemas reales, mejorar sus procesos y
              encontrar nuevas oportunidades de crecimiento.
            </p>

            <p className="mt-5 text-base leading-8 text-realinov-muted sm:text-lg">
              Combinamos desarrollo de software, automatización, datos e
              inteligencia artificial para crear soluciones digitales
              adaptadas a las necesidades de cada negocio.
            </p>

            <p className="mt-5 text-base leading-8 text-realinov-muted sm:text-lg">
              Nuestra visión es construir relaciones de largo plazo con
              empresas que quieran evolucionar, utilizando la tecnología como
              una herramienta estratégica para crecer.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-realinov-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-realinov-primary/90 hover:shadow-lg hover:shadow-realinov-primary/20"
            >
              Conoce cómo podemos ayudarte
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-realinov-surface p-8 sm:p-10">
              {/* Decorative grid */}
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-realinov-primary to-realinov-accent">
                  <Target
                    size={26}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
                  Nuestra visión
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-relaxed text-realinov-foreground sm:text-3xl">
                  Ser un aliado tecnológico para empresas que quieren
                  evolucionar.
                </h3>

                <div className="mt-8 h-px bg-gradient-to-r from-realinov-primary/40 via-realinov-accent/30 to-transparent" />

                <p className="mt-7 text-sm leading-7 text-realinov-muted sm:text-base">
                  Empezamos construyendo soluciones para necesidades reales,
                  con la visión de crecer junto a nuestros clientes y formar
                  con el tiempo un equipo capaz de abordar proyectos
                  tecnológicos cada vez más grandes.
                </p>

                {/* Concept */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {['Problema', 'Solución', 'Crecimiento'].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-center"
                      >
                        <span className="text-xs font-semibold text-realinov-foreground">
                          {item}
                        </span>

                        {index < 2 && (
                          <span className="ml-2 hidden text-realinov-accent sm:inline">
                            →
                          </span>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
              Lo que nos define
            </p>

            <h3 className="mt-4 text-2xl font-bold text-realinov-foreground sm:text-3xl">
              Principios detrás de cada solución.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-realinov-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-realinov-primary/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-realinov-primary/10">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-realinov-accent"
                    />
                  </div>

                  <h4 className="mt-5 font-bold text-realinov-foreground">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-realinov-muted">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-xl font-semibold leading-9 text-realinov-foreground sm:text-2xl">
            “Transformamos problemas empresariales en{' '}
            <span className="text-realinov-accent">
              soluciones tecnológicas.
            </span>
            ”
          </p>
        </motion.div>
      </div>
    </section>
  );
}