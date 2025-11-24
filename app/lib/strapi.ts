import { Service, Post, Solution, StrapiResponse } from '../types/strapi';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// ========== SERVICIOS ==========
export async function getServices(): Promise<Service[]> {
  try {
    console.log('🔍 Fetching services from:', `${API_URL}/api/services`);
    
    const res = await fetch(`${API_URL}/api/services?populate=*&sort=order:asc`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      next: { 
        revalidate: 60
      }
    });
    
    console.log('📊 Services response status:', res.status);
    
    if (!res.ok) {
      console.warn('❌ Services API error, using static data');
      return getStaticServices();
    }
    
    const response: StrapiResponse<Service[]> = await res.json();
    return response.data;
  } catch (error) {
    console.error('🚨 Error fetching services:', error);
    return getStaticServices();
  }
}

// ========== POSTS ==========
export async function getPosts(options: {
  page?: number;
  pageSize?: number;
  category?: string;
  sort?: string;
} = {}): Promise<Post[]> {
  try {
    const { page = 1, pageSize = 10, category, sort = 'createdAt:desc' } = options;
    
    let url = `${API_URL}/api/posts?populate=*&sort=${sort}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    
    if (category) {
      url += `&filters[categoria][$eq]=${category}`;
    }
    
    console.log('📝 Fetching posts from:', url);
    
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      next: { 
        revalidate: 60
      }
    });
    
    console.log('📊 Posts response status:', res.status);
    
    if (!res.ok) {
      console.warn('❌ Posts API error, using static data');
      return getStaticPosts();
    }
    
    const response: StrapiResponse<Post[]> = await res.json();
    return response.data;
  } catch (error) {
    console.error('🚨 Error fetching posts:', error);
    return getStaticPosts();
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    console.log('📖 Fetching post by slug:', slug);
    
    const res = await fetch(`${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      next: { 
        revalidate: 60
      }
    });
    
    if (!res.ok) {
      console.warn('❌ Post API error');
      return getStaticPostBySlug(slug);
    }
    
    const response: StrapiResponse<Post[]> = await res.json();
    return response.data[0] || null;
  } catch (error) {
    console.error('🚨 Error fetching post:', error);
    return getStaticPostBySlug(slug);
  }
}

export async function getPostCategories(): Promise<string[]> {
  try {
    const posts = await getPosts({ pageSize: 100 });
    const categories = posts
      .map(post => post.categoria || post.category)
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index) as string[];
    
    return categories;
  } catch (error) {
    console.error('🚨 Error fetching categories:', error);
    return ['Tecnología', 'Desarrollo', 'Negocios'];
  }
}

// ========== SOLUTIONS ==========
export async function getSolutions(options: {
  page?: number;
  pageSize?: number;
  category?: string;
  industry?: string;
  featured?: boolean;
  sort?: string;
} = {}): Promise<Solution[]> {
  try {
    const { 
      page = 1, 
      pageSize = 12, 
      category, 
      industry, 
      featured,
      sort = 'orden:asc,createdAt:desc' 
    } = options;
    
    let url = `${API_URL}/api/solutions?populate=*&sort=${sort}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    
    if (category) {
      url += `&filters[categoria][$eq]=${category}`;
    }
    if (industry) {
      url += `&filters[industria][$eq]=${industry}`;
    }
    if (featured !== undefined) {
      url += `&filters[destacado][$eq]=${featured}`;
    }
    
    console.log('🚀 Fetching solutions from:', url);
    
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      next: { 
        revalidate: 60
      }
    });
    
    console.log('📊 Solutions response status:', res.status);
    
    if (!res.ok) {
      console.warn('❌ Solutions API error, using static data');
      return getStaticSolutions();
    }
    
    const response: StrapiResponse<Solution[]> = await res.json();
    return response.data;
  } catch (error) {
    console.error('🚨 Error fetching solutions:', error);
    return getStaticSolutions();
  }
}

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  try {
    console.log('🔎 Fetching solution by slug:', slug);
    
    const res = await fetch(`${API_URL}/api/solutions?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      next: { 
        revalidate: 60
      }
    });
    
    if (!res.ok) {
      console.warn('❌ Solution API error');
      return getStaticSolutionBySlug(slug);
    }
    
    const response: StrapiResponse<Solution[]> = await res.json();
    return response.data[0] || null;
  } catch (error) {
    console.error('🚨 Error fetching solution:', error);
    return getStaticSolutionBySlug(slug);
  }
}

export async function getSolutionCategories(): Promise<string[]> {
  try {
    const solutions = await getSolutions({ pageSize: 100 });
    const categories = solutions
      .map(solution => solution.categoria || solution.category)
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index) as string[];
    
    return categories;
  } catch (error) {
    console.error('🚨 Error fetching solution categories:', error);
    return ['SaaS', 'E-commerce', 'ERP', 'CRM', 'Analytics'];
  }
}

export async function getSolutionIndustries(): Promise<string[]> {
  try {
    const solutions = await getSolutions({ pageSize: 100 });
    const industries = solutions
      .map(solution => solution.industria || solution.industry)
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index) as string[];
    
    return industries;
  } catch (error) {
    console.error('🚨 Error fetching solution industries:', error);
    return ['Retail', 'Fintech', 'Healthcare', 'Education', 'Manufacturing'];
  }
}

export async function getFeaturedSolutions(): Promise<Solution[]> {
  return getSolutions({ featured: true, pageSize: 6 });
}

// ========== DATOS ESTÁTICOS PARA SOLUTIONS ==========
function getStaticSolutions(): Solution[] {
  console.log('🔄 Using static solutions data');
  return [
    {
      id: 1,
      documentId: 'solution-1',
      Titulo: 'Plataforma E-commerce Empresarial',
      slug: 'plataforma-ecommerce-empresarial',
      descripcion_corta: 'Solución completa de e-commerce para empresas con integración multi-canal.',
      descripcion_larga: 'Plataforma escalable de e-commerce diseñada para empresas que buscan expandir su presencia digital con integraciones multi-canal, gestión de inventario avanzada y analytics en tiempo real.',
      caracteristicas: [
        'Catálogo de productos ilimitado',
        'Integración multi-canal',
        'Gestión de inventario en tiempo real',
        'Analytics avanzado',
        'Checkout optimizado'
      ],
      beneficios: [
        'Aumento de conversiones en 40%',
        'Reducción de costos operativos',
        'Escalabilidad garantizada',
        'Soporte 24/7'
      ],
      casos_uso: ['Retail online', 'Marketplaces', 'Venta B2B'],
      tecnologias: ['React', 'Node.js', 'MongoDB', 'AWS'],
      industria: 'Retail',
      categoria: 'E-commerce',
      precio_tipo: 'empresa',
      demo_url: 'https://demo.ecommerce.example.com',
      documentacion_url: 'https://docs.ecommerce.example.com',
      orden: 1,
      destacado: true,
      activo: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    },
    {
      id: 2,
      documentId: 'solution-2',
      Titulo: 'Sistema de Gestión ERP Cloud',
      slug: 'sistema-gestion-erp-cloud',
      descripcion_corta: 'ERP en la nube para optimizar procesos empresariales y mejorar la eficiencia operativa.',
      descripcion_larga: 'Sistema integral de planificación de recursos empresariales en la nube que unifica todos los departamentos de tu organización en una sola plataforma.',
      caracteristicas: [
        'Módulos integrados',
        'Reportes personalizados',
        'Workflow automation',
        'Mobile first',
        'API RESTful'
      ],
      beneficios: [
        'Reducción de procesos manuales',
        'Visión 360° del negocio',
        'Toma de decisiones basada en datos',
        'Implementación rápida'
      ],
      casos_uso: ['Manufactura', 'Distribución', 'Servicios'],
      tecnologias: ['Angular', 'Python', 'PostgreSQL', 'Azure'],
      industria: 'Manufacturing',
      categoria: 'ERP',
      precio_tipo: 'pago',
      precio: 299,
      demo_url: 'https://demo.erp.example.com',
      orden: 2,
      destacado: true,
      activo: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    },
    {
      id: 3,
      documentId: 'solution-3',
      Titulo: 'CRM Inteligente para Ventas',
      slug: 'crm-inteligente-ventas',
      descripcion_corta: 'CRM con IA para automatizar y optimizar tu proceso de ventas.',
      descripcion_larga: 'Sistema de gestión de relaciones con clientes potenciado con inteligencia artificial para predecir oportunidades de venta y automatizar seguimientos.',
      caracteristicas: [
        'Predictive analytics',
        'Automation de emails',
        'Pipeline visual',
        'Integración con redes sociales',
        'Mobile app'
      ],
      beneficios: [
        'Aumento de leads calificados',
        'Reducción de tiempo en seguimiento',
        'Mejora en tasa de cierre',
        'Insights accionables'
      ],
      casos_uso: ['Equipos de ventas', 'Agencias de marketing', 'Startups'],
      tecnologias: ['Vue.js', 'Laravel', 'MySQL', 'Google Cloud'],
      industria: 'Fintech',
      categoria: 'CRM',
      precio_tipo: 'pago',
      precio: 99,
      demo_url: 'https://demo.crm.example.com',
      orden: 3,
      destacado: false,
      activo: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    }
  ];
}

function getStaticSolutionBySlug(slug: string): Solution | null {
  const solutions = getStaticSolutions();
  return solutions.find(solution => solution.slug === slug) || null;
}

// ========== DATOS ESTÁTICOS PARA POSTS ==========
function getStaticPosts(): Post[] {
  console.log('🔄 Using static posts data');
  return [
    {
      id: 1,
      documentId: 'post-1',
      Titulo: 'Introducción a Next.js 14',
      slug: 'introduccion-nextjs-14',
      descripcion: 'Aprende las nuevas características de Next.js 14 y cómo mejorar el rendimiento de tu aplicación.',
      contenido: 'Contenido completo del post sobre Next.js 14...',
      excerpt: 'Descubre las mejoras de rendimiento en Next.js 14',
      fecha: '2024-01-15',
      autor: 'Juan Pérez',
      categoria: 'Tecnología',
      etiquetas: ['Next.js', 'React', 'JavaScript'],
      publicado: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    },
    {
      id: 2,
      documentId: 'post-2', 
      Titulo: 'Mejores Prácticas en Desarrollo Web',
      slug: 'mejores-practicas-desarrollo-web',
      descripcion: 'Consejos y mejores prácticas para desarrollar aplicaciones web modernas y escalables.',
      contenido: 'Contenido completo sobre mejores prácticas...',
      excerpt: 'Guía completa de mejores prácticas en desarrollo web',
      fecha: '2024-01-10',
      autor: 'María García',
      categoria: 'Desarrollo',
      etiquetas: ['Desarrollo', 'Web', 'Prácticas'],
      publicado: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    },
    {
      id: 3,
      documentId: 'post-3',
      Titulo: 'Transformación Digital para Empresas',
      slug: 'transformacion-digital-empresas',
      descripcion: 'Cómo las empresas pueden adaptarse a la era digital y aprovechar las nuevas tecnologías.',
      contenido: 'Contenido completo sobre transformación digital...',
      excerpt: 'Estrategias para la transformación digital empresarial',
      fecha: '2024-01-05',
      autor: 'Carlos Rodríguez',
      categoria: 'Negocios',
      etiquetas: ['Digital', 'Empresas', 'Transformación'],
      publicado: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    }
  ];
}

function getStaticPostBySlug(slug: string): Post | null {
  const posts = getStaticPosts();
  return posts.find(post => post.slug === slug) || null;
}

// ========== DATOS ESTÁTICOS PARA SERVICIOS ==========
function getStaticServices(): Service[] {
  console.log('🔄 Using static services data');
  return [
    {
      id: 1,
      documentId: 'static-1',
      Titulo: 'Desarrollo de Software a Medida',
      slug: 'desarrollo',
      description: 'Creamos aplicaciones web y móviles escalables usando las últimas tecnologías.',
      features: [
        'Aplicaciones Web Progresivas (PWA)',
        'Apps Móviles nativas e híbridas',
        'Sistemas empresariales (ERP, CRM)'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python'],
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    },
    {
      id: 2,
      documentId: 'static-2', 
      Titulo: 'Cloud & DevOps',
      slug: 'cloud',
      description: 'Infraestructura cloud escalable y procesos de desarrollo optimizados.',
      features: [
        'Migración a la nube',
        'Arquitecturas serverless', 
        'CI/CD pipelines'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      order: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'es-MX'
    }
  ];
}