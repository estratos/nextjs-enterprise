import { getSolutions, getSolutionCategories, getSolutionIndustries } from '../lib/strapi';
import SolutionsClient from '../../components/solutions/SolutionsClient';
import { Metadata } from 'next';

export default async function SolutionsPage() {
  const [solutions, categories, industries] = await Promise.all([
    getSolutions(),
    getSolutionCategories(),
    getSolutionIndustries()
  ]);

  return <SolutionsClient 
    solutions={solutions} 
    categories={categories} 
    industries={industries} 
  />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Soluciones - Plataformas y Software Empresarial',
    description: 'Descubre nuestras soluciones tecnológicas: e-commerce, ERP, CRM y más. Software empresarial diseñado para impulsar tu negocio.',
    keywords: ['soluciones', 'software', 'ecommerce', 'ERP', 'CRM', 'empresas'],
  };
}

export const revalidate = 60;