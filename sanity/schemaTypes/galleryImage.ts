import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Imagem da Galeria",
  type: "document",
  fields: [
    defineField({
      name: "imagem",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (regra) => regra.required(),
    }),
    defineField({ name: "legenda", title: "Legenda (opcional)", type: "string" }),
  ],
});