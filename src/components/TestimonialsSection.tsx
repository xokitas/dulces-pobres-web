"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#120E0B] px-6 py-24 sm:px-10 lg:px-16 xl:px-24">            
        <div className="mx-auto max-w-6xl">
            <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-center font-display text-3xl text-harina sm:text-4xl"
            >
            Lo que dicen de nosotros
            </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={index * 0.1}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}