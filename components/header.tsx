"use client"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travelmate-logo-black-OlcBGfSt2Rw2A5umcnj9308OzLt4h8.png"
              alt="TravelMate"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">TravelMate</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#ff3a00] transition">
              Características
            </a>
            <a href="#usuarios" className="text-gray-700 hover:text-[#ff3a00] transition">
              Usuarios
            </a>
            <a href="#gamificacion" className="text-gray-700 hover:text-[#ff3a00] transition">
              Gamificación
            </a>
            <a href="#matia" className="text-gray-700 hover:text-[#ff3a00] transition">
              MatIA
            </a>
            <button className="px-6 py-2 bg-[#ff3a00] text-white rounded-full hover:bg-[#fc7331] transition font-medium">
              Descargar App
            </button>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-[#ff3a00]">
              Características
            </a>
            <a href="#usuarios" className="block text-gray-700 hover:text-[#ff3a00]">
              Usuarios
            </a>
            <a href="#gamificacion" className="block text-gray-700 hover:text-[#ff3a00]">
              Gamificación
            </a>
            <a href="#matia" className="block text-gray-700 hover:text-[#ff3a00]">
              MatIA
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
