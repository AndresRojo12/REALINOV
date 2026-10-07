import './globals.css';

export const metadata = {
  title: 'REALINOV',
  description: 'Transformamos problemas empresariales en soluciones tecnológicas.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
