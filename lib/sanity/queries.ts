import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  nomeEmpresa, whatsapp, email
}`;

export const heroQuery = groq`*[_type == "hero"][0]{
  titulo, subtitulo, midia, textoBotaoPrimario, textoBotaoSecundario
}`;