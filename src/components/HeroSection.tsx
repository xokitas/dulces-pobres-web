"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Heart, PlayCircle } from "lucide-react";
import { EASE_OUT, fadeUp } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden lg:grid lg:grid-cols-2">
      {/* Imagen — fondo a pantalla completa en móvil; columna propia en desktop */}
      <div className="absolute inset-0 lg:relative lg:order-2 lg:h-svh lg:w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
          className="grain absolute inset-0 h-full w-full"
        >
          <Image
            src="/images/hero-manos.png"
            alt="Manos preparando un dulce artesanal"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-b from-negro/55 via-negro/15 via-45% to-negro/85 lg:bg-linear-to-r lg:from-negro/10 lg:via-transparent lg:to-transparent" />
      </div>

      {/* Contenido — h1 sube en móvil para dejar protagonismo al dulce; p+CTA quedan abajo */}
      <div className="relative z-10 flex h-svh flex-col px-6 py-8 sm:px-10 lg:order-1 lg:h-auto lg:justify-center lg:px-16 lg:py-12 xl:px-24">
        {/* Logo */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
          <span className="font-display text-3xl leading-none text-harina [text-shadow:_0_2px_10px_rgb(0_0_0_/_45%)] sm:text-4xl lg:text-cacao lg:[text-shadow:none]">
            Dulces{" "}
            <span className="italic text-rosa-fuerte">de Pobre</span>{" "}
            <Heart className="ml-1 inline h-5 w-5 -translate-y-1 fill-rosa-fuerte text-rosa-fuerte" />
          </span>
        </motion.div>

        {/* Titular — separado del bloque inferior a propósito. En móvil sube (mt-10),
            en desktop vuelve a su posición original (lg:mt-8, mismo espacio que antes daba el gap-8) */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.15}
          className="mt-10 max-w-xl font-display text-4xl leading-[1.1] text-harina [text-shadow:_0_2px_14px_rgb(0_0_0_/_50%)] sm:mt-12 sm:text-5xl lg:mt-8 lg:text-6xl lg:text-cacao lg:[text-shadow:none]"
        >
          Hacemos dulces con las manos, para que te los comas con el{" "}
          <span className="italic text-rosa-fuerte">corazón</span>.
        </motion.h1>

        {/* Subtítulo + CTAs — ancladas abajo en móvil (mt-auto), junto al h1 en desktop (lg:mt-6) */}
        <div className="mt-auto max-w-xl lg:mt-6">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.3}
            className="max-w-md text-base leading-relaxed text-harina/90 [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)] sm:text-lg lg:text-cacao/70 lg:[text-shadow:none]"
          >
            Dulces artesanales hechos con cariño, ingredientes seleccionados
            y ese toque casero que se recuerda.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.45}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            
              <a href="#catalogo"
              className="group inline-flex items-center gap-2 rounded-full bg-rosa px-8 py-4 font-body text-sm font-medium text-cacao shadow-lg transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Heart className="h-4 w-4 fill-cacao/80" />
              Lo quiero
            </a>

            
              <a href="#proceso"
              className="inline-flex items-center gap-2 rounded-full border border-harina/40 px-8 py-4 font-body text-sm font-medium text-harina/90 transition-colors duration-300 hover:border-harina hover:text-harina lg:border-cacao/15 lg:text-cacao/80 lg:hover:border-cacao/30 lg:hover:text-cacao"
            >
              <PlayCircle className="h-4 w-4" />
              Ver cómo se hace
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#historia"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden items-center gap-2 self-start text-xs uppercase tracking-[0.2em] text-cacao/50 lg:mt-6 lg:flex"
        >
          Desliza para descubrir
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}