import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 0%, rgba(120, 53, 15, 0.10), transparent), radial-gradient(1000px 500px at 100% 100%, rgba(245, 158, 11, 0.10), transparent)',
        }}
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-sm font-medium shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" /> Нейборхуд-кофейня
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-amber-950">
            Создано с любовью, подаётся с душой.
          </h1>
          <p className="mt-6 text-lg text-amber-900/80 max-w-xl">
            Откройте вкус Corizza — ваш тёплый уголок ароматного кофе и уютной атмосферы.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handleScrollToMenu}
              className="rounded-full bg-amber-900 text-amber-50 px-6 py-3 text-base font-medium shadow-lg shadow-amber-900/20 hover:bg-amber-800 transition-colors"
            >
              Смотреть меню
            </button>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-amber-900 hover:text-amber-700 transition-colors"
            >
              Узнать о нас →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
