import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({ name: "nomeEmpresa", title: "Nome da empresa", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp (com DDI, ex: 5583999999999)", type: "string" }),
    defineField({ name: "email", title: "E-mail de contato", type: "string" }),
  ],
});