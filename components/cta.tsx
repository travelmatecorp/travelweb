export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#ff3a00] via-[#fc7331] to-[#f88929]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Comienza tu próxima aventura
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Únete a miles de viajeros que ya planifican sus viajes sin estrés con TravelMate
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-10 py-4 bg-white text-[#ff3a00] rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Descargar App
          </button>
          <button className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition">
            Más información
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
          <p className="text-white text-sm">
            Disponible en
            <span className="font-bold ml-2">iOS · Android</span>
          </p>
          <p className="text-white/70 text-xs mt-2">Argentina - Expansión internacional próximamente</p>
        </div>
      </div>
    </section>
  )
}
