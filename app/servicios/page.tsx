import { getServices } from '../lib/strapi';
import ServicesClient from '../../components/services/ServicesClient';
import { Metadata } from 'next';

export default async function ServicesPage() {
  const services = await getServices();

  return <ServicesClient services={services} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nuestros Servicios IT - Soluciones Tecnológicas',
    description: 'Desarrollo de software, cloud, data analytics y ciberseguridad. Soluciones IT personalizadas para tu empresa.',
    keywords: ['desarrollo software', 'cloud', 'devops', 'data analytics', 'ciberseguridad'],
    openGraph: {
      title: 'Nuestros Servicios IT',
      description: 'Soluciones tecnológicas completas para tu empresa',
      type: 'website',
    },
  };
}

export const revalidate = 60;