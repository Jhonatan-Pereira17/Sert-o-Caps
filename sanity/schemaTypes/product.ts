import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Produto (Catálogo)",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "descricao",
      title: "Descrição curta",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "imagem",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (regra) => regra.required(),
    }),
  ],
});