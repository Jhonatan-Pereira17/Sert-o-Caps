import type { Image } from "sanity";

export interface SiteSettings {
  nomeEmpresa?: string;
  whatsapp?: string;
  email?: string;
  indicadores?: { numero: string; legenda: string }[];
}

export interface Hero {
  titulo?: string;
  subtitulo?: string;
  midia?: Image;
  textoBotaoPrimario?: string;
  textoBotaoSecundario?: string;
}

export interface About {
  texto?: string;
  fotos?: Image[];
}

export interface Category {
  _id: string;
  nome: string;
  slug: string;
}

export interface Product {
  _id: string;
  nome: string;
  descricao?: string;
  imagem: Image;
  categoria?: { nome: string; slug: string };
}

export interface ProcessStep {
  _id: string;
  numero: number;
  titulo?: string;
  descricao?: string;
  icone?: string;
}

export interface GalleryImage {
  _id: string;
  imagem: Image;
  legenda?: string;
}

export interface Differential {
  _id: string;
  titulo: string;
  icone?: string;
}

export interface Video {
  _id: string;
  titulo?: string;
  capa?: Image;
  videoUrl?: string;
  arquivoUrl?: string;
}

export interface Testimonial {
  _id: string;
  nomeCliente: string;
  empresa?: string;
  foto?: Image;
  texto?: string;
  nota?: number;
}

export interface Faq {
  _id: string;
  pergunta: string;
  resposta?: string;
}