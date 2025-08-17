"use client";

import React from "react";
import Image from "next/image";
import { logo, profile } from "../../img";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

interface Documento {
  id: string;
  nombre: string;
  tipo: string;
  tamaño: string;
  fechaModificacion: string;
  proyecto: string;
  extension: string;
}

interface TipoDocumento {
  id: string;
  nombre: string;
  icono: string;
  color: string;
}

export default function DocumentsPage(): React.JSX.Element {
  const [username, setUsername] = useState<string>("Cargando...");
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>("Todos");
  const [documentosFiltrados, setDocumentosFiltrados] = useState<Documento[]>([]);
  const router = useRouter();

  const tiposDocumento: TipoDocumento[] = [
    { id: "todos", nombre: "Todos", icono: "📄", color: "bg-slate-100 text-slate-700" },
    { id: "pdf", nombre: "PDF", icono: "📕", color: "bg-red-100 text-red-700" },
    { id: "word", nombre: "Word", icono: "📘", color: "bg-blue-100 text-blue-700" },
    { id: "excel", nombre: "Excel", icono: "📗", color: "bg-green-100 text-green-700" },
    { id: "powerpoint", nombre: "PowerPoint", icono: "📙", color: "bg-orange-100 text-orange-700" },
    { id: "imagen", nombre: "Imágenes", icono: "🖼️", color: "bg-purple-100 text-purple-700" },
    { id: "autocad", nombre: "AutoCAD", icono: "📐", color: "bg-yellow-100 text-yellow-700" }
  ];

  useEffect(() => {
    setTimeout(() => {
      setUsername("Ing. Civil desde backend");
      const documentosEjemplo: Documento[] = [
        { 
          id: "1", 
          nombre: "Especificaciones Técnicas Puente", 
          tipo: "pdf", 
          tamaño: "2.3 MB",
          fechaModificacion: "2024-08-10",
          proyecto: "Puente Vehicular Av. Principal",
          extension: ".pdf"
        },
        { 
          id: "2", 
          nombre: "Memoria de Cálculo Estructural", 
          tipo: "word", 
          tamaño: "1.8 MB",
          fechaModificacion: "2024-08-09",
          proyecto: "Edificio Residencial Los Álamos",
          extension: ".docx"
        },
        { 
          id: "3", 
          nombre: "Presupuesto Detallado Drenaje", 
          tipo: "excel", 
          tamaño: "890 KB",
          fechaModificacion: "2024-08-08",
          proyecto: "Sistema de Drenaje Sector Norte",
          extension: ".xlsx"
        },
        { 
          id: "4", 
          nombre: "Presentación Avance Proyecto", 
          tipo: "powerpoint", 
          tamaño: "4.2 MB",
          fechaModificacion: "2024-08-07",
          proyecto: "Pavimentación Calle Comercio",
          extension: ".pptx"
        },
        { 
          id: "5", 
          nombre: "Plano Estructural Principal", 
          tipo: "autocad", 
          tamaño: "3.1 MB",
          fechaModificacion: "2024-08-06",
          proyecto: "Edificio Residencial Los Álamos",
          extension: ".dwg"
        },
        { 
          id: "6", 
          nombre: "Foto Terreno Ubicación", 
          tipo: "imagen", 
          tamaño: "1.2 MB",
          fechaModificacion: "2024-08-05",
          proyecto: "Puente Vehicular Av. Principal",
          extension: ".jpg"
        },
        { 
          id: "7", 
          nombre: "Análisis de Suelos", 
          tipo: "pdf", 
          tamaño: "1.7 MB",
          fechaModificacion: "2024-08-04",
          proyecto: "Sistema de Drenaje Sector Norte",
          extension: ".pdf"
        },
        { 
          id: "8", 
          nombre: "Cronograma de Obra", 
          tipo: "excel", 
          tamaño: "456 KB",
          fechaModificacion: "2024-08-03",
          proyecto: "Pavimentación Calle Comercio",
          extension: ".xlsx"
        }
      ];
      setDocumentos(documentosEjemplo);
    }, 500);
  }, []);

  useEffect(() => {
    if (tipoSeleccionado === "Todos") {
      setDocumentosFiltrados(documentos);
    } else {
      const filtrados = documentos.filter(doc => doc.tipo === tipoSeleccionado.toLowerCase());
      setDocumentosFiltrados(filtrados);
    }
  }, [tipoSeleccionado, documentos]);

  const obtenerIconoDocumento = (tipo: string, extension: string): string => {
    const iconos: Record<string, string> = {
      pdf: "📕",
      word: "📘", 
      excel: "📗",
      powerpoint: "📙",
      imagen: "🖼️",
      autocad: "📐"
    };
    return iconos[tipo] || "📄";
  };

  const obtenerColorTipo = (tipo: string): string => {
    const colores: Record<string, string> = {
      pdf: "bg-red-100 text-red-700",
      word: "bg-blue-100 text-blue-700",
      excel: "bg-green-100 text-green-700", 
      powerpoint: "bg-orange-100 text-orange-700",
      imagen: "bg-purple-100 text-purple-700",
      autocad: "bg-yellow-100 text-yellow-700"
    };
    return colores[tipo] || "bg-slate-100 text-slate-700";
  };

  const contarDocumentosPorTipo = (tipo: string): number => {
    if (tipo === "todos") return documentos.length;
    return documentos.filter(doc => doc.tipo === tipo).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Sidebar fijo */}
      <Sidebar />
     
      {/* Contenido principal con margen izquierdo */}
      <div className="ml-14 flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Logo app" width={48} height={48} />
            <span className="font-extrabold text-2xl text-slate-700">CivilCost</span>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-700 mb-2">Gestión de Documentos</h1>
            <p className="text-slate-500 mb-6">Administra todos tus archivos de proyectos de ingeniería</p>
            <input
              type="text"
              placeholder="Buscar documentos, archivos o proyectos..."
              className="w-full max-w-xl px-5 py-3 rounded-lg border border-slate-300 shadow focus:outline-none focus:ring-2 focus:ring-slate-400 text-base bg-white"
            />
          </div>

          {/* Barra de filtros horizontal */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Filtrar por tipo de documento</h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {tiposDocumento.map((tipo) => (
                <button
                  key={tipo.id}
                  onClick={() => setTipoSeleccionado(tipo.nombre)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all whitespace-nowrap min-w-fit ${
                    tipoSeleccionado === tipo.nombre
                      ? 'border-slate-400 bg-slate-600 text-white shadow-md'
                      : `border-slate-200 ${tipo.color} hover:border-slate-300 hover:shadow-sm`
                  }`}
                >
                  <span className="text-lg">{tipo.icono}</span>
                  <span className="font-medium">{tipo.nombre}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tipoSeleccionado === tipo.nombre 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/50'
                  }`}>
                    {contarDocumentosPorTipo(tipo.id)}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                Documentos {tipoSeleccionado !== "Todos" && `- ${tipoSeleccionado}`}
                <span className="text-sm font-normal text-slate-500 ml-2">
                  ({documentosFiltrados.length} archivos)
                </span>
              </h2>
              <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium">
                + Subir Documento
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {documentosFiltrados.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg p-5 cursor-pointer border border-slate-200 transition-all hover:border-slate-300 group"
                  onClick={() => router.push(`/documento/${doc.id}`)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{obtenerIconoDocumento(doc.tipo, doc.extension)}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${obtenerColorTipo(doc.tipo)}`}>
                        {doc.extension.toUpperCase()}
                      </span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight line-clamp-2">
                    {doc.nombre}
                  </h3>
                  
                  <div className="text-sm text-slate-500 mb-3">
                    <p className="font-medium text-slate-600 mb-1">{doc.proyecto}</p>
                    <div className="flex items-center justify-between">
                      <span>{doc.tamaño}</span>
                      <span>{new Date(doc.fechaModificacion).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>ID: {doc.id}</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Sincronizado
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {documentosFiltrados.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📁</div>
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  No hay documentos de tipo &quot;{tipoSeleccionado}&quot;
                </h3>
                <p className="text-slate-500">
                  Sube tu primer documento de este tipo o selecciona otro filtro.
                </p>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Acciones Rápidas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Subir Archivo</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Descargar Todo</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v6M16 1v6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Archivar</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow cursor-pointer border border-slate-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Compartir</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}