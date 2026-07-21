import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "Sobre a Empresa",
  type: "document",
  fields: [
    defineField({ name: "texto", title: "Texto de apresentação", type: "text", rows: 5 }),
    defineField({
      name: "fotos",
      title: "Fotos da fábrica",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});