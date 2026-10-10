'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const technologies = [
  {
    name: 'Backend & APIs',
    description:
      'Servicios robustos y APIs diseñadas para conectar aplicaciones, procesos y datos.',
    technologies: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI'],
    icon: Code2,
  },
  {
    name: 'Frontend & Apps',
    description:
      'Interfaces modernas, rápidas y adaptadas a las necesidades de cada producto digital.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
    icon: Layers3,
  },
  {
    name: 'Datos',
    description:
      'Arquitecturas para almacenar, consultar y transformar información de forma eficiente.',
    technologies: ['PostgreSQL', 'MongoDB', 'SQL', 'Pandas', 'NumPy'],
    icon: Database,
  },
  {
    name: 'IA & Automatización',
    description:
      'Inteligencia artificial y automatización aplicadas a procesos donde realmente generan valor.',
    technologies: ['IA Generativa', 'NLP', 'Agentes IA', 'n8n', 'Integraciones'],
    icon: BrainCircuit,
  },
  {
    name: 'Cloud & Deployment',
    description:
      'Implementación y despliegue de soluciones con una infraestructura preparada para crecer.',
    technologies: ['AWS', 'Render', 'Docker', 'CI/CD', 'Cloud'],
    icon: Cloud,
  },
  {
    name: 'Calidad & Seguridad',
    description:
      'Buenas prácticas para construir software mantenible, seguro y preparado para evolucionar.',
    technologies: ['Git', 'GitHub', 'JWT', 'OAuth 2.0', 'Testing'],
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: 'Arquitectura',
    description: 'Pensamos cómo debe funcionar la solución antes de construirla.',
    icon: GitBranch,
  },
  {
    title: 'Integración',
    description: 'Conectamos sistemas, servicios y datos para eliminar silos.',
    icon: Workflow,
  },
  {
    title: 'Escalabilidad',
    description: 'Construimos pensando en las necesidades actuales y futuras.',
    icon: Layers3,
  },
];

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-realinov-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-realinov-accent/5 blur-3xl" />
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
            Tecnología
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
            Tecnología al servicio de los objetivos de tu negocio.
          </h2>

          <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
            Utilizamos herramientas modernas y diferentes tecnologías según
            las necesidades de cada solución. No existe un stack único para
            todos los problemas.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group rounded-2xl border border-white/[0.07] bg-realinov-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-realinov-primary/30 hover:bg-realinov-surface-light"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-realinov-primary/20 bg-realinov-primary/10">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-realinov-accent"
                    />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-realinov-foreground">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-realinov-muted">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
              Nuestra forma de construir
            </p>

            <h3 className="mt-4 text-2xl font-bold text-realinov-foreground sm:text-3xl">
              Más allá de las herramientas.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-realinov-primary/10">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-realinov-accent"
                    />
                  </div>

                  <h4 className="mt-5 font-bold text-realinov-foreground">
                    {principle.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-realinov-muted">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <p className="text-lg leading-8 text-realinov-muted sm:text-xl">
            Elegimos la tecnología según{' '}
            <span className="font-semibold text-realinov-foreground">
              el problema que necesitamos resolver
            </span>
            , no al contrario.
          </p>
        </motion.div>
      </div>
    </section>
  );
}