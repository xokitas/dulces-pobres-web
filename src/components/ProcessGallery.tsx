"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const MOMENTOS = [
  {
    id: "ingredientes",
    titulo: "Ingredientes",
    descripcion: "Seleccionados uno por uno, sin atajos.",
    gradient: "radial-gradient(120% 100% at 50% 20%, #e8d4b8 0%, #b89968 55%, #6b4a34 100%)",
  },
  {
    id: "preparacion",
    titulo: "Preparación",
    descripcion: "Manos que amasan con paciencia.",
    gradient: "radial-gradient(120% 100% at 50% 20%, #d7a88a 0%, #a9704f 55%, #6b4a34 100%)",
  },
  {
    id: "decoracion",
    titulo: "Decoración",
    descripcion: "El detalle final, siempre a mano.",
    gradient: "radial-gradient(120% 100% at 50% 20%, #f0c8d0 0%, #d97c87 55%, #6b4a34 100%)",
  },
  {
    id: "resultado",
    titulo: "Resultado",
    descripcion: "Listo para que lo compartas.",
    gradient: "radial-gradient(120% 100% at 50% 20%, #e8c4a0 0%, #b8794f 55%, #1a1512 100%)",
  },
] as const;

export default function ProcessGallery() {
  return (
    <section
      id="proceso"
      className="px-6 pb-24 pt-32 sm:px-10 lg:px-16 xl:px-24"
      style={{
background: "linear-gradient(to bottom, #F1E7DC 0%, #1A1512 35%)",      }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="font-display text-lg italic text-rosa">Así se hace la magia</p>
        <h2 className="mt-2 font-display text-3xl text-harina sm:text-4xl">
          Detrás de cámara
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MOMENTOS.map((momento, index) => (
          <motion.div
            key={momento.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={index * 0.1}
            className="group overflow-hidden rounded-organico"
          >
            <div
              className="grain h-64 w-full transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ background: momento.gradient }}
              role="img"
              aria-label={`${momento.titulo} (placeholder — reemplazar por foto real)`}
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-lg text-harina">{momento.titulo}</h3>
              <p className="mt-1 text-sm text-harina/60">{momento.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}