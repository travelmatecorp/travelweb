"use client"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { MapPin, Users, Landmark, Smile } from "lucide-react"

export default function Flow() {
  const { ref, isVisible } = useScrollReveal()

  const steps = [
    {
      number: "1",
      title: "Descubre",
      description: "Explora destinos y encuentra experiencias únicas recomendadas por la comunidad",
      icon: MapPin,
    },
    {
      number: "2",
      title: "Conecta",
      description: "Conéctate con viajeros y anfitriones que comparten tus intereses y pasión por viajar",
      icon: Users,
    },
    {
      number: "3",
      title: "Vive",
      description: "Experimenta viajes auténticos planificando cada detalle con tu comunidad de confianza",
      icon: Landmark,
    },
    {
      number: "4",
      title: "Comparte",
      description: "Comparte tus historias, gana puntos y ayuda a otros a vivir experiencias increíbles",
      icon: Smile,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Cómo funciona TravelMate</h2>
          <p className="text-xl text-gray-600">Un flujo simple para vivir experiencias extraordinarias</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3a00] via-[#fc7331] to-[#f88929] -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff3a00] to-[#fc7331] rounded-2xl flex items-center justify-center mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#ff3a00]" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#ff3a00]">{step.number}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-[#ff3a00] to-[#fc7331] rounded-3xl p-12 text-white text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-lg md:text-xl">
            TravelMate simplifica la forma en que planificas, compartes y vives tus aventuras, conectándote con personas
            que aman viajar tanto como tú.
          </p>
        </div>
      </div>
    </section>
  )
}
