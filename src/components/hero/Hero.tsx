'use client';

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Software', icon: Code2 },
  { name: 'IA', icon: Cpu },
  { name: 'Automatización', icon: Workflow },
  { name: 'Datos', icon: Database },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-realinov-background
        pt-28
      "
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/4
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-realinov-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-1/2
            h-[350px]
            w-[350px]
            rounded-full
            bg-realinov-accent/5
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-[size:64px_64px]
            [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
          "
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-realinov-accent/20
                bg-realinov-accent/5
                px-4
                py-2
                text-sm
                font-medium
                text-realinov-accent
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-realinov-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-realinov-accent" />
              </span>

              Soluciones digitales para empresas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Transformamos problemas empresariales{' '}
              <span className="bg-gradient-to-r from-realinov-primary via-blue-400 to-realinov-accent bg-clip-text text-transparent">
                en soluciones tecnológicas.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-realinov-muted
                sm:text-lg
                sm:leading-8
              "
            >
              Diseñamos y desarrollamos soluciones digitales que ayudan a las
              empresas a optimizar sus procesos, conectar con sus clientes y
              crecer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-realinov-primary
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-realinov-primary/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500
                  hover:shadow-realinov-primary/30
                "
              >
                Hablemos de tu proyecto

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#soluciones"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                Explorar soluciones
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-realinov-muted/70">
                Tecnología aplicada al negocio
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 text-sm text-realinov-muted"
                    >
                      <Icon size={16} className="text-realinov-accent" />
                      {technology.name}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[500px]">
              {/* Outer glow */}
              <div className="absolute inset-8 rounded-full bg-realinov-primary/10 blur-3xl" />

              {/* Main panel */}
              <div
                className="
                  absolute
                  inset-8
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-realinov-surface/70
                  shadow-2xl
                  shadow-black/30
                  backdrop-blur-xl
                "
              />

              {/* Central symbol */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-realinov-primary
                  to-realinov-accent
                  shadow-2xl
                  shadow-realinov-primary/30
                "
              >
                <span className="text-4xl font-black tracking-tighter text-white">
                  RN
                </span>
              </div>

              {/* Orbit 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-2
                  rounded-full
                  border
                  border-dashed
                  border-realinov-primary/20
                "
              >
                <div
                  className="
                    absolute
                    -left-1
                    top-1/2
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    bg-realinov-primary
                    shadow-lg
                    shadow-realinov-primary/50
                  "
                />
              </motion.div>

              {/* Orbit 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-20
                  rounded-full
                  border
                  border-dashed
                  border-realinov-accent/20
                "
              >
                <div
                  className="
                    absolute
                    -right-1
                    top-1/2
                    h-2.5
                    w-2.5
                    -translate-y-1/2
                    rounded-full
                    bg-realinov-accent
                    shadow-lg
                    shadow-realinov-accent/50
                  "
                />
              </motion.div>

              {/* Problem */}
              <div
                className="
                  absolute
                  left-0
                  top-16
                  rounded-xl
                  border
                  border-white/10
                  bg-realinov-surface-light/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-400" />
                  <span className="text-xs font-medium text-realinov-muted">
                    Problema
                  </span>
                </div>
              </div>

              {/* Technology */}
              <div
                className="
                  absolute
                  right-0
                  top-28
                  rounded-xl
                  border
                  border-white/10
                  bg-realinov-surface-light/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-realinov-accent" />
                  <span className="text-xs font-medium text-realinov-muted">
                    Tecnología
                  </span>
                </div>
              </div>

              {/* Solution */}
              <div
                className="
                  absolute
                  bottom-20
                  left-0
                  rounded-xl
                  border
                  border-white/10
                  bg-realinov-surface-light/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span className="text-xs font-medium text-realinov-muted">
                    Solución
                  </span>
                </div>
              </div>

              {/* Growth */}
              <div
                className="
                  absolute
                  bottom-12
                  right-0
                  rounded-xl
                  border
                  border-white/10
                  bg-realinov-surface-light/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-realinov-accent" />
                  <span className="text-xs font-medium text-realinov-muted">
                    Crecimiento
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-16
            flex
            items-center
            justify-center
            gap-3
            pb-8
            text-xs
            text-realinov-muted/60
          "
        >
          <span className="h-px w-8 bg-white/10" />
          Soluciones diseñadas alrededor de tu negocio, no al revés.
          <span className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}