"use client"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Gamification() {
  const { ref, isVisible } = useScrollReveal()

  const levels = [
    { name: "Explorador", icon: "🌍", range: "0-1000 pts", color: "#ff3a00" },
    { name: "Viajero", icon: "✈️", range: "1000-5000 pts", color: "#fc7331" },
    { name: "Aventurero", icon: "🏔️", range: "5000-15000 pts", color: "#f88929" },
    { name: "Leyenda", icon: "👑", range: "15000+ pts", color: "#ff3a00" },
  ]

  return (
    <section id="gamificacion" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Gamificación y recompensas</h2>
          <p className="text-xl text-gray-600">Cada reserva te acerca a increíbles beneficios</p>
        </div>

        {/* Gamification Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`text-center transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-block bg-[#ff3a00]/10 p-8 rounded-3xl mb-6 hover:bg-[#ff3a00]/15 transition">
              <div className="text-6xl">⭐</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Gana Puntos</h3>
            <p className="text-gray-600">Por cada actividad planificada y reserva realizada acumulas puntos</p>
          </div>

          <div
            className={`text-center transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block bg-[#fc7331]/10 p-8 rounded-3xl mb-6 hover:bg-[#fc7331]/15 transition">
              <div className="text-6xl">🎖️</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Desbloquea Logros</h3>
            <p className="text-gray-600">Alcanza metas de viaje y desbloquea insignias exclusivas</p>
          </div>

          <div
            className={`text-center transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-block bg-[#f88929]/10 p-8 rounded-3xl mb-6 hover:bg-[#f88929]/15 transition">
              <div className="text-6xl">🎁</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Canjea Premios</h3>
            <p className="text-gray-600">Transforma tus puntos en descuentos para futuros viajes</p>
          </div>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sistema de Niveles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  backgroundColor: level.color,
                  animationDelay: `${0.4 + index * 0.1}s`,
                }}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{level.icon}</div>
                  <h4 className="text-2xl font-bold mb-3">{level.name}</h4>
                  <p className="text-sm font-semibold bg-white/30 inline-block px-3 py-1 rounded-full">{level.range}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Cada nivel te desbloquea beneficios exclusivos, descuentos especiales y reconocimiento en la comunidad
          </p>
        </div>
      </div>
    </section>
  )
}
