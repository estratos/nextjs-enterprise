import Link from 'next/link'

const products = [
  {
    name: 'Sistema ERP Empresarial',
    category: 'Gestión Empresarial',
    description: 'Solución integral para la gestión de recursos empresariales.',
    features: ['Gestión financiera', 'Control de inventario', 'RRHH', 'CRM integrado'],
    price: 'Personalizado',
    image: '/placeholder-erp.jpg'
  },
  {
    name: 'Plataforma E-commerce',
    category: 'Comercio Digital',
    description: 'Solución completa para ventas online con gestión multi-canal.',
    features: ['Catálogo productos', 'Pasarelas de pago', 'Marketing tools', 'Analytics'],
    price: 'Desde $999/mes',
    image: '/placeholder-ecommerce.jpg'
  },
  {
    name: 'Suite de Analytics',
    category: 'Business Intelligence',
    description: 'Plataforma de análisis de datos en tiempo real.',
    features: ['Dashboards', 'Reportes automáticos', 'ML integrado', 'API REST'],
    price: 'Desde $499/mes',
    image: '/placeholder-analytics.jpg'
  }
]

export default function Productos() {
  return (
    <div className="pt-16">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl max-w-3xl">
            Soluciones software listas para usar, diseñadas para optimizar sus procesos empresariales.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Imagen de {product.name}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Características principales:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <Link
                      href="/contacto"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Solicitar Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}