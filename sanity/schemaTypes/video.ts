import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Vídeo Institucional",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string" }),
    defineField({
      name: "capa",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoUrl",
      title: "Link do vídeo (YouTube ou .mp4 já hospedado)",
      type: "url",
      description: "Preencha ESTE campo OU o campo 'Arquivo de vídeo' abaixo — não precisa dos dois.",
    }),
    defineField({
      name: "arquivo",
      title: "Arquivo de vídeo (upload direto)",
      type: "file",
      options: { accept: "video/*" },
      description: "Use este campo se preferir subir o vídeo direto, em vez de colar um link.",
    }),
  ],
});