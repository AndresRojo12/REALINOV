'use client';

import {
  AlertCircle,
  ArrowDown,
  Clock3,
  Layers3,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    number: '01',
    icon: Clock3,
    title: 'Procesos manuales',
    description:
      'Tareas repetitivas que consumen tiempo y aumentan el riesgo de errores.',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Dificultad para crecer',
    description:
      'Procesos y herramientas que funcionan hoy, pero limitan el crecimiento mañana.',
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Falta de organización',
    description:
      'Información dispersa, sistemas desconectados y poca visibilidad sobre el negocio.',
  },
  {
    number: '04',
    icon: AlertCircle,
    title: 'Tecnología que ya no encaja',
    description:
      'Herramientas que dejaron de responder a las necesidades reales de la empresa.',
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden bg-realinov-background py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
            El punto de partida
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Todo comienza con un{' '}
            <span className="bg-gradient-to-r from-realinov-primary to-realinov-accent bg-clip-text text-transparent">
              problema real.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-realinov-muted sm:text-lg sm:leading-8">
            Antes de pensar en tecnología, entendemos qué está frenando a tu
            empresa. Porque una buena solución no empieza con una herramienta;
            empieza con una necesidad.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.article
                key={problem.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-realinov-surface/60
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-realinov-primary/30
                  hover:bg-realinov-surface
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-realinov-muted/50">
                    {problem.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-realinov-accent
                      transition
                      duration-300
                      group-hover:border-realinov-accent/20
                      group-hover:bg-realinov-accent/10
                    "
                  >
                    <Icon size={19} />
                  </div>
                </div>

                <h3 className="mt-7 text-lg font-bold text-white">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-realinov-muted">
                  {problem.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-realinov-primary to-realinov-accent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Central statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-realinov-primary/20
              bg-gradient-to-br
              from-realinov-primary/[0.08]
              via-realinov-surface
              to-realinov-accent/[0.05]
              px-6
              py-10
              text-center
              sm:px-10
            "
          >
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-realinov-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <ArrowDown size={18} className="text-realinov-accent" />
              </div>

              <p className="mt-6 text-xl font-bold leading-8 text-white sm:text-2xl">
                No empezamos preguntando{' '}
                <span className="text-realinov-accent">
                  qué software quieres.
                </span>
              </p>

              <p className="mt-2 text-xl font-bold leading-8 text-white sm:text-2xl">
                Empezamos preguntando{' '}
                <span className="bg-gradient-to-r from-realinov-primary to-realinov-accent bg-clip-text text-transparent">
                  qué problema necesitas resolver.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}