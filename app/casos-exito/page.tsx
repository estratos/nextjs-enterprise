const caseStudies = [
  {
    company: "FinTech Global",
    industry: "Servicios Financieros",
    challenge: "Necesitaban modernizar su plataforma legacy para mejorar la experiencia de usuario y cumplir con nuevas regulaciones.",
    solution: "Desarrollamos una plataforma banking digital con microservicios y arquitectura cloud-native.",
    results: [
      "Tiempo de transacción reducido en 70%",
      "Cumplimiento regulatorio 100%",
      "Satisfacción cliente aumentó 45%"
    ],
    duration: "6 meses"
  },
  {
    company: "Retail Chain Pro",
    industry: "Retail",
    challenge: "Sistemas desconectados entre tiendas físicas y online, leading a poor customer experience.",
    solution: "Implementación de plataforma omnicanal unificada con gestión centralizada de inventario.",
    results: [
      "Ventas online aumentaron 150%",
      "Reducción de 30% en stock muerto",
      "Experiencia cliente unificada"
    ],
    duration: "8 meses"
  },
  {
    company: "HealthCare Solutions",
    industry: "Salud",
    challenge: "Procesos manuales en gestión de pacientes y historiales médicos.",
    solution: "Sistema integral de historiales médicos digitales con plataforma de telemedicina.",
    results: [
      "Tiempo de atención reducido 40%",
      "Acceso remoto para pacientes",
      "Cumplimiento total HIPAA"
    ],
    duration: "9 meses"
  }
]

export default function CasosExito() {
  return (
    <div className="pt-16">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Casos de Éxito</h1>
          <p className="text-xl max-w-3xl">
            Descubra cómo hemos ayudado a empresas a transformar sus operaciones y alcanzar sus objetivos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{caseStudy.company}</h2>
                      <p className="text-blue-100">{caseStudy.industry}</p>
                    </div>
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {caseStudy.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Desafío</h3>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Solución</h3>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Resultados Alcanzados</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="text-green-600 font-semibold">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Logo</span>
                        </div>
                        <div>
                          <div className="font-semibold">Testimonio del Cliente</div>
                          <div className="text-gray-600 text-sm">Director de Tecnología, {caseStudy.company}</div>
                        </div>
                      </div>
                      <div className="text-yellow-400 text-2xl">★★★★★</div>
                    </div>
                    <blockquote className="mt-4 text-gray-600 italic">
                      "El equipo de EmpresaTI superó nuestras expectativas. La solución implementada 
                      ha sido fundamental para nuestro crecimiento y transformación digital."
                    </blockquote>
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