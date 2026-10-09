'use client';

import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  LifeBuoy,
  ShoppingCart,
  Smartphone,
} from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    number: '01',
    icon: Globe2,
    title: 'Presencia digital',
    description:
      'Sitios web profesionales diseñados para comunicar el valor de tu empresa, generar confianza y convertir visitantes en oportunidades.',
    href: '#contacto',
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Tiendas virtuales',
    description:
      'E-commerce adaptados a tu negocio para vender productos, gestionar pedidos y ofrecer una experiencia de compra moderna.',
    href: '#contacto',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Software empresarial',
    description:
      'Sistemas personalizados para administrar procesos, información y operaciones de acuerdo con las necesidades de tu empresa.',
    href: '#contacto',
  },
  {
    number: '04',
    icon: Bot,
    title: 'Automatización e IA',
    description:
      'Automatizamos tareas y procesos utilizando inteligencia artificial, integraciones y flujos digitales.',
    href: '#contacto',
  },
  {
    number: '05',
    icon: Smartphone,
    title: 'Aplicaciones web y móviles',
    description:
      'Aplicaciones modernas y escalables para conectar equipos, clientes y procesos desde cualquier dispositivo.',
    href: '#contacto',
  },
  {
    number: '06',
    icon: Layers3,
    title: 'APIs e integraciones',
    description:
      'Conectamos sistemas, servicios y fuentes de información para que tus herramientas puedan trabajar juntas.',
    href: '#contacto',
  },
  {
    number: '07',
    icon: Cloud,
    title: 'Cloud y despliegue',
    description:
      'Implementación y configuración de soluciones en la nube con buenas prácticas de seguridad, rendimiento y disponibilidad.',
    href: '#contacto',
  },
  {
    number: '08',
    icon: LifeBuoy,
    title: 'Soporte y evolución',
    description:
      'Acompañamiento técnico para mantener, mejorar y hacer crecer las soluciones a medida que evoluciona tu negocio.',
    href: '#contacto',
  },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-realinov-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-realinov-accent">
            Lo que podemos construir
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Soluciones digitales{' '}
            <span className="bg-gradient-to-r from-realinov-primary to-realinov-accent bg-clip-text text-transparent">
              diseñadas para tu negocio.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-realinov-muted sm:text-lg sm:leading-8">
            No ofrecemos tecnología por ofrecerla. Diseñamos la combinación
            adecuada de herramientas para resolver una necesidad concreta y
            generar valor para tu empresa.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.a
                key={solution.number}
                href={solution.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[285px]
                  flex-col
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
                  hover:shadow-xl
                  hover:shadow-black/20
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-realinov-muted/40">
                    {solution.number}
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
                      transition-all
                      duration-300
                      group-hover:border-realinov-primary/30
                      group-hover:bg-realinov-primary/10
                    "
                  >
                    <Icon size={19} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-realinov-muted">
                    {solution.description}
                  </p>
                </div>

                {/* Link */}
                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-7
                    text-xs
                    font-semibold
                    text-realinov-muted
                    transition-colors
                    duration-300
                    group-hover:text-realinov-accent
                  "
                >
                  Conocer solución

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>

                {/* Hover line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-realinov-primary
                    to-realinov-accent
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-realinov-surface/40 p-6 sm:flex-row sm:px-8"
        >
          <div>
            <p className="font-semibold text-white">
              ¿No estás seguro de qué solución necesitas?
            </p>

            <p className="mt-1 text-sm text-realinov-muted">
              Cuéntanos qué problema tienes y analizamos contigo el camino más
              adecuado.
            </p>
          </div>

          <a
            href="#contacto"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-realinov-background
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-realinov-accent
              hover:text-white
            "
          >
            Cuéntanos tu problema
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}