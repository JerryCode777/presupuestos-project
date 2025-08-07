// src/components/ProjectCard.tsx
interface ProjectCardProps {
  id: string;
  name: string;
  budget: number;
  status: 'active' | 'completed' | 'pending' | 'on-hold';
  progress: number; // 0-100
  startDate: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function ProjectCard({ 
  id, 
  name, 
  budget, 
  status, 
  progress, 
  startDate,
  onEdit,
  onDelete 
}: ProjectCardProps) {
  // Colores según el estado
  const statusStyles = {
    active: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'on-hold': 'bg-red-100 text-red-800 border-red-200'
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-PE');
  };

  // Formatear moneda
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN'
    }).format(amount);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusStyles[status]}`}>
          {status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      {/* Budget */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Presupuesto</p>
        <p className="text-xl font-bold text-gray-900">{formatCurrency(budget)}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progreso</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Start Date */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Fecha de inicio</p>
        <p className="text-sm font-medium text-gray-900">{formatDate(startDate)}</p>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        {onEdit && (
          <button
            onClick={() => onEdit(id)}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors text-sm font-medium"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}