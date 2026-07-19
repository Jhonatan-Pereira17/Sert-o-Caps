"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";
import type { Hero as HeroType } from "@/types";

export default function Hero({ hero }: { hero?: HeroType }) {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-couro-950"
    >
      <div className="absolute inset-0">
        {hero?.midia ? (
          <Image
            src={urlForImage(hero.midia).width(1920).height(1200).url()}
            alt={hero?.titulo || "Sertão Caps"}
            fill
            priority
            className="object-cover opacity-70"
          />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-couro-800 via-couro-950 to-black" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-couro-950 via-couro-950/60 to-couro-950/20" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl leading-tight text-osso sm:text-6xl lg:text-7xl"
        >
          {hero?.titulo || "Bonés forjados com a força do sertão."}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-areia-200/90"
        >
          {hero?.subtitulo ||
            "Bordado premium e produção própria para transformar a identidade da sua marca."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
        <a  
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-ferrugem px-7 py-4 text-sm font-semibold text-osso"
        >
            {hero?.textoBotaoPrimario || "Solicitar orçamento"}
            <ArrowRight size={16} />
          </a>
        <a  
            href="#catalogo"
            className="inline-flex items-center gap-2 rounded-full border border-osso/30 px-7 py-4 text-sm font-semibold text-osso"
        >
            {hero?.textoBotaoSecundario || "Ver catálogo"}
        </a>
        </motion.div>
      </div>
    </section>
  );
}