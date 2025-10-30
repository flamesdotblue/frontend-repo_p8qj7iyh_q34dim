import React from 'react';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const VisitContact = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-serif text-amber-950">История Corizza</h2>
            <p className="mt-4 text-amber-900/80 leading-relaxed">
              Corizza — это о внимании к деталям, о ремесле, которое чувствуется в каждой чашке. Мы выбираем
              зерно у небольших фермеров, обжариваем бережно и варим так, чтобы раскрыть характер напитка. У нас
              встречаются соседи, друзья и новые идеи — мы верим в силу кофейного сообщества.
            </p>
            <p className="mt-3 text-amber-900/80 leading-relaxed">
              Загляните на чашку капучино, вернитесь за фильтром или найдите свой фирменный Corizza — мы рядом.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-4">
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1625862956024-13240fd52e7a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOUElRDAlQkUlRDElODQlRDAlQjUlRDAlQjklRDAlQkQlRDElOEIlRDAlQjUlMjAlRDAlQjclRDAlQjUlRDElODAlRDAlQkQlRDAlQjB8ZW58MHwwfHx8MTc2MTgwNTM1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Кофейные зерна" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop" alt="Бариста" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1974&auto=format&fit=crop" alt="Латте-арт" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1752931466413-d2b25eb71bf9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOTglRDAlQkQlRDElODIlRDAlQjUlRDElODAlRDElOEMlRDAlQjUlRDElODAlMjAlRDAlQkElRDAlQkUlRDElODQlRDAlQjUlRDAlQjklRDAlQkQlRDAlQjh8ZW58MHwwfHx8MTc2MTgwNTM1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Интерьер кофейни" />
          </motion.div>
        </div>
      </div>

      <div id="visit" className="mt-16 bg-amber-50/60 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div className="w-full h-[360px] rounded-xl overflow-hidden shadow border border-amber-100">
            <iframe
              title="Карта Corizza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.540722895063!2d37.617494!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDMuMCJF!5e0!3m2!1sru!2sru!4v1689080400000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <h3 className="text-2xl font-serif text-amber-950">Загляните к нам</h3>
            <div className="mt-4 space-y-3 text-amber-900/90">
              <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-amber-900 mt-0.5" /> Москва, ул. Пряничная, 7</p>
              <p className="flex items-start gap-3"><Clock className="h-5 w-5 text-amber-900 mt-0.5" /> Ежедневно: 08:00 — 21:00</p>
              <p className="flex items-start gap-3"><Phone className="h-5 w-5 text-amber-900 mt-0.5" /> +7 (900) 000-00-00</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-amber-900 hover:shadow-sm hover:border-amber-300 transition"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a
                href="https://wa.me/79990000000" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition"
              >
                Заказать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitContact;
