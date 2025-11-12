"use client"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function MatIA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="matia" className="py-20 md:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-block bg-[#ff3a00]/10 px-4 py-2 rounded-full text-sm font-medium text-[#ff3a00] mb-6">
              Próximamente
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Conoce MatIA, tu IA de viajes
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MatIA analiza tus preferencias, gustos y estilo de viaje para generar itinerarios completamente
              personalizados. Solo cuéntale qué buscas y deja que la inteligencia artificial haga el trabajo pesado.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff3a00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Itinerarios Personalizados</h4>
                  <p className="text-gray-600 text-sm">"Quiero un viaje relajado a la playa en 5 días" → Plan listo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff3a00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Recomendaciones Inteligentes</h4>
                  <p className="text-gray-600 text-sm">Basadas en tus viajes anteriores y preferencias</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff3a00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Presupuesto Adaptativo</h4>
                  <p className="text-gray-600 text-sm">MatIA respeta tu presupuesto en cada recomendación</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff3a00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Descubrimiento de Nuevos Lugares</h4>
                  <p className="text-gray-600 text-sm">Encuentra gemas ocultas que otros viajeros aman</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-[#ff3a00] text-white rounded-full font-bold hover:bg-[#fc7331] transition shadow-lg hover:shadow-xl">
              Espera a MatIA
            </button>
          </div>

          <div
            className={`relative flex items-center justify-center transition-all duration-700 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff3a00]/20 to-[#f88929]/20 rounded-3xl blur-3xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matia_sin_fondo-gjtM2HkFQiTyAQ2DwcMCyJ4yErnID7.png"
              alt="MatIA - TravelMate AI Assistant"
              width={320}
              height={320}
              className="relative w-72 h-72 md:w-96 md:h-96 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
