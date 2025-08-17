"use client";
import { useState, FC } from "react";
import { Plus, Edit, Trash2, X, Save, Search, FileText } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/navigation";

// Define interface for Proyecto
interface Proyecto {
  id_proyecto: number;
  nombre: string;
  descripcion: string;
  fecha_creacion: string;
}

const ProyectosCRUD: FC = () => {
  const router = useRouter();

  // State for projects
  const [proyectos, setProyectos] = useState<Proyecto[]>([
    {
      id_proyecto: 1,
      nombre: "CONSTRUCCIÓN DEL LOCAL SOCIAL",
      descripcion: "Construcción de local comunal",
      fecha_creacion: "2024-01-15",
    },
    {
      id_proyecto: 2,
      nombre: "AMPLIACIÓN SISTEMA AGUA POTABLE",
      descripcion: "Mejoramiento sistema de agua",
      fecha_creacion: "2024-02-20",
    },
  ]);

  // State for selection and UI
  const [selectedProyecto, setSelectedProyecto] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [formData, setFormData] = useState<{ id?: number; nombre: string; descripcion: string }>({
    nombre: "",
    descripcion: "",
  });

  // Format date for display
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter projects based on search term
  const filteredProyectos = proyectos.filter((proyecto) =>
    proyecto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proyecto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open modal for create/edit
  const openModal = (mode: "create" | "edit") => {
    setModalMode(mode);
    if (mode === "create") {
      setFormData({ nombre: "", descripcion: "" });
    } else if (mode === "edit" && selectedProyecto) {
      const proyecto = proyectos.find(p => p.id_proyecto === selectedProyecto);
      if (proyecto) {
        setFormData({
          id: proyecto.id_proyecto,
          nombre: proyecto.nombre,
          descripcion: proyecto.descripcion,
        });
      }
    }
    setShowModal(true);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!formData.nombre || !formData.descripcion) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (modalMode === "create") {
      const nuevoProyecto: Proyecto = {
        id_proyecto: Math.max(...proyectos.map((p) => p.id_proyecto), 0) + 1,
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        fecha_creacion: new Date().toISOString().split("T")[0],
      };
      setProyectos((prev) => [...prev, nuevoProyecto]);
    } else if (modalMode === "edit" && formData.id) {
      setProyectos((prev) =>
        prev.map((p) =>
          p.id_proyecto === formData.id
            ? { ...p, nombre: formData.nombre, descripcion: formData.descripcion }
            : p
        )
      );
    }
    setShowModal(false);
    setFormData({ nombre: "", descripcion: "" });
    setSelectedProyecto(null);
  };

  // Handle delete
  const handleDelete = () => {
    if (!selectedProyecto) {
      alert("Por favor, selecciona un proyecto para eliminar.");
      return;
    }
    
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      setProyectos((prev) => prev.filter((p) => p.id_proyecto !== selectedProyecto));
      setSelectedProyecto(null);
    }
  };

  // Handle row click (single click = select, double click = navigate)
  const handleRowClick = (id: number) => {
    setSelectedProyecto(selectedProyecto === id ? null : id);
  };

  const handleRowDoubleClick = (id: number) => {
    router.push(`/subproject?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido principal con margen izquierdo */}
      <div className="ml-14 flex flex-col min-h-screen">
        <main className="flex-1 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Proyectos</h1>
            </div>

            {/* Toolbar con opciones */}
            <div className="bg-white border border-gray-200 rounded-t shadow-sm p-3">
              <div className="flex flex-wrap items-center gap-2">
                {/* Botón Nuevo */}
                <button
                  onClick={() => openModal("create")}
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700"
                  title="Nuevo"
                >
                  <Plus size={14} />
                  Nuevo
                </button>

                {/* Botón Editar */}
                <button
                  onClick={() => openModal("edit")}
                  disabled={!selectedProyecto}
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  title="Editar Datos"
                >
                  <Edit size={14} />
                  Editar Datos
                </button>

                {/* Botón Eliminar */}
                <button
                  onClick={handleDelete}
                  disabled={!selectedProyecto}
                  className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  title="Eliminar"
                >
                  <Trash2 size={14} />
                  Eliminar
                </button>

                {/* Separador */}
                <div className="h-6 w-px bg-gray-300 mx-1"></div>

                {/* Búsqueda */}
                <div className="flex items-center gap-1">
                  <Search size={14} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Botón Imprimir (placeholder) */}
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1 bg-gray-600 text-white px-3 py-1.5 rounded text-sm hover:bg-gray-700 ml-auto"
                  title="Asistente Imprimir"
                >
                  <FileText size={14} />
                  Asistente Imprimir
                </button>
              </div>
            </div>

            {/* Spreadsheet-like table for Projects */}
            <div className="bg-white border border-gray-200 border-t-0 rounded-b shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Descripción</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fecha Creación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProyectos.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                        {searchTerm ? "No se encontraron proyectos que coincidan con la búsqueda." : "No hay proyectos disponibles."}
                      </td>
                    </tr>
                  ) : (
                    filteredProyectos.map((proyecto) => (
                      <tr
                        key={proyecto.id_proyecto}
                        className={`cursor-pointer hover:bg-gray-50 ${
                          selectedProyecto === proyecto.id_proyecto ? 'bg-blue-100 border-l-4 border-l-blue-500' : ''
                        }`}
                        onClick={() => handleRowClick(proyecto.id_proyecto)}
                        onDoubleClick={() => handleRowDoubleClick(proyecto.id_proyecto)}
                        title="Click para seleccionar, doble click para ver subproyectos"
                      >
                        <td className="px-4 py-2 text-sm text-gray-600">{proyecto.id_proyecto}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 font-medium">{proyecto.nombre}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{proyecto.descripcion}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{formatDate(proyecto.fecha_creacion)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Información de selección */}
            {selectedProyecto && (
              <div className="mt-2 text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded border border-blue-200">
                Proyecto seleccionado: <strong>{proyectos.find(p => p.id_proyecto === selectedProyecto)?.nombre}</strong>
                <span className="ml-4 text-gray-500">
                  (Doble click en la fila para ver subproyectos)
                </span>
              </div>
            )}

            {/* Modal for create/edit */}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded shadow-lg max-w-lg w-full">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">
                      {modalMode === "create" ? "Nuevo Proyecto" : "Editar Proyecto"}
                    </h2>
                    <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-gray-800">
                      <X size={20} />
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre</label>
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData((prev) => ({ ...prev, nombre: e.target.value }))}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Descripción</label>
                      <textarea
                        value={formData.descripcion}
                        onChange={(e) => setFormData((prev) => ({ ...prev, descripcion: e.target.value }))}
                        rows={3}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        <Save size={16} />
                        {modalMode === "create" ? "Crear" : "Guardar"}
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProyectosCRUD;