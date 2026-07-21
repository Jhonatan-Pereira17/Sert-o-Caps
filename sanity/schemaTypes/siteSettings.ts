import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({ name: "nomeEmpresa", title: "Nome da empresa", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp (com DDI, ex: 5583999999999)", type: "string" }),
    defineField({ name: "email", title: "E-mail de contato", type: "string" }),
    defineField({
      name: "indicadores",
      title: "Indicadores (ex: +15 anos)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "numero", title: "Número", type: "string" },
            { name: "legenda", title: "Legenda", type: "string" },
          ],
        },
      ],
    }),
  ],
});