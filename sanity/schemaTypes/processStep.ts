import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Etapa do Processo",
  type: "document",
  fields: [
    defineField({
      name: "numero",
      title: "Número da etapa",
      type: "number",
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "titulo", title: "Título", type: "string" }),
    defineField({ name: "descricao", title: "Descrição", type: "text", rows: 2 }),
    defineField({
      name: "icone",
      title: "Ícone",
      type: "string",
      options: {
        list: [
          { title: "Lâmpada (ideia)", value: "Lightbulb" },
          { title: "Caneta (arte)", value: "PenTool" },
          { title: "Check (aprovação)", value: "CheckCircle2" },
          { title: "Fábrica (produção)", value: "Factory" },
          { title: "Escudo (qualidade)", value: "ShieldCheck" },
          { title: "Caminhão (entrega)", value: "Truck" },
        ],
      },
    }),
  ],
});