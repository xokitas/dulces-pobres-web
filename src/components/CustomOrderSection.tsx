"use client";

import Image from "next/image"; // 1. Importar Image
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const MENSAJE_ENCARGO =
  "¡Hola! Tengo una idea para un encargo especial y me gustaría conversarlo con ustedes.";

// 2. Definir las rutas de tus fotos reales aquí (guardadas en /public)
const EJEMPLOS = [
  {
    id: "dos-pisos",
    label: "Cake de dos pisos",
    rotate: "-rotate-2",
    src: "/images/dos cakes.jpg", // Cambia por tu ruta real
  },
  {
    id: "floral",
    label: "Diseño floral",
    rotate: "rotate-2",
    src: "/images/un cake.webp", // Cambia por tu ruta real
  },
] as const;

export default function CustomOrderSection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MENSAJE_ENCARGO
  )}`;

  return (
    <section className="bg-beige px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Tarjeta principal, inclinada, desplazada a la izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-md flex-col items-start rounded-organico bg-rosa-suave/60 px-8 py-12 text-left shadow-suave lg:mx-0"
        >
          <h2 className="font-display text-3xl leading-tight text-cacao sm:text-4xl">
            ¿Tienes una idea en mente?
            <br />
            Nosotros te la hacemos realidad.
          </h2>

          <p className="mt-6 leading-relaxed text-cacao/70">
            Cakes de varios pisos, diseños especiales, encargos para
            ocasiones únicas — cuéntanos qué imaginaste y lo conversamos.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cacao px-8 py-4 font-body text-sm font-medium text-harina shadow-suave transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Hacer un encargo
          </a>
        </motion.div>

        {/* Referencias visuales — 2 fotos reales en formato vertical */}
        <div className="grid grid-cols-2 gap-10">
          {EJEMPLOS.map((ejemplo, index) => (
            <motion.div
              key={ejemplo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${ejemplo.rotate} overflow-hidden rounded-organico bg-white p-2 shadow-suave`}
            >
              {/* Contenedor vertical de la foto */}
              <div className="relative aspect-9/16 overflow-hidden rounded-2xl]">
                <Image
                  src={ejemplo.src}
                  alt={ejemplo.label}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}