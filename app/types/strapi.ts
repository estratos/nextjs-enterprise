export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  attributes: {
    url: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: Record<string, unknown>;
  };
}

// Interface para Services (existente)
export interface Service {
  id: number;
  documentId: string;
  Titulo: string;
  slug: string;
  description: string;
  features: string[] | null;
  technologies: string[] | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  imagen?: { data: StrapiImage | null };
  image?: { data: StrapiImage | null };
}

// Nueva interface para Posts
export interface Post {
  id: number;
  documentId: string;
  Titulo: string;
  slug: string;
  descripcion?: string;
  description?: string;
  contenido?: string;
  content?: string;
  excerpt?: string;
  fecha?: string;
  date?: string;
  autor?: string;
  author?: string;
  categoria?: string;
  category?: string;
  etiquetas?: string[];
  tags?: string[];
  imagen_portada?: { data: StrapiImage | null };
  cover_image?: { data: StrapiImage | null };
  imagen?: { data: StrapiImage | null };
  image?: { data: StrapiImage | null };
  publicado?: boolean;
  published?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// Interface para Solutions
export interface Solution {
  id: number;
  documentId: string;
  Titulo: string;
  slug: string;
  descripcion_corta?: string;
  short_description?: string;
  descripcion_larga?: string;
  long_description?: string;
  descripcion?: string;
  description?: string;
  caracteristicas?: string[];
  features?: string[];
  beneficios?: string[];
  benefits?: string[];
  casos_uso?: string[];
  use_cases?: string[];
  tecnologias?: string[];
  technologies?: string[];
  industria?: string;
  industry?: string;
  categoria?: string;
  category?: string;
  precio_tipo?: string;
  pricing_type?: string;
  precio?: number;
  price?: number;
  demo_url?: string;
  documentacion_url?: string;
  documentation_url?: string;
  orden?: number;
  order?: number;
  destacado?: boolean;
  featured?: boolean;
  activo?: boolean;
  active?: boolean;
  imagen_portada?: { data: StrapiImage | null };
  cover_image?: { data: StrapiImage | null };
  icono?: { data: StrapiImage | null };
  icon?: { data: StrapiImage | null };
  screenshots?: { data: StrapiImage[] };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}