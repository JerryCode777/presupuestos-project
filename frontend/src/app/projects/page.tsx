"use client";

import Image from "next/image";
import logoProyecto from "../../img/logoProyecto.png";
import userImg from "../../img/logoGoogle.png"; // Usa tu imagen de usuario real
import { useState } from "react";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 relative">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300">
            <Image src={logoProyecto} alt="Logo app" width={56} height={56} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <Image src={userImg} alt="Imagen usuario" width={48} height={48} />
          </div>
          <span className="font-semibold text-gray-700">Nombre de usuario</span>
          <button
            className="ml-4 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {/* Icono de engranaje/menu */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="#333" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
        {/* Menú lateral */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed z-40"
              onClick={() => setMenuOpen(false)}
            />
            <aside className="fixed top-4 right-4 w-80 max-w-full h-[90vh] bg-white shadow-2xl border border-gray-300 z-50 flex flex-col p-0 rounded-2xl animate-slide-in">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-2xl">
                <span className="font-bold text-lg text-gray-800">Menú</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-red-500 text-2xl font-bold">×</button>
              </div>
              <nav className="flex flex-col gap-2 flex-1 px-6 py-4">
                <a href="#" className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition">Hogar</a>
                <a href="#" className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition">Proyectos</a>
                <a href="#" className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition">Archivos</a>
                <a href="#" className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition">Configuración2232</a>
              </nav>
              <button className="m-6 text-red-600 font-semibold hover:underline py-2 px-3 rounded hover:bg-red-50 transition">Cerrar sesión</button>
            </aside>
          </>
        )}
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Proyectos */}
          <section>
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4 mb-4 border border-gray-200">
              <span className="text-lg font-bold text-gray-900">Proyectos</span>
              <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-700 font-semibold border border-gray-300">Imagen</div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow p-6 border border-gray-200">
              <h3 className="font-semibold mb-2 text-gray-800">Últimos proyectos abiertos</h3>
              <ul className="space-y-2">
                <li className="bg-white rounded px-4 py-2 text-gray-900 font-medium border border-gray-200">Proyecto 1</li>
                <li className="bg-white rounded px-4 py-2 text-gray-900 font-medium border border-gray-200">Proyecto 2</li>
              </ul>
            </div>
          </section>
          {/* Archivos */}
          <section>
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4 mb-4 border border-gray-200">
              <span className="text-lg font-bold text-gray-900">Archivos</span>
              <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-700 font-semibold border border-gray-300">imagen</div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow p-6 border border-gray-200">
              <h3 className="font-semibold mb-2 text-gray-800">Últimos archivos abiertos</h3>
              <ul className="space-y-2">
                <li className="bg-white rounded px-4 py-2 text-gray-900 font-medium border border-gray-200">Archivo 1</li>
                <li className="bg-white rounded px-4 py-2 text-gray-900 font-medium border border-gray-200">Archivo 2</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}