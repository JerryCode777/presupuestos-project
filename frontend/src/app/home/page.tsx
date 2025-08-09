"use client";

import Image from "next/image";
import {logoProyecto, documentosImagen, proyectosImagen,perfilImagen} from "../../img";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("Cargando...");
  const [proyectos, setProyectos] = useState<{ id: string; nombre: string }[]>([]);
  const [archivos, setArchivos] = useState<{ id: string; nombre: string }[]>([]);
  const router = useRouter();

  // Fetch real al backend (ajusta las rutas según tu API)
  useEffect(() => {
    async function fetchData() {
      try {
        // Simulación de endpoints, reemplaza por tus endpoints reales
        const userRes = await fetch("/api/usuario");
        const userData = await userRes.json();
        setUsername(userData.nombre || "Usuario");

        const proyectosRes = await fetch("/api/proyectos");
        const proyectosData = await proyectosRes.json();
        setProyectos(proyectosData || []);

        const archivosRes = await fetch("/api/archivos");
        const archivosData = await archivosRes.json();
        setArchivos(archivosData || []);
      } catch (e) {
        // Fallback si hay error
        setUsername("Usuario Ejemplo");
        setProyectos([
          { id: "1", nombre: "Proyecto Backend 1" },
          { id: "2", nombre: "Proyecto Backend 2" },
        ]);
        setArchivos([
          { id: "1", nombre: "Archivo Backend 1" },
          { id: "2", nombre: "Archivo Backend 2" },
        ]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 relative">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300">
            <Image src={logoProyecto} alt="Logo app" width={56} height={56} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <Image src={perfilImagen} alt="Imagen usuario" width={48} height={48} />
          </div>
          <span className="font-semibold text-gray-900">{username}</span>
          <button
            className="ml-4 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
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
              className="fixed inset-0 bg-opacity-10 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <aside className="fixed top-4 right-4 w-80 max-w-full h-[90vh] bg-white shadow-2xl border border-gray-300 z-50 flex flex-col p-0 rounded-2xl animate-slide-in">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-2xl">
                <span className="font-bold text-lg text-gray-800">Menú</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-red-500 text-2xl font-bold">×</button>
              </div>
              <nav className="flex flex-col gap-2 flex-1 px-6 py-4">
                <button onClick={() => {router.push("/hogar"); setMenuOpen(false);}} className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition text-left">Hogar</button>
                <button onClick={() => {router.push("/proyectos"); setMenuOpen(false);}} className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition text-left">Proyectos</button>
                <button onClick={() => {router.push("/archivos"); setMenuOpen(false);}} className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition text-left">Archivos</button>
                <button onClick={() => {router.push("/configuracion"); setMenuOpen(false);}} className="py-2 px-3 rounded hover:bg-green-50 hover:text-green-700 text-gray-800 font-medium transition text-left">Configuración</button>
              </nav>
              <button className="m-6 text-red-600 font-semibold hover:underline py-2 px-3 rounded hover:bg-red-50 transition" onClick={() => {router.push("/logout"); setMenuOpen(false);}}>Cerrar sesión</button>
            </aside>
          </>
        )}
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Proyectos */}
          <section className="flex flex-col h-full">
            <button
              className="bg-white rounded-2xl shadow-2xl px-6 py-3 flex flex-row justify-between items-center mb-4 border border-gray-200 min-h-[140px] h-full w-full cursor-pointer hover:bg-green-50 transition"
              onClick={() => router.push("/proyectos")}
            >
              <span className="text-2xl font-extrabold text-green-700 text-center w-full font-serif tracking-wide">Proyectos</span>
              <div className="flex-shrink-0 ml-4 flex items-center justify-end h-full">
                <Image src={proyectosImagen} alt="Logo app" width={260} height={180} className="object-contain" />
              </div>
            </button>
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 flex-1 flex flex-col justify-between min-h-[180px]">
              <h3 className="font-semibold mb-2 text-gray-900">Últimos proyectos abiertos</h3>
              <ul className="space-y-2">
                {proyectos.map((proy) => (
                  <li
                    key={proy.id}
                    className="bg-white rounded-2xl px-4 py-2 text-gray-900 font-bold shadow-2xl border border-gray-200 cursor-pointer hover:bg-green-50 transition"
                    onClick={() => router.push(`/proyecto/${proy.id}`)}
                  >
                    {proy.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Archivos */}
          <section className="flex flex-col h-full">
            <button
              className="bg-white rounded-2xl shadow-2xl px-6 py-3 flex flex-row justify-between items-center mb-4 border border-gray-200 min-h-[140px] h-full w-full cursor-pointer hover:bg-blue-50 transition"
              onClick={() => router.push("/archivos")}
            >
              <span className="text-2xl font-extrabold text-blue-700 text-center w-full font-serif tracking-wide">Archivos</span>
              <div className="flex-shrink-0 ml-4 flex items-center justify-end h-full">
                <Image src={documentosImagen} alt="Logo app" width={260} height={180} className="object-contain" />
              </div>
            </button>
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 flex-1 flex flex-col justify-between min-h-[180px]">
              <h3 className="font-semibold mb-2 text-gray-900">Últimos archivos abiertos</h3>
              <ul className="space-y-2">
                {archivos.map((arch) => (
                  <li
                    key={arch.id}
                    className="bg-white rounded-2xl px-4 py-2 text-gray-900 font-bold shadow-2xl border border-gray-200 cursor-pointer hover:bg-blue-50 transition"
                    onClick={() => router.push(`/archivo/${arch.id}`)}
                  >
                    {arch.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}