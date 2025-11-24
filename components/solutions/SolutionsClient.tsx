'use client';

import Link from 'next/link';
import { Solution } from '../../../types/strapi';

interface SolutionsClientProps {
  solutions: Solution[];
  categories: string[];
  industries: string[];
}

export default function SolutionsClient({ solutions, categories, industries }: SolutionsClientProps) {
  const getSolutionFields = (solution: Solution) => {
    return {
      title: solution.Titulo || 'Solución sin título',
      shortDescription: solution.descripcion_corta || solution.short_description || solution.descripcion || solution.description || 'Descripción no disponible',
      longDescription: solution.descripcion_larga || solution.long_description || '',
      features: solution.caracteristicas || solution.features || [],
      benefits: solution.beneficios || solution.benefits || [],
      useCases: solution.casos_uso || solution.use_cases || [],
      technologies: solution.tecnologias || solution.technologies || [],
      industry: solution.industria || solution.industry || 'General',
      category: solution.categoria || solution.category || 'Sin categoría',
      pricingType: solution.precio_tipo || solution.pricing_type || 'gratis',
      price: solution.precio || solution.price || 0,
      demoUrl: solution.demo_url || '',
      documentationUrl: solution.documentacion_url || solution.documentation_url || '',
      slug: solution.slug || `solution-${solution.id}`,
      featured: solution.destacado || solution.featured || false,
      active: solution.activo || solution.active || false,
      coverImage: solution.imagen_portada || solution.cover_image,
      icon: solution.icono || solution.icon
    };
  };

  const getPricingText = (pricingType: string, price: number) => {
    switch (pricingType) {
      case 'gratis': return 'Gratis';
      case 'pago': return `$${price}/mes`;
      case 'empresa': return 'Personalizado';
      default: return 'Consultar';
    }
  };

  if (!solutions || solutions.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Soluciones</h1>
          <p className="text-lg text-gray-600">No hay soluciones disponibles en este momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestras Soluciones</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Plataformas y software empresarial diseñados para impulsar el crecimiento 
            y optimizar los procesos de tu negocio.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <select className="px-4 py-2 border rounded-lg">
              <option value="">Todas las categorías</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            
            <select className="px-4 py-2 border rounded-lg">
              <option value="">Todas las industrias</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>{industry}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Filtrar
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const fields = getSolutionFields(solution);
              
              return (
                <div key={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-200">
                  {/* Cover Image */}
                  {fields.coverImage?.data && (
                    <img 
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fields.coverImage.data.attributes.url}`}
                      alt={fields.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Pricing */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {fields.category}
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        {getPricingText(fields.pricingType, fields.price)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/solutions/${fields.slug}`} className="hover:text-blue-600 transition">
                        {fields.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {fields.shortDescription}
                    </p>

                    {/* Features */}
                    {fields.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Características:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {fields.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                          {fields.features.length > 3 && (
                            <li className="text-blue-600 text-sm">+{fields.features.length - 3} más</li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-500">{fields.industry}</span>
                      <div className="flex gap-2">
                        {fields.demoUrl && (
                          <a 
                            href={fields.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                          >
                            Demo
                          </a>
                        )}
                        <Link 
                          href={`/solutions/${fields.slug}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                        >
                          Ver detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}