import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Depoimento",
  type: "document",
  fields: [
    defineField({
      name: "nomeCliente",
      title: "Nome do cliente",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "empresa", title: "Empresa", type: "string" }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "texto", title: "Depoimento", type: "text", rows: 4 }),
    defineField({
      name: "nota",
      title: "Avaliação (1 a 5 estrelas)",
      type: "number",
      validation: (regra) => regra.min(1).max(5),
      initialValue: 5,
    }),
  ],
});