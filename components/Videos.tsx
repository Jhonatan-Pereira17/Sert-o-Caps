"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";
import ScrollReveal from "./ScrollReveal";
import type { Video } from "@/types";

export default function Videos({ videos }: { videos: Video[] }) {
  const [ativo, setAtivo] = useState<Video | null>(null);

  function ehYoutube(url: string) {
    return url.includes("youtube.com") || url.includes("youtu.be");
  }

  function paraEmbedYoutube(url: string) {
    return url.replace("watch?v=", "embed/");
  }

  return (
    <section id="videos" className="bg-areia-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-14 max-w-xl">
          <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
            Bastidores
          </span>
          <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
            Veja a fábrica em movimento.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <ScrollReveal key={v._id}>
            <button
                onClick={() => setAtivo(v)}
                className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-couro-800"
            >
                {v.capa && (
                    <Image
                        src={urlForImage(v.capa).width(700).height(394).url()}
                        alt={v.titulo || "Vídeo"}
                        fill
                        className="object-cover"
                    />
             )}
  <div className="absolute inset-0 bg-couro-950/40" />
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ferrugem text-osso">
      <Play size={22} fill="currentColor" />
    </span>
  </div>
</button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {ativo && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-couro-950/95 p-6"
          onClick={() => setAtivo(null)}
        >
          <button
            className="absolute right-6 top-6 text-osso"
            onClick={() => setAtivo(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {ativo.videoUrl && ehYoutube(ativo.videoUrl) ? (
                <iframe
                    src={paraEmbedYoutube(ativo.videoUrl)}
                    className="h-full w-full rounded-2xl"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            ) : (
                <video
                    src={ativo.videoUrl || ativo.arquivoUrl}
                    controls
                    autoPlay
                     className="h-full w-full rounded-2xl"
                />
                )}
          </div>
        </div>
      )}
    </section>
  );
}