import React from 'react';
import { Coffee, Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-amber-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleScroll('hero')}
            className="flex items-center gap-2 text-amber-900 hover:text-amber-800 transition-colors"
            aria-label="Corizza"
          >
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-semibold tracking-wide">Corizza</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-amber-900">
            <button onClick={() => handleScroll('menu')} className="hover:text-amber-700 transition-colors">Меню</button>
            <button onClick={() => handleScroll('about')} className="hover:text-amber-700 transition-colors">О нас</button>
            <button onClick={() => handleScroll('visit')} className="hover:text-amber-700 transition-colors">Контакты</button>
            <button
              onClick={() => handleScroll('menu')}
              className="rounded-full bg-amber-900 text-amber-50 px-4 py-2 hover:bg-amber-800 transition-colors shadow"
            >
              Смотреть меню
            </button>
          </div>

          <button
            className="md:hidden p-2 text-amber-900"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 text-amber-900">
              <button onClick={() => handleScroll('menu')} className="px-2 py-2 text-left rounded hover:bg-amber-50">Меню</button>
              <button onClick={() => handleScroll('about')} className="px-2 py-2 text-left rounded hover:bg-amber-50">О нас</button>
              <button onClick={() => handleScroll('visit')} className="px-2 py-2 text-left rounded hover:bg-amber-50">Контакты</button>
              <button onClick={() => handleScroll('menu')} className="mt-2 rounded-full bg-amber-900 text-amber-50 px-4 py-2">Смотреть меню</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
