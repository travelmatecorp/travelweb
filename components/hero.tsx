"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ff3a00] via-[#fc7331] to-[#f88929] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
              Planificación de viajes revolucionada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Tu viaje perfecto, en un solo lugar
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Centraliza toda la planificación de tu viaje: fechas, destino, alojamiento, actividades, pagos y mucho
              más. Sin estrés, sin olvidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-[#ff3a00] rounded-full font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
                Descargar TravelMate
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition">
                Ver Demo
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="https://worldle.travelmate.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white/10 backdrop-blur border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition text-center"
              >
                🌍 Wordle de Destinos
              </Link>
              <Link
                href="https://quiz.travelmate.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white/10 backdrop-blur border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition text-center"
              >
                🎯 Quiz de Viajeros
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travelmate-logo-transparent-AkypOzkePLZgwoAZB5AA6BvBfJt4Yr.png"
              alt="TravelMate Logo"
              width={300}
              height={300}
              className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
