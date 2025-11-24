export function Testimonials() {
  const testimonials = [
    {
      quote: "Increíble transformación digital. Nuestra eficiencia aumentó un 40%.",
      author: "Carlos Rodríguez",
      company: "TechCorp Inc."
    },
    {
      quote: "El mejor partner tecnológico que hemos tenido. Soluciones robustas y escalables.",
      author: "María González",
      company: "Innovate Solutions"
    },
    {
      quote: "Soporte excepcional y desarrollo de alta calidad. Altamente recomendados.",
      author: "Roberto Silva",
      company: "Global Enterprises"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Casos de éxito y testimonios reales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}