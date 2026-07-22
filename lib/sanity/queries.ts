import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  nomeEmpresa, whatsapp, email
}`;

export const heroQuery = groq`*[_type == "hero"][0]{
  titulo, subtitulo, midia, textoBotaoPrimario, textoBotaoSecundario
}`;

export const aboutQuery = groq`*[_type == "about"][0]{
  texto, fotos
}`;

export const categoriesQuery = groq`*[_type == "category"]{
  _id, nome, "slug": slug.current
}`;

export const productsQuery = groq`*[_type == "product"]{
  _id, nome, descricao, imagem,
  "categoria": categoria->{ nome, "slug": slug.current }
}`;