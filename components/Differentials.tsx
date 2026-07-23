import { Award, Printer, Truck, Headphones, Factory, ShieldCheck, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Differential } from "@/types";

const ICONES: Record<string, LucideIcon> = {
  Award,
  Printer,
  Truck,
  Headphones,
  Factory,
  ShieldCheck,
};

export default function Differentials({ items }: { items: Differential[] }) {
  return (
    <section className="bg-couro-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-14 max-w-xl">
          <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem-light">
            Por que Sertão Caps
          </span>
          <h2 className="mt-4 font-display text-4xl text-osso sm:text-5xl">
            Qualidade que se sente na mão.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icone = (item.icone && ICONES[item.icone]) || ShieldCheck;
            return (
              <ScrollReveal key={item._id}>
                <div className="flex items-center gap-4 rounded-2xl border border-osso/10 bg-osso/5 p-6">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ferrugem/15 text-ferrugem-light">
                    <Icone size={20} />
                  </div>
                  <span className="font-display text-lg text-osso">{item.titulo}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}