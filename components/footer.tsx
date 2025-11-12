export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4">TravelMate</h3>
            <p className="text-sm text-gray-400">
              Planifica tus viajes de forma inteligente, centralizada y sin estrés.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Usuarios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Gamificación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  MatIA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@travelmate.ar" className="hover:text-white transition">
                  info@travelmate.ar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 TravelMate. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
