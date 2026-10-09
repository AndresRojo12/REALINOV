'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Dumbbell,
  GraduationCap,
  Gavel,
  Hotel,
  Factory,
  HeartPulse,
  Home,
  Scissors,
  ShoppingBag,
  Truck,
  Utensils,
} from 'lucide-react';

const sectors = [
  {
    number: '01',
    name: 'Centros de estética',
    description:
      'Agenda de citas, gestión de clientes, recordatorios, historial y procesos que reduzcan tareas manuales.',
    icon: Scissors,
  },
  {
    number: '02',
    name: 'Restaurantes',
    description:
      'Pedidos, reservas, inventario, canales digitales y herramientas para mejorar la operación y atención.',
    icon: Utensils,
  },
  {
    number: '03',
    name: 'Gimnasios',
    description:
      'Membresías, pagos, clientes, seguimiento y automatización de procesos administrativos.',
    icon: Dumbbell,
  },
  {
    number: '04',
    name: 'Hoteles',
    description:
      'Reservas, atención al cliente, gestión operativa y soluciones digitales para mejorar la experiencia.',
    icon: Hotel,
  },
  {
    number: '05',
    name: 'Inmobiliarias',
    description:
      'Gestión de propiedades, clientes potenciales, seguimiento comercial y automatización de procesos.',
    icon: Home,
  },
  {
    number: '06',
    name: 'Firmas de abogados',
    description:
      'Organización de clientes, procesos, documentos, tareas y seguimiento de información.',
    icon: Gavel,
  },
  {
    number: '07',
    name: 'Centros educativos',
    description:
      'Matrículas, comunicación, gestión de información y herramientas para optimizar procesos administrativos.',
    icon: GraduationCap,
  },
  {
    number: '08',
    name: 'Tiendas y comercios',
    description:
      'Inventario, ventas, comercio electrónico, clientes y herramientas para fortalecer la operación.',
    icon: ShoppingBag,
  },
  {
    number: '09',
    name: 'Veterinarias',
    description:
      'Citas, clientes, historial, recordatorios y gestión de información de mascotas.',
    icon: HeartPulse,
  },
  {
    number: '10',
    name: 'Servicios profesionales',
    description:
      'Clientes, cotizaciones, agenda, seguimiento y automatización de tareas repetitivas.',
    icon: BriefcaseBusiness,
  },
  {
    number: '11',
    name: 'Logística',
    description:
      'Seguimiento de operaciones, información, trazabilidad y automatización de procesos.',
    icon: Truck,
  },
  {
    number: '12',
    name: 'Empresas industriales',
    description:
      'Digitalización de procesos, indicadores, datos, integración de sistemas y automatización.',
    icon: Factory,
  },
];

export default function Sectors() {
  return (
    <section id="sectores" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-realinov-primary/10 blur-3xl" />
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
            Sectores que entendemos
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-realinov-foreground sm:text-4xl lg:text-5xl">
            Tecnología adaptada a la realidad de cada negocio.
          </h2>

          <p className="mt-6 text-base leading-8 text-realinov-muted sm:text-lg">
            No todos los negocios funcionan igual. Diseñamos soluciones
            teniendo en cuenta tus procesos, tus clientes y la forma en que
            realmente opera tu empresa.
          </p>
        </motion.div>

        {/* Sectors grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.article
                key={sector.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-realinov-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-realinov-primary/30 hover:bg-realinov-surface-light"
              >
                {/* Number */}
                <div className="absolute right-5 top-5 text-xs font-bold tracking-widest text-white/10 transition-colors duration-300 group-hover:text-realinov-primary/30">
                  {sector.number}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-realinov-primary/20 bg-realinov-primary/10 transition-all duration-300 group-hover:border-realinov-accent/30 group-hover:bg-realinov-accent/10">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-realinov-accent"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-realinov-foreground">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-realinov-muted">
                  {sector.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-px w-10 bg-gradient-to-r from-realinov-primary to-realinov-accent transition-all duration-300 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-lg font-medium text-realinov-foreground">
            ¿Tu negocio pertenece a otro sector?
          </p>

          <p className="mt-2 text-sm leading-7 text-realinov-muted">
            No hay problema. Analizamos tu operación y encontramos la mejor
            forma de aplicar tecnología a tus necesidades.
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex items-center rounded-xl bg-realinov-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-realinov-primary/90 hover:shadow-lg hover:shadow-realinov-primary/20"
          >
            Cuéntanos sobre tu negocio
          </a>
        </motion.div>
      </div>
    </section>
  );
}