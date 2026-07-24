"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Faq } from "@/types";

export default function FAQ({ items }: { items: Faq[] }) {
  const [aberta, setAberta] = useState<string | null>(null);

  if (items.length === 0) return null;

  return (
    <section id="faq" className="bg-areia-50 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal className="mb-14 text-center">
          <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
            Perguntas que sempre chegam.
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-couro-200 border-y border-couro-200">
          {items.map((item) => {
            const estaAberta = aberta === item._id;
            return (
              <div key={item._id}>
                <button
                  onClick={() => setAberta(estaAberta ? null : item._id)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-lg text-couro-950">{item.pergunta}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-ferrugem transition-transform duration-300 ${
                      estaAberta ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {estaAberta && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-couro-700/90">{item.resposta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}