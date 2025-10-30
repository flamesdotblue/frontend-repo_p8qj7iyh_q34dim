import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { key: 'all', label: 'Все' },
  { key: 'hot', label: 'Горячие' },
  { key: 'cold', label: 'Холодные' },
  { key: 'signature', label: 'Фирменные' },
  { key: 'dessert', label: 'Десерты' },
];

const ITEMS = [
  {
    id: 1,
    title: 'Капучино',
    desc: 'Нежная молочная пенка, ореховые нотки, баланс сладости и эспрессо.',
    img: 'https://images.unsplash.com/photo-1512566834709-04c319ad1a99?q=80&w=1887&auto=format&fit=crop',
    category: 'hot',
  },
  {
    id: 2,
    title: 'Эспрессо',
    desc: 'Плотный вкус, яркая крема, чистое кофейное послевкусие.',
    img: 'https://images.unsplash.com/photo-1558877385-3a2c3b4b3d58?q=80&w=1887&auto=format&fit=crop',
    category: 'hot',
  },
  {
    id: 3,
    title: 'Флэт уайт',
    desc: 'Шёлковистая текстура, насыщенный эспрессо и мягкое молоко.',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6b?q=80&w=1974&auto=format&fit=crop',
    category: 'hot',
  },
  {
    id: 4,
    title: 'Айс Латте',
    desc: 'Освежающий, сливочный, на льду с карамельными оттенками.',
    img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66b?q=80&w=1975&auto=format&fit=crop',
    category: 'cold',
  },
  {
    id: 5,
    title: 'Нитро Колд Брю',
    desc: 'Гладкий и бархатный, азотная текстура и шоколадные ноты.',
    img: 'https://images.unsplash.com/photo-1517701726381-6f5f6c44a5d0?q=80&w=1887&auto=format&fit=crop',
    category: 'cold',
  },
  {
    id: 6,
    title: 'Corizza Сигниче',
    desc: 'Фирменный напиток с пряностями, апельсиновой цедрой и медом.',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1974&auto=format&fit=crop',
    category: 'signature',
  },
  {
    id: 7,
    title: 'Чизкейк Нью-Йорк',
    desc: 'Классический кремовый чизкейк с ванильной ноткой.',
    img: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2070&auto=format&fit=crop',
    category: 'dessert',
  },
  {
    id: 8,
    title: 'Тирамису',
    desc: 'Воздушный десерт с эспрессо и маскарпоне, пудра какао.',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1975&auto=format&fit=crop',
    category: 'dessert',
  },
];

const Menu = () => {
  const [active, setActive] = React.useState('all');
  const [selected, setSelected] = React.useState(null);

  const filtered = active === 'all' ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section id="menu" className="bg-amber-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-amber-950">Онлайн-меню</h2>
            <p className="mt-2 text-amber-900/80 max-w-2xl">Выберите настроение: горячее, холодное, фирменные сочетания или десерты к кофе.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full border transition-all ${
                active === t.key
                  ? 'bg-amber-900 text-amber-50 border-amber-900 shadow'
                  : 'bg-white text-amber-900 border-amber-200 hover:border-amber-300 hover:shadow-sm'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(item)}
                className="text-left group rounded-2xl overflow-hidden bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-950">{item.title}</h3>
                  <p className="mt-1 text-amber-900/80 text-sm">{item.desc}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-xl w-full rounded-2xl overflow-hidden bg-white"
              >
                <div className="h-64">
                  <img src={selected.img} alt={selected.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-serif text-amber-950">{selected.title}</h3>
                  <p className="mt-2 text-amber-900/80">{selected.desc}</p>
                  <div className="mt-4 flex justify-end">
                    <button onClick={() => setSelected(null)} className="rounded-full bg-amber-900 text-amber-50 px-5 py-2 hover:bg-amber-800">Закрыть</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
