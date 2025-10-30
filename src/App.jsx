import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import VisitContact from './components/VisitContact';
import { ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900 selection:bg-amber-200/70 selection:text-amber-950">
      <Navbar />
      <Hero />
      <Menu />
      <VisitContact />

      <footer className="border-t border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-amber-900/70">© {new Date().getFullYear()} Corizza. Все права защищены.</p>
          <div className="text-sm text-amber-900/70">Сделано с любовью к кофе.</div>
        </div>
      </footer>

      <a
        href="https://wa.me/79990000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-amber-900 text-amber-50 px-5 py-3 shadow-lg shadow-amber-900/20 hover:bg-amber-800 transition-colors"
      >
        Заказать сейчас <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default App;
