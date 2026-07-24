import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Pergunta Frequente",
  type: "document",
  fields: [
    defineField({
      name: "pergunta",
      title: "Pergunta",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "resposta", title: "Resposta", type: "text", rows: 3 }),
    defineField({
      name: "ordem",
      title: "Ordem de exibição",
      type: "number",
      description: "Números menores aparecem primeiro (ex: 1, 2, 3...)",
    }),
  ],
});