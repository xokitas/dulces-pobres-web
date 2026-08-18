"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-beige/40 px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-sm rounded-sm bg-white p-4 pb-16 shadow-suave"
        >
          {/* Nota adhesiva decorativa */}
          <div className="absolute -top-3 left-10 h-6 w-16 -rotate-6 bg-rosa-suave shadow-sm" />

          {/* 2. Foto REAL reemplazando al div placeholder */}
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-xs">
            <Image
              src="/images/story.jpg" // Ruta desde la carpeta /public
              alt="Foto real de la repostera trabajando"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </div>

          {/* Corazón dibujado, estilo doodle */}
          <div className="absolute -bottom-4 -right-4 flex h-14 w-14 rotate-12 items-center justify-center rounded-full bg-white shadow-suave">
            <Heart className="h-6 w-6 fill-rosa-fuerte text-rosa-fuerte" />
          </div>
        </motion.div>

        {/* Texto */}
        <div className="max-w-lg">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0}
            className="font-display text-lg italic text-rosa-fuerte"
          >
            Nuestra historia
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0.1}
            className="mt-2 font-display text-3xl leading-tight text-cacao sm:text-4xl"
          >
            Más que dulces, hacemos momentos
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0.2}
            className="mt-6 leading-relaxed text-cacao/70"
          >
            Todo comenzó en nuestra pequeña cocina, con recetas de familia y
            muchas ganas de compartir lo que más nos apasiona: endulzar la
            vida de los demás.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0.3}
            className="mt-4 leading-relaxed text-cacao/70"
          >
            Cada pedido es preparado a mano, con ingredientes reales y mucho
            amor.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0.4}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-rosa-suave px-6 py-3"
          >
            <Heart className="h-4 w-4 shrink-0 fill-rosa-fuerte text-rosa-fuerte" />
            <span className="font-body text-sm font-medium text-cacao">
              Hecho con cariño para ti.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}