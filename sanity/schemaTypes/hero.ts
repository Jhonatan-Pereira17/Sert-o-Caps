import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Banner Principal (Hero)",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string" }),
    defineField({ name: "subtitulo", title: "Subtítulo", type: "text", rows: 3 }),
    defineField({
      name: "midia",
      title: "Imagem de fundo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "textoBotaoPrimario",
      title: "Texto do botão principal",
      type: "string",
      initialValue: "Solicitar orçamento",
    }),
    defineField({
      name: "textoBotaoSecundario",
      title: "Texto do botão secundário",
      type: "string",
      initialValue: "Ver catálogo",
    }),
  ],
});