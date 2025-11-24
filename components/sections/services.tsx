export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar su negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicios placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Desarrollo de Software</h3>
            <p className="text-gray-600">Soluciones personalizadas web, móviles y empresariales.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
            <p className="text-gray-600">Infraestructura cloud, CI/CD y automatización.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
            <p className="text-gray-600">Business Intelligence y análisis de datos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}