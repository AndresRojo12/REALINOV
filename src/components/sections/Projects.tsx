'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Dumbbell,
  FileText,
  ShoppingCart,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Market Pro',
    category: 'Software empresarial',
    description:
      'Sistema de facturación e inventario diseñado para centralizar operaciones comerciales y facilitar la gestión del negocio.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Electron'],
    icon: FileText,
  },
  {
    number: '02',
    title: 'Men & Women Gym',
    category: 'Aplicación web y móvil',
    description:
      'Plataforma para la gestión de un gimnasio, orientada a organizar clientes, operaciones y la experiencia digital de los usuarios.',
    technologies: ['NestJS', 'React Native', 'PostgreSQL', 'TypeORM'],
    icon: Dumbbell,
  },
  {
    number: '03',
    title: 'API Días Hábiles Colombia',
    category: 'API e integración',
    description:
      'API especializada para consultar y calcular días hábiles en Colombia, pensada para integrarse con diferentes aplicaciones y procesos.',
    technologies: ['Node.js', 'Express', 'REST API'],
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'E-commerce & Marketplace',
    category: 'Comercio digital',
    description:
      'Soluciones digitales orientadas a la publicación de productos, gestión comercial y creación de experiencias de compra en línea.',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Cloud'],
    icon: ShoppingCart,
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-realinov-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-realinov-accent/5 blur-3xl" />
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
            Proyectos
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
            Tecnología convertida en soluciones.
          </h2>

          <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
            Estos proyectos representan diferentes formas en las que aplicamos
            tecnología para resolver necesidades concretas y construir
            productos digitales.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-realinov-surface transition-all duration-300 hover:-translate-y-1 hover:border-realinov-primary/30"
              >
                {/* Visual area */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-realinov-surface-light">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_60%)]" />

                  {/* Abstract interface */}
                  <div className="relative w-[72%] max-w-sm rounded-xl border border-white/10 bg-realinov-background/90 p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                      <div className="h-2 w-2 rounded-full bg-realinov-primary" />
                      <div className="h-2 w-2 rounded-full bg-realinov-accent" />
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-white/[0.05]" />
                      <div className="h-16 rounded-lg bg-realinov-primary/10" />
                      <div className="h-16 rounded-lg bg-realinov-accent/10" />
                    </div>

                    <div className="mt-3 h-2 w-2/3 rounded-full bg-white/10" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-white/[0.06]" />
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-realinov-background/80 backdrop-blur">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-realinov-accent"
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.2em] text-white/20">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-realinov-accent">
                    {project.category}
                  </span>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-realinov-foreground">
                      {project.title}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-realinov-muted transition-all duration-300 group-hover:border-realinov-primary/40 group-hover:text-realinov-accent">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-realinov-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-base text-realinov-muted">
            ¿Tienes una idea o un problema que quieres convertir en una
            solución digital?
          </p>

          <a
            href="#contacto"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-realinov-primary/40 bg-realinov-primary/10 px-6 py-3 text-sm font-semibold text-realinov-foreground transition-all duration-300 hover:border-realinov-primary/60 hover:bg-realinov-primary/20"
          >
            Hablemos de tu proyecto
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}