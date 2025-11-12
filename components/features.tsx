"use client"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Features() {
  const { ref, isVisible } = useScrollReveal()

  const features = [
    {
      title: "Calendario Inteligente",
      description: "Visualiza todo tu viaje día a día. Nunca olvides una reserva o actividad.",
      icon: "📅",
    },
    {
      title: "Chat Centralizado",
      description: "Comunícate con hosts y otros viajeros sin salir de la app.",
      icon: "💬",
    },
    {
      title: "Reseñas y Valoraciones",
      description: "Elige con confianza basándote en experiencias reales de otros viajeros.",
      icon: "⭐",
    },
    {
      title: "Múltiples Pagos",
      description: "Tarjetas, efectivo, MercadoPago y más métodos de pago integrados.",
      icon: "💳",
    },
    {
      title: "Flujo Todo-en-Uno",
      description: "Fechas → Destino → Alojamiento → Actividades → Reserva → Disfruta",
      icon: "🎯",
    },
    {
      title: "Filtrado Inteligente",
      description: "Encuentra exactamente lo que buscas: alojamiento, comida, aventura.",
      icon: "🔍",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Características principales
          </h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas para planificar el viaje perfecto</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-[#ff3a00]/5 hover:to-[#f88929]/5 border border-gray-200 hover:border-[#ff3a00]/30 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
