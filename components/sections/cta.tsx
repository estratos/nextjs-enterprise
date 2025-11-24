export function CTA() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para Transformar su Negocio?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctenos hoy mismo y descubra cómo podemos ayudar a su empresa a alcanzar sus objetivos tecnológicos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Consulta
          </button>
          <button className="border border-white hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
            Llamar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}