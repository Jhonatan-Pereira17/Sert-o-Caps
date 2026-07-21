import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import ScrollReveal from "./ScrollReveal";
import type { About as AboutType, SiteSettings } from "@/types";

export default function About({
  about,
  settings,
}: {
  about?: AboutType;
  settings?: SiteSettings;
}) {
  return (
    <section id="empresa" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
            Nossa história
          </span>
          <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
            Tradição de fábrica, olhar de marca.
          </h2>
          <p className="mt-6 text-couro-800/90 leading-relaxed">
            {about?.texto ||
              "Texto de apresentação da empresa cadastrado no Sanity aparecerá aqui."}
          </p>

          {settings?.indicadores && settings.indicadores.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-couro-200 pt-8">
              {settings.indicadores.map((ind) => (
                <div key={ind.legenda}>
                  <span className="block font-display text-3xl text-couro-950">
                    {ind.numero}
                  </span>
                  <span className="font-stamp text-[10px] uppercase tracking-widest text-couro-600">
                    {ind.legenda}
                  </span>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            {about?.fotos?.slice(0, 3).map((foto, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={urlForImage(foto).width(700).height(500).url()}
                  alt="Fábrica Sertão Caps"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}