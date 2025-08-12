"use client";

import Image from "next/image";
import { logoProyecto, perfilImagen } from "../img";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Inicio", path: "/home", iconColor: "#475569", icon: HomeIcon },
    { label: "Proyectos", path: "/projects", iconColor: "#475569", icon: ProjectIcon },
    { label: "Presupuestos", path: "/budgets", iconColor: "#475569", icon: CalculatorIcon },
    { label: "Reportes", path: "/reports", iconColor: "#475569", icon: ReportIcon },
    { label: "Plantillas", path: "/templates", iconColor: "#475569", icon: TemplateIcon },
    { label: "Archivos", path: "/files", iconColor: "#475569", icon: FileIcon },
    { label: "Configuración", path: "/user", iconColor: "#475569", icon: SettingsIcon }
  ];

  const SidebarMenu = () => (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
      <aside className="fixed top-0 left-0 h-full w-72 bg-slate-800 shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-600">
          <div className="flex items-center gap-3">
            <Image src={logoProyecto} alt="Logo" width={32} height={32} />
            <span className="font-bold text-lg text-white">CivilCost</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="text-slate-300 hover:text-white text-2xl font-bold transition-colors"
          >
            ×
          </button>
        </div>
        
        <nav className="flex flex-col gap-1 flex-1 px-4 py-6">
          {navItems.map(({ label, path, icon: Icon }) => (
            <button
              key={path}
              onClick={() => { router.push(path); setSidebarOpen(false); }}
              className="py-3 px-4 rounded-lg hover:bg-slate-700 text-slate-200 hover:text-white font-medium transition-all text-left flex items-center gap-3"
            >
              <Icon color="#e2e8f0" />
              {label}
            </button>
          ))}
        </nav>
        
        <div className="border-t border-slate-600 px-4 py-4">
          <ProfileAvatar />
        </div>
      </aside>
    </>
  );

  const ProfileAvatar = () => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-500">
        <Image src={perfilImagen} alt="Perfil" width={40} height={40} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-white">Ingeniero Civil</p>
        <p className="text-xs text-slate-300">En línea</p>
      </div>
    </div>
  );

  return (
    <aside className="fixed top-0 left-0 h-screen w-14 bg-slate-800 border-r border-slate-700 flex flex-col items-center py-4 shadow-lg z-30">
      {/* Logo clickeable */}
      <button
        className="mb-6 p-2 rounded-lg hover:bg-slate-700 transition-colors"
        onClick={() => setSidebarOpen(true)}
        aria-label="Abrir menú"
        title="Abrir menú principal"
      >
        <Image src={logoProyecto} alt="Logo" width={32} height={32} />
      </button>

      {sidebarOpen && <SidebarMenu />}

      {/* Íconos verticales */}
      <nav className="flex flex-col gap-4 items-center w-full flex-1">
        {navItems.map(({ path, icon: Icon, iconColor }) => (
          <button
            key={path}
            onClick={() => router.push(path)}
            className="p-2.5 rounded-lg hover:bg-slate-700 flex items-center justify-center w-10 h-10 transition-colors group"
            title={navItems.find(item => item.path === path)?.label}
          >
            <Icon color="#e2e8f0" />
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          onClick={() => router.push("/user")}
          className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-600 hover:border-slate-400 transition-colors"
          title="Configuración de usuario"
        >
          <Image src={perfilImagen} alt="Perfil" width={32} height={32} />
        </button>
      </div>
    </aside>
  );
}

/* ==== Íconos en SVG ==== */
function HomeIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M3 12l9-9 9 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V9h6v12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={color} strokeWidth="2"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2"/>
    </svg>
  );
}

function CalculatorIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={color} strokeWidth="2"/>
      <line x1="8" y1="6" x2="16" y2="6" stroke={color} strokeWidth="2"/>
      <line x1="8" y1="10" x2="10" y2="10" stroke={color} strokeWidth="2"/>
      <line x1="14" y1="10" x2="16" y2="10" stroke={color} strokeWidth="2"/>
      <line x1="8" y1="14" x2="10" y2="14" stroke={color} strokeWidth="2"/>
      <line x1="14" y1="14" x2="16" y2="14" stroke={color} strokeWidth="2"/>
      <line x1="8" y1="18" x2="16" y2="18" stroke={color} strokeWidth="2"/>
    </svg>
  );
}

function ReportIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" stroke={color} strokeWidth="2"/>
      <line x1="12" y1="20" x2="12" y2="4" stroke={color} strokeWidth="2"/>
      <line x1="6" y1="20" x2="6" y2="14" stroke={color} strokeWidth="2"/>
    </svg>
  );
}

function TemplateIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={color} strokeWidth="2"/>
      <polyline points="14,2 14,8 20,8" stroke={color} strokeWidth="2"/>
      <line x1="16" y1="13" x2="8" y2="13" stroke={color} strokeWidth="2"/>
      <line x1="16" y1="17" x2="8" y2="17" stroke={color} strokeWidth="2"/>
      <polyline points="10,9 9,9 8,9" stroke={color} strokeWidth="2"/>
    </svg>
  );
}

function FileIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SettingsIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 
               1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09
               a1.65 1.65 0 0 0-1-1.51
               1.65 1.65 0 0 0-1.82.33l-.06.06
               a2 2 0 1 1-2.83-2.83l.06-.06
               a1.65 1.65 0 0 0 .33-1.82
               1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09
               a1.65 1.65 0 0 0 1.51-1
               1.65 1.65 0 0 0-.33-1.82l-.06-.06
               a2 2 0 1 1 2.83-2.83l.06.06
               a1.65 1.65 0 0 0 1.82.33h.09
               a1.65 1.65 0 0 0 1-1.51V3
               a2 2 0 0 1 4 0v.09
               a1.65 1.65 0 0 0 1 1.51h.09
               a1.65 1.65 0 0 0 1.82-.33l.06-.06
               a2 2 0 1 1 2.83 2.83l-.06.06
               a1.65 1.65 0 0 0-.33 1.82v.09
               a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09
               a1.65 1.65 0 0 0-1.51 1z"
            stroke={color} strokeWidth="2" />
    </svg>
  );
}