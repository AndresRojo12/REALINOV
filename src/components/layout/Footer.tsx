'use client';

import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import logo from '../../images/rn (1).png';

const solutionLinks = [
  { label: 'Presencia digital', href: '#soluciones' },
  { label: 'Software empresarial', href: '#soluciones' },
  { label: 'Automatización e IA', href: '#soluciones' },
  { label: 'Aplicaciones web y móviles', href: '#soluciones' },
  { label: 'APIs e integraciones', href: '#soluciones' },
];

const companyLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#080E19]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-realinov-primary to-realinov-accent" />

                <Image
                  src={logo}
                  alt="RN"
                  width={40}
                  height={40}
                  className="relative z-10 h-10 w-10 object-cover"
                />
              </div>

              <div>
                <span className="block text-lg font-extrabold tracking-tight text-realinov-foreground">
                  REALINOV
                </span>

                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-realinov-muted">
                  Tecnología que transforma
                </span>
              </div>
            </a>

            <p className="mt-6 text-sm leading-7 text-realinov-muted">
              Transformamos problemas empresariales en soluciones
              tecnológicas diseñadas para ayudar a las empresas a evolucionar
              y crecer.
            </p>

            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-realinov-accent transition-colors hover:text-white"
            >
              Hablemos de tu proyecto
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-realinov-foreground">
              Soluciones
            </h3>

            <ul className="mt-5 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-realinov-muted transition-colors hover:text-realinov-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-realinov-foreground">
              REALINOV
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-realinov-muted transition-colors hover:text-realinov-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-realinov-foreground">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-realinov-accent"
                />

                <span className="text-sm leading-6 text-realinov-muted">
                  realinovbussines@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-realinov-accent"
                />

                <span className="text-sm leading-6 text-realinov-muted">
                  Santa Rosa De Osos, Antioquia, Colombia
                </span>
              </div>
            </div>

            <div className="mt-7">
              <a
                href="#contacto"
                className="inline-flex items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-realinov-foreground transition-all hover:border-realinov-primary/30 hover:bg-realinov-primary/10"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-realinov-muted">
            © {currentYear} REALINOV. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-realinov-muted transition-colors hover:text-realinov-foreground"
            >
              Política de privacidad
            </a>

            <a
              href="#"
              className="text-xs text-realinov-muted transition-colors hover:text-realinov-foreground"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}