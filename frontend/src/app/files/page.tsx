"use client";
import Image from "next/image";
import { logoProyecto, perfilImagen } from "../../img";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

export default function HomePage() {
  const [username, setUsername] = useState("Cargando...");
  const [proyectos, setProyectos] = useState<{ id: string; nombre: string; tipo: string; ubicacion: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setUsername("Ing. Civil desde backend");
      setProyectos([
        { id: "1", nombre: "Puente Vehicular Av. Principal", tipo: "Infraestructura Vial", ubicacion: "Arequipa" },
        { id: "2", nombre: "Edificio Residencial Los Álamos", tipo: "Estructural", ubicacion: "Cayma" },
        { id: "3", nombre: "Sistema de Drenaje Sector Norte", tipo: "Hidráulica", ubicacion: "Cerro Colorado" },
        { id: "4", nombre: "Pavimentación Calle Comercio", tipo: "Vías", ubicacion: "Centro Histórico" },
      ]);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Sidebar fijo */}
      <Sidebar />
     
      {/* Contenido principal con margen izquierdo */}
      <div className="ml-14 flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <Image src={logoProyecto} alt="Logo app" width={48} height={48} />
            <span className="font-extrabold text-2xl text-slate-700">CivilCost</span>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-700 mb-2">Gestión de Proyectos de Ingeniería</h1>
            <p className="text-slate-500 mb-6">Administra costos y presupuestos de obra</p>
            <input
              type="text"
              placeholder="Buscar proyectos, obras o presupuestos..."
              className="w-full max-w-xl px-5 py-3 rounded-lg border border-slate-300 shadow focus:outline-none focus:ring-2 focus:ring-slate-400 text-base bg-white"
            />
          </div>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Proyectos Activos</h2>
              <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium">
                + Nuevo Proyecto
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {proyectos.map((proy) => (
                <div
                  key={proy.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg p-5 cursor-pointer border border-slate-200 transition-all hover:border-slate-300"
                  onClick={() => router.push(`/proyecto/${proy.id}`)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {proy.tipo}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">
                    {proy.nombre}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {proy.ubicacion}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>ID: {proy.id}</span>
                    <span>Última actualización: Hoy</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Accesos Rápidos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Calculadora</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Plantillas</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Reportes</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Configuración</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}