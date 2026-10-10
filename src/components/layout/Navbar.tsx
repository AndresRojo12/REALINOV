'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/rn (1).png';

const navigation = [
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Sectores', href: '#sectores' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Tecnología', href: '#tecnologia' },
  { name: 'Nosotros', href: '#nosotros' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className="
            flex items-center justify-between
            rounded-2xl
            border border-white/10
            bg-realinov-background/80
            px-4 py-3
            shadow-2xl shadow-black/10
            backdrop-blur-xl
            sm:px-6
          "
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="REALINOV - Inicio"
            onClick={closeMenu}
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-realinov-primary to-realinov-accent opacity-90" />

              <Image
                src={logo}
                alt=""
                width={36}
                height={36}
                className="relative z-10 h-9 w-9 object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <span className="text-lg font-extrabold tracking-tight text-white">
                REALINOV
              </span>

              <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-realinov-muted">
                Real Solutions. Business Innovation.
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-sm font-medium
                  text-realinov-muted
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-realinov-primary
                    to-realinov-accent
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-realinov-primary
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-realinov-primary/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-500
                hover:shadow-realinov-primary/30
              "
            >
              Hablemos
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/5
              text-white
              transition
              hover:bg-white/10
              lg:hidden
            "
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                mt-2
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-realinov-background/95
                p-3
                shadow-2xl
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-realinov-muted
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-realinov-primary
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-500
                  "
                >
                  Hablemos
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}