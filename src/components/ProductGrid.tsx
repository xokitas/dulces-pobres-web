"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, CATEGORIES } from "@/lib/products";
import { fadeUp } from "@/lib/motion";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
<section id="catalogo" className="bg-harina px-6 py-24 sm:px-10 lg:px-16 xl:px-24">      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-center font-display text-3xl text-cacao sm:text-4xl"
        >
          Lo que salió del horno hoy
        </motion.h2>

        <div className="mt-10">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={index * 0.08}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}