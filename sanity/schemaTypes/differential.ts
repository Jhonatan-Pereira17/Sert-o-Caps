import { defineField, defineType } from "sanity";

export default defineType({
  name: "differential",
  title: "Diferencial",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "icone",
      title: "Ícone",
      type: "string",
      options: {
        list: [
          { title: "Prêmio (bordado premium)", value: "Award" },
          { title: "Impressora (impressão)", value: "Printer" },
          { title: "Caminhão (entrega)", value: "Truck" },
          { title: "Fones (atendimento)", value: "Headphones" },
          { title: "Fábrica (produção própria)", value: "Factory" },
          { title: "Escudo (garantia)", value: "ShieldCheck" },
        ],
      },
    }),
  ],
});