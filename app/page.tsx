'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import Problems from '@/components/sections/Problems';
import ValueProposition from '@/components/sections/ValueProposition';
import Solutions from '@/components/sections/Solutions';
import Sectors from '@/components/sections/Sectors';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import Technology from '@/components/sections/Technology';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-realinov-background">
      <Navbar />
      <Hero />
      <Problems />
      <ValueProposition />
      <Solutions />
      <Sectors />
      <Process />
      <Projects />
      <Technology />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}