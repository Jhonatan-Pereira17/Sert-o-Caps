"use client";

import { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import ScrollReveal from "./ScrollReveal";
import type { Category, Product } from "@/types";

export default function Catalog({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const [ativa, setAtiva] = useState("todas");

  const filtrados =
    ativa === "todas"
      ? products
      : products.filter((p) => p.categoria?.slug === ativa);

  return (
    <section id="catalogo" className="bg-areia-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-14">
          <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
            Catálogo
          </span>
          <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
            Um modelo pra cada propósito.
          </h2>
        </ScrollReveal>

        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setAtiva("todas")}
            className={`rounded-full px-4 py-2 text-xs font-stamp uppercase tracking-wider ${
              ativa === "todas" ? "bg-couro-950 text-osso" : "bg-osso text-couro-700"
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setAtiva(cat.slug)}
              className={`rounded-full px-4 py-2 text-xs font-stamp uppercase tracking-wider ${
                ativa === cat.slug ? "bg-couro-950 text-osso" : "bg-osso text-couro-700"
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((produto) => (
            <ScrollReveal key={produto._id}>
              <article className="overflow-hidden rounded-3xl bg-osso shadow-couro">
                <div className="relative aspect-4/5">
                  <Image
                    src={urlForImage(produto.imagem).width(700).height(875).url()}
                    alt={produto.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  {produto.categoria && (
                    <span className="font-stamp text-[10px] uppercase tracking-widest text-ferrugem">
                      {produto.categoria.nome}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-xl text-couro-950">
                    {produto.nome}
                  </h3>
                  {produto.descricao && (
                    <p className="mt-2 text-sm text-couro-700/90">{produto.descricao}</p>
                  )}
                  <a
                    href="#contato"
                    className="mt-4 inline-block text-sm font-semibold text-ferrugem"
                  >
                    Solicitar orçamento →
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}