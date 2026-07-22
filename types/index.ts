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