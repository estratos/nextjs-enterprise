'use client';

import Link from 'next/link';
import ServiceItem from './ServiceItem';
import { Service } from '../../../types/strapi';

interface ServicesClientProps {
  services: Service[];
}

// Helper para manejar valores null
const getServiceFields = (service: Service) => {
  return {
    title: service.Titulo || 'Servicio sin título',
    description: service.description || 'Descripción no disponible',
    features: service.features || [],
    technologies: service.technologies || [],
    slug: service.slug || `service-${service.id}`,
    image: service.imagen || service.image
  };
};

export default function ServicesClient({ services }: ServicesClientProps) {
  console.log('📋 ServicesClient received:', services);
  
  if (!services || !Array.isArray(services) || services.length === 0) {
    return (
      <div className="pt-16">
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios No Disponibles</h1>
            <p className="text-xl">Estamos actualizando nuestros servicios. Vuelve pronto.</p>
          </div>
        </section>
      </div>
    );
  }

  // Filtrar servicios válidos
  const validServices = services.filter(service => 
    service.Titulo && service.slug
  );

  console.log('✅ Valid services:', validServices);

  if (validServices.length === 0) {
    return (
      <div className="pt-16">
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Datos de Servicios Inválidos</h1>
            <p className="text-xl">
              Estructura de datos no reconocida. Por favor, contacte al administrador.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl">
            Soluciones tecnológicas completas diseñadas para impulsar el crecimiento 
            y la eficiencia de su negocio.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {validServices.map((service, index) => (
              <ServiceItem 
                key={service.id} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Necesita una solución personalizada?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctenos para discutir cómo podemos adaptar nuestros servicios a sus necesidades específicas.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Solicitar Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}