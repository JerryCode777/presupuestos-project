"use client";

import Image from "next/image";
import { logoProyecto, perfilImagen } from "../../img";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

export default function ProyectosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Datos simulados para ingeniería civil
  const proyectos = [
    { id: "397", nombre: "CONSTRUCCIÓN DEL LOCAL SOCIAL", monto: "162,069.21", estado: "En Progreso", tipo: "Edificación" },
    { id: "398", nombre: "AMPLIACIÓN Y MEJORAMIENTO DEL SISTEMA DE AGUA POTABLE AREQUIPA METROPOLITANA", monto: "33,549,075.53", estado: "Licitación", tipo: "Hidráulica" },
    { id: "399", nombre: "MEJORAMIENTO CARRETERA KM 00+00 - KM 18+900", monto: "5,068,958.42", estado: "Diseño", tipo: "Vial" },
    { id: "388", nombre: "CONSTRUCCIÓN DE MURO DE CONTENCIÓN CICLÓPEO TRAMOS I Y II", monto: "268,322.52", estado: "Finalizado", tipo: "Estructural" },
    { id: "387", nombre: "INSTALACIONES ELÉCTRICAS Y SANITARIAS", monto: "257,589.40", estado: "En Progreso", tipo: "Instalaciones" },
  ];

  type CarpetaNodo = {
    nombre: string;
    hijos: CarpetaNodo[];
  };

  const carpetas: CarpetaNodo[] = [
    {
      nombre: "Proyectos por Categoría",
      hijos: [
        {
          nombre: "Infraestructura Vial",
          hijos: [{ nombre: "Carreteras", hijos: [] }, { nombre: "Puentes", hijos: [] }],
        },
        {
          nombre: "Obras Hidráulicas",
          hijos: [{ nombre: "Agua Potable", hijos: [] }, { nombre: "Alcantarillado", hijos: [] }],
        },
        {
          nombre: "Edificaciones",
          hijos: [{ nombre: "Residencial", hijos: [] }, { nombre: "Comercial", hijos: [] }],
        },
        {
          nombre: "Estructuras",
          hijos: [{ nombre: "Muros de Contención", hijos: [] }, { nombre: "Cimentaciones", hijos: [] }],
        },
      ],
    },
  ];

  function Carpeta({ nodo, nivel = 0 }: { nodo: CarpetaNodo; nivel?: number }) {
    const [open, setOpen] = useState(true);
    return (
      <div className="ml-2">
        <div
          className={`flex items-center cursor-pointer select-none py-2 px-2 rounded-md hover:bg-slate-100 transition-colors pl-${nivel * 2}`}
          onClick={() => setOpen(!open)}
        >
          {nodo.hijos.length > 0 && (
            <span className="mr-2 text-slate-500">{open ? "▼" : "▶"}</span>
          )}
          <span className="text-slate-700 text-sm font-medium">{nodo.nombre}</span>
        </div>
        {open && nodo.hijos.length > 0 && (
          <div className="ml-4 border-l-2 border-slate-200 pl-2">
            {nodo.hijos.map((hijo, idx) => (
              <Carpeta nodo={hijo} nivel={nivel + 1} key={idx} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "Finalizado": return "bg-green-100 text-green-800";
      case "En Progreso": return "bg-blue-100 text-blue-800";
      case "Licitación": return "bg-yellow-100 text-yellow-800";
      case "Diseño": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Layout principal */}
      <div className="ml-14 flex flex-col min-h-screen">
        <main className="flex-1 flex flex-row overflow-hidden">
          {/* Panel lateral árbol */}
          <aside className="w-72 min-w-[220px] max-w-xs bg-white border-r border-slate-200 shadow-sm flex flex-col">
            <div className="p-4 border-b border-slate-200">
              <h2 className="font-bold text-lg text-slate-700 mb-1">Categorías</h2>
              <p className="text-sm text-slate-500">Organizar por tipo de obra</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {carpetas.map((nodo, idx) => (
                <Carpeta nodo={nodo} key={idx} />
              ))}
            </div>
          </aside>

          {/* Panel central proyectos */}
          <section className="flex-1 flex flex-col bg-white">
            {/* Header con acciones */}
            <div className="p-6 border-b border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">Gestión de Proyectos</h1>
                  <p className="text-slate-500">Administra tus proyectos de ingeniería civil</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-slate-600 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-lg shadow transition-colors">
                    + Nuevo Proyecto
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-2 rounded-md shadow transition-colors text-sm">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded-md shadow transition-colors text-sm">
                  Eliminar
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-2 rounded-md shadow transition-colors text-sm">
                  Exportar
                </button>
                <div className="ml-auto">
                  <input
                    type="text"
                    placeholder="Buscar proyectos..."
                    className="px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-400 focus:border-slate-400 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Tabla de proyectos */}
            <div className="flex-1 overflow-auto p-6">
              <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                        Código
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                        Proyecto
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                        Tipo
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                        Presupuesto (S/)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {proyectos.map((proy) => (
                      <tr
                        key={proy.id}
                        className="hover:bg-slate-50 cursor-pointer transition-colors"
                        onClick={() => router.push(`/proyecto/${proy.id}`)}
                      >
                        <td className="px-6 py-4 text-sm font-mono text-slate-600 font-medium">
                          #{proy.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-slate-900">
                            {proy.nombre}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                            {proy.tipo}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getEstadoColor(proy.estado)}`}>
                            {proy.estado}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                          {proy.monto}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-slate-900">{proyectos.length}</div>
                  <div className="text-sm text-slate-600">Total Proyectos</div>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-slate-600">En Progreso</div>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-slate-600">Finalizados</div>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-slate-700">S/ 39.3M</div>
                  <div className="text-sm text-slate-600">Valor Total</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}