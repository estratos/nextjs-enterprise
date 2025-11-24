import { Service } from '../../../types/strapi';

interface ServiceItemProps {
  service: Service;
  index: number;
}

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

export default function ServiceItem({ service, index }: ServiceItemProps) {
  const fields = getServiceFields(service);
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div 
      id={fields.slug}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
    >
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{fields.title}</h2>
        <p className="text-lg text-gray-600 mb-8">{fields.description}</p>
        
        {fields.features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Características:</h3>
            <ul className="space-y-2">
              {fields.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {fields.technologies.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Tecnologías:</h3>
            <div className="flex flex-wrap gap-2">
              {fields.technologies.map((tech, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="lg:w-1/2">
        {fields.image?.data ? (
          <img 
            src={`${strapiUrl}${fields.image.data.attributes.url}`}
            alt={fields.title}
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        ) : (
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
            <span className="text-gray-400 text-lg">Imagen de {fields.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}