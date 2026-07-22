import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Categoria de Boné",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nome" },
      validation: (regra) => regra.required(),
    }),
  ],
});