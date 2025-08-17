"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { profile } from "../../img";

export default function UserSettingsPage() {
  const [nombre, setNombre] = useState("Juan Pérez");
  const [correo, setCorreo] = useState("juan.perez@example.com");
  const [telefono, setTelefono] = useState("+54 11 1234 5678");
  const [cargo, setCargo] = useState("Ingeniero Civil Senior");
  const [empresa, setEmpresa] = useState("Constructora Los Andes S.A.C.");
  const [perfil, setPerfil] = useState(profile);

  const handleSave = () => {
    console.log("Datos guardados:", { nombre, correo, telefono, cargo, empresa, perfil });
    alert("Datos actualizados correctamente ✅");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-14 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Configuración de Usuario</h1>
                <p className="text-slate-500 mt-1">Gestiona tu información personal y preferencias</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="bg-slate-600 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Perfil Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm h-fit">
                <h2 className="text-lg font-semibold text-slate-800 mb-6">Foto de Perfil</h2>
                
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 mb-4 shadow-sm">
                    <Image 
                      src={perfil} 
                      alt="Foto de perfil" 
                      width={128} 
                      height={128} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-slate-900">{nombre}</h3>
                    <p className="text-sm text-slate-500">{cargo}</p>
                    <p className="text-sm text-slate-500">{empresa}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-2 text-sm border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                      Cambiar foto
                    </button>
                    <button className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>

              {/* Información Personal */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Información Básica */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Información Personal</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors"
                        placeholder="Ingrese su nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Cargo / Posición
                      </label>
                      <input
                        type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors"
                        placeholder="Ej: Ingeniero Civil Senior"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors"
                        placeholder="ejemplo@empresa.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors"
                        placeholder="+54 11 1234 5678"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-colors"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferencias */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Preferencias del Sistema</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h3 className="font-medium text-slate-900">Notificaciones por email</h3>
                        <p className="text-sm text-slate-500">Recibir actualizaciones de proyectos por correo</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h3 className="font-medium text-slate-900">Informes automáticos</h3>
                        <p className="text-sm text-slate-500">Generar reportes semanales de presupuestos</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h3 className="font-medium text-slate-900">Modo oscuro</h3>
                        <p className="text-sm text-slate-500">Usar tema oscuro en la interfaz</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Seguridad */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Seguridad</h2>
                  
                  <div className="space-y-4">
                    <button className="w-full text-left p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-slate-900">Cambiar contraseña</h3>
                          <p className="text-sm text-slate-500">Actualiza tu contraseña de acceso</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>

                    <button className="w-full text-left p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-slate-900">Autenticación de dos factores</h3>
                          <p className="text-sm text-slate-500">Configurar 2FA para mayor seguridad</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}