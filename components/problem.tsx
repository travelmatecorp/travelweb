export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">El problema que resolvemos</h2>
          <p className="text-xl text-gray-600 text-balance">
            Planificar un viaje es un caos: múltiples apps, chats dispersos, reservas olvidadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-5xl font-bold text-[#ff3a00] mb-3">30%</div>
            <p className="text-gray-700 font-medium">No-Show Rate</p>
            <p className="text-gray-500 text-sm mt-2">Personas que reservan pero no se presentan</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-5xl font-bold text-[#ff3a00] mb-3">5+</div>
            <p className="text-gray-700 font-medium">Aplicaciones simultáneas</p>
            <p className="text-gray-500 text-sm mt-2">Apps diferentes para organizar un viaje</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-5xl font-bold text-[#ff3a00] mb-3">∞</div>
            <p className="text-gray-700 font-medium">Estrés y olvidos</p>
            <p className="text-gray-500 text-sm mt-2">Reservas olvidadas, horarios confusos</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ff3a00]/10 to-[#f88929]/10 border border-[#ff3a00]/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">La solución: TravelMate</h3>
          <p className="text-gray-700 leading-relaxed">
            Un único lugar donde todo converge. Desde el momento en que eliges tus fechas hasta que disfrutas de tu
            viaje, TravelMate centraliza planificación, reservas, pagos, comunicación y reseñas en una experiencia
            fluida e intuitiva.
          </p>
        </div>
      </div>
    </section>
  )
}
