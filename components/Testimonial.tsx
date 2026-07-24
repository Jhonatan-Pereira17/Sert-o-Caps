"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";
import ScrollReveal from "./ScrollReveal";
import type { Testimonial } from "@/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  if (items.length === 0) return null;

  const atual = items[index];

  function proximo() {
    setIndex((i) => (i + 1) % items.length);
  }

  function anterior() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  return (
    <section id="depoimentos" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <ScrollReveal>
        <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
          Depoimentos
        </span>
        <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
          Quem já vestiu, confirma.
        </h2>
      </ScrollReveal>

      <div className="relative mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={atual._id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            {atual.foto && (
              <Image
                src={urlForImage(atual.foto).width(96).height(96).url()}
                alt={atual.nomeCliente}
                width={72}
                height={72}
                className="mx-auto rounded-full object-cover"
              />
            )}

            <div className="mt-5 flex justify-center gap-1 text-ferrugem">
              {Array.from({ length: atual.nota || 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug text-couro-950">
              “{atual.texto}”
            </p>

            <p className="mt-5 font-stamp text-xs uppercase tracking-widest text-couro-600">
              {atual.nomeCliente}
              {atual.empresa ? ` — ${atual.empresa}` : ""}
            </p>
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={anterior}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-couro-200 text-couro-800"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-ferrugem" : "w-1.5 bg-couro-200"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={proximo}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-couro-200 text-couro-800"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}