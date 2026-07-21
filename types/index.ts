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