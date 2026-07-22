import { Lightbulb, PenTool, CheckCircle2, Factory, ShieldCheck, Truck, Package, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { ProcessStep } from "@/types";

const ICONES: Record<string, LucideIcon> = {
  Lightbulb,
  PenTool,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Truck,
};

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="processo" className="mx-auto max-w-7xl px-6 py-28">
      <ScrollReveal className="mb-16 max-w-2xl">
        <span className="font-stamp text-[11px] uppercase tracking-widest text-ferrugem">
          Do rascunho à entrega
        </span>
        <h2 className="mt-4 font-display text-4xl text-couro-950 sm:text-5xl">
          Um processo com a mesma firmeza do produto final.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
        {steps.map((step) => {
          const Icone = (step.icone && ICONES[step.icone]) || Package;
          return (
            <ScrollReveal key={step._id}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-couro-800 text-couro-800">
                <Icone size={24} />
              </div>
              <span className="mt-4 block font-stamp text-xs text-ferrugem">
                {String(step.numero).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-lg text-couro-950">{step.titulo}</h3>
              {step.descricao && (
                <p className="mt-2 text-sm text-couro-700/90">{step.descricao}</p>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}