"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 relative overflow-hidden">
      {/* FONDO CARICATURA */}
      <div className="absolute inset-0 z-0 opacity-9 animate-[bg-move_90s_linear_infinite] bg-[url('/bg-comida-caricatura.png')] bg-repeat bg-center"></div>
      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5493815551111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.889.521 3.653 1.424 5.17L2 22l4.938-1.388A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-.007 17.934c-1.687 0-3.37-.449-4.834-1.297l-.347-.204-2.93.823.81-3.018-.224-.37C3.933 14.336 3.5 13.184 3.5 12 3.5 7.865 7.365 4 12 4s8.5 3.865 8.5 8.5c0 4.636-3.865 8.5-8.507 8.5h-.007z" />
          <path d="M16.303 13.772c-.267-.133-1.578-.777-1.823-.867-.245-.09-.424-.133-.603.134-.178.267-.69.867-.846 1.045-.156.178-.312.2-.578.067-.267-.134-1.125-.414-2.143-1.32-.792-.705-1.328-1.577-1.482-1.844-.155-.267-.017-.411.116-.544.12-.12.267-.312.4-.467.134-.156.178-.267.267-.445.089-.178.044-.334-.022-.467-.067-.133-.603-1.457-.826-1.994-.217-.521-.437-.45-.603-.459l-.514-.009c-.178 0-.467.067-.711.334-.245.267-.933.911-.933 2.222s.955 2.577 1.088 2.755c.133.178 1.879 2.867 4.558 4.018.637.275 1.134.44 1.52.562.64.203 1.223.175 1.682.106.513-.077 1.578-.644 1.801-1.264.222-.622.222-1.155.156-1.265-.067-.111-.245-.178-.512-.311z" />
        </svg>
      </a>

      {/* HERO */}
      <section className="text-center py-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🔥 ¡Los Mejores Sanguches de Tucumán!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Milanesa, Hamburguesas y Lomitos bien tucumanos. Delivery rápido en San Miguel de Tucumán y alrededores...
        </p>
        <a
          className="inline-block bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded hover:bg-green-700 transition"
          href="https://wa.me/5493815551111"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Pedí por WhatsApp
        </a>
      </section>

      {/* IMÁGENES - CARRUSEL EN MOBILE */}
      <section className="py-8" data-aos="fade-up">
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-64"
          >
            <SwiperSlide>
              <img src="/sanguche1.jpg" alt="Sanguche de milanesa" className="w-full h-64 object-cover rounded-xl shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hamburguesa.jpg" alt="Hamburguesa casera" className="w-full h-64 object-cover rounded-xl shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/lomito.jpg" alt="Lomito completo" className="w-full h-64 object-cover rounded-xl shadow-md" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden md:grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-md">
            <img src="/sanguche1.jpg" alt="Sanguche de milanesa" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-md">
            <img src="/hamburguesa.jpg" alt="Hamburguesa casera" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-md">
            <img src="/lomito.jpg" alt="Lomito completo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-10 bg-gray-100 rounded-xl px-4 md:px-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          ✨ ¿Por qué elegirnos?
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto text-left list-disc list-inside text-lg">
          <li>
            🥪 Milanesas XL, Hamburguesas caseras y Lomitos bien cargados
          </li>
          <li>🍳 Ingredientes frescos, pan artesanal y papas crocantes</li>
          <li>🛵 Delivery en menos de 30 minutos (¡si no llueve!)</li>
          <li>🧾 Menú variado y combos para todos los gustos</li>
          <li>💳 Aceptamos Efectivo, Mercado Pago y QR</li>
        </ul>
      </section>

      {/* MENÚ CON PRECIOS */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          🧾 Nuestro Menú
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span>⭐ Sanguche de Milanesa clásico</span>
            <span>$4500</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>🥓 Lomito completo con cheddar</span>
            <span>$5500</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>🍔 Hamburguesa doble con papas</span>
            <span>$6200</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>🥤 Combo + bebida</span>
            <span>$7500</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          ⭐ Lo que dicen Nuestros Clientes...
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <blockquote className="bg-white p-6 shadow rounded-xl">
            <p className="mb-2">
              “No hay con qué darle. Siempre que pido, llega caliente y completo. ¡Un 10!”
            </p>
            <footer className="text-sm text-gray-500">— Facundo G., Barrio Norte</footer>
          </blockquote>
          <blockquote className="bg-white p-6 shadow rounded-xl">
            <p className="mb-2">
              “Probé el lomito con cheddar y panceta. Estoy esperando el próximo finde para repetir”
            </p>
            <footer className="text-sm text-gray-500">— Ana R., Villa Urquiza</footer>
          </blockquote>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="py-12 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">📬 Contactanos</h2>
        <form className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-4">
          <input type="text" placeholder="Nombre" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
          <textarea placeholder="Mensaje" className="border border-gray-300 p-3 rounded w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500" />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition w-full"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* UBICACIÓN MAPA */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">📍 ¿Dónde estamos?</h2>
        <p className="text-center text-lg mb-4">Marcos Paz 550, San Miguel de Tucumán</p>
        <div className="max-w-4xl mx-auto">
          <iframe
            className="w-full h-72 rounded-xl shadow"
            src="https://www.google.com/maps?q=-26.821358510411045,-65.20307557495505&hl=es&z=17&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA FINAL */}
       <section className="text-center py-12 bg-yellow-50 rounded-xl px-4" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4">
          👋 ¿Esperás qué?
        </h2>
        <p className="text-lg mb-6">
          Hacé tu pedido ahora y disfrutá un sanguche como se debe.
        </p>
        <a
          className="inline-block bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded hover:bg-green-700 transition"
          href="https://wa.me/5493815551111"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Quiero pedir ahora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-12">
        📍 Marcos Paz 550, San Miguel de Tucumán | 🕘 Todos los días de 20:00 a 01:00 | ☎️ 381 555 1111 | IG: @sanguche.argento
      </footer>
    </main>
  );
}
