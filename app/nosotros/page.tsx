const team = [
  {
    name: "Ana Martínez",
    role: "CEO & Fundadora",
    bio: "Más de 15 años de experiencia en transformación digital y liderazgo tecnológico.",
    expertise: ["Estrategia Digital", "Liderazgo", "Innovación"]
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO",
    bio: "Especialista en arquitecturas cloud y desarrollo de software escalable.",
    expertise: ["Cloud Architecture", "DevOps", "Microservicios"]
  },
  {
    name: "María González",
    role: "Directora de Proyectos",
    bio: "PMP certificada con amplia experiencia en gestión de proyectos tecnológicos.",
    expertise: ["Agile", "PMO", "Client Success"]
  },
  {
    name: "Roberto Silva",
    role: "Líder de Desarrollo",
    bio: "Desarrollador full-stack con pasión por las mejores prácticas y código limpio.",
    expertise: ["React/Next.js", "Node.js", "Python"]
  }
]

const values = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de resolver problemas complejos.",
    icon: "💡"
  },
  {
    title: "Calidad",
    description: "Comprometidos con la excelencia en cada línea de código y cada solución.",
    icon: "⭐"
  },
  {
    title: "Colaboración",
    description: "Trabajamos codo a codo con nuestros clientes como partners estratégicos.",
    icon: "🤝"
  },
  {
    title: "Transparencia",
    description: "Comunicación clara y honesta en cada etapa del proyecto.",
    icon: "🔍"
  }
]

export default function Nosotros() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl">
            Más de una década transformando negocios through tecnología innovadora 
            y soluciones digitales a medida.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada en 2010, EmpresaTI nació con la visión de democratizar el acceso 
                  a tecnología de clase empresarial para organizaciones de todos los tamaños.
                </p>
                <p>
                  Lo que comenzó como un pequeño equipo de desarrolladores apasionados 
                  ha crecido hasta convertirse en un partner tecnológico de confianza 
                  para más de 100 empresas en múltiples industrias.
                </p>
                <p>
                  Nuestro enfoque se centra en entender profundamente los desafíos 
                  empresariales de nuestros clientes y desarrollar soluciones que 
                  generen valor real y medible.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <span className="text-gray-400">Imagen de nuestro equipo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Foto</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Expertos en Equipo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}