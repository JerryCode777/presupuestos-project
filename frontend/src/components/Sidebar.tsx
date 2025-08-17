"use client";

import Image from "next/image";
import * as images from "../img";
import { useRouter } from "next/navigation";

// Tamaño configurable para los íconos
const ICON_SIZE = 40;
// Tamaño del contenedor (debe ser mayor que ICON_SIZE para permitir crecimiento)
const CONTAINER_SIZE = Math.max(40, ICON_SIZE + 20); // Mínimo 40px, o ICON_SIZE + 20px de padding

export default function Sidebar() {
  const router = useRouter();

  const navItems = [
    { id: 1, label: "Logo", path: "/home", image: images.logo },
    { id: 2, label: "Inicio", path: "/home", image: images.home },
    { id: 3, label: "Proyectos", path: "/projects", image: images.projects },
    { id: 4, label: "Subproyecto", path: "/subproject", image: images.subprojects },
    //{ label: "Presupuestos", path: "/budgets", image: images.proyectosImagen },
    //{ label: "Reportes", path: "/reports", image: images.documentosImagen },
    //{ label: "Plantillas", path: "/templates", image: images.documentosImagen },
    { id: 5, label: "Archivos", path: "/files", image: images.files },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-16 bg-[////#region ] border-r border-[#202225] flex flex-col items-center py-4 shadow-md z-30">
      {/* Íconos principales incluyendo el logo clickeable */}
      <nav className="flex flex-col gap-3 items-center w-full flex-1">
        {/* Íconos de navegación */}
        {navItems.map(({ id, path, image, label }) => (
          <button
            key={id}
            onClick={() => router.push(path)}
            className="p-2 rounded-full hover:bg-[#5865F2] flex items-center justify-center transition-colors duration-200 group"
            style={{ 
              width: `${CONTAINER_SIZE}px`, 
              height: `${CONTAINER_SIZE}px` 
            }}
            title={label}
          >
            <Image 
              src={image} 
              alt={label} 
              width={ICON_SIZE} 
              height={ICON_SIZE} 
              className="sidebar-icon object-contain"
            />
          </button>
        ))}
      </nav>

      {/* Configuración fijo en la parte inferior */}
      <div className="mt-auto">
        <button
          onClick={() => router.push("/user")}
          className="p-2 rounded-full hover:bg-[#5865F2] flex items-center justify-center transition-colors duration-200"
          style={{ 
            width: `${CONTAINER_SIZE}px`, 
            height: `${CONTAINER_SIZE}px` 
          }}
          title="Configuración de usuario"
        >
          <Image 
            src={images.profile} 
            alt="Configuración" 
            width={ICON_SIZE} 
            height={ICON_SIZE} 
            className="sidebar-icon object-contain rounded-full"
          />
        </button>
      </div>

      <style jsx>{`
        .sidebar-icon {
          filter: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </aside>
  );
}