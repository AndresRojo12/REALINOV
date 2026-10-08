import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://realinov.co'),

  title: {
    default: 'REALINOV | Soluciones tecnológicas para empresas',
    template: '%s | REALINOV',
  },

  description:
    'Transformamos problemas empresariales en soluciones tecnológicas. Desarrollamos software, automatización, IA, aplicaciones y soluciones digitales para empresas.',

  keywords: [
    'REALINOV',
    'software empresarial',
    'desarrollo de software',
    'automatización empresarial',
    'inteligencia artificial',
    'desarrollo web',
    'aplicaciones empresariales',
    'software en Colombia',
    'desarrollo de software Antioquia',
  ],

  authors: [{ name: 'REALINOV' }],

  creator: 'REALINOV',

  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://realinov.co',
    siteName: 'REALINOV',
    title: 'REALINOV | Soluciones tecnológicas para empresas',
    description:
      'Transformamos problemas empresariales en soluciones tecnológicas.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}