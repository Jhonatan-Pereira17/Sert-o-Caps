import type { Image } from "sanity";

export interface SiteSettings {
  nomeEmpresa?: string;
  whatsapp?: string;
  email?: string;
}

export interface Hero {
  titulo?: string;
  subtitulo?: string;
  midia?: Image;
  textoBotaoPrimario?: string;
  textoBotaoSecundario?: string;
}