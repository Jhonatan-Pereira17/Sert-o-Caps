"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";
import ScrollReveal from "./ScrollReveal";
import type { GalleryImage } from "@/types";

export default function Gallery({ imagens }: { imagens: GalleryImage[] }) {
  const [ativa, setAtiva] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-28">
      <ScrollReveal className="mb-14 max-w-xl">
        <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
          Galeria
        </span>
        <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
          Cada boné, um retrato de marca.
        </h2>
      </ScrollReveal>

      <div className="columns-2 gap-4 sm:columns-3">
        {imagens.map((img) => (
          <button
            key={img._id}
            onClick={() => setAtiva(img)}
            className="mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
          >
            <Image
              src={urlForImage(img.imagem).width(600).height(750).url()}
              alt={img.legenda || "Sertão Caps"}
              width={600}
              height={750}
              className="w-full object-cover"
            />
          </button>
        ))}
      </div>

      {ativa && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-couro-950/90 p-6"
          onClick={() => setAtiva(null)}
        >
          <button
            className="absolute right-6 top-6 text-osso"
            onClick={() => setAtiva(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <Image
            src={urlForImage(ativa.imagem).width(1200).height(1500).url()}
            alt={ativa.legenda || "Sertão Caps"}
            width={800}
            height={1000}
            className="max-h-[85vh] w-auto rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}