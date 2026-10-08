import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen bg-realinov-background">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-realinov-accent">
            REALINOV
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Transformamos problemas empresariales
            <span className="block bg-gradient-to-r from-realinov-primary to-realinov-accent bg-clip-text text-transparent">
              en soluciones tecnológicas.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-realinov-muted">
            Diseñamos y desarrollamos soluciones digitales que ayudan a las
            empresas a optimizar sus procesos, conectar con sus clientes y
            crecer.
          </p>
        </div>
      </section>
    </main>
  );
}