import React, { useState } from 'react';

const AdminSidebar = ({ activeItem, setActiveItem, onLogout }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const menuSections = [
    {
      title: '📚 Estudiantes',
      items: [
        { id: 'assign-students', label: 'Asignar estudiantes a paralelos' },
        { id: 'student-list', label: 'Consultar lista por curso/paralelo' },
        { id: 'internal-transfers', label: 'Gestionar traslados internos' },
        { id: 'enrollment-history', label: 'Revisar historial de inscripción' }
      ]
    },
    {
      title: '👥 Docentes',
      items: [
        { id: 'assign-teachers', label: 'Asignar docentes a cursos' },
        { id: 'teacher-list', label: 'Consultar lista de docentes' },
        { id: 'workload', label: 'Gestionar carga horaria' },
        { id: 'assignments-history', label: 'Ver historial de asignaciones' }
      ]
    },
    {
      title: '🕓 Horarios',
      items: [
        { id: 'create-schedule', label: 'Crear/editar horarios por curso' },
        { id: 'classroom-availability', label: 'Visualizar disponibilidad de aulas' },
        { id: 'view-schedules', label: 'Ver horarios por docente/paralelo' }
      ]
    },
    {
      title: '🧾 Boletas y Kardex',
      items: [
        { id: 'generate-report-cards', label: 'Generar boletas por curso' },
        { id: 'individual-report-card', label: 'Generar boleta individual' },
        { id: 'student-kardex', label: 'Acceder al kardex estudiantil' },
        { id: 'export-pdf', label: 'Exportar en PDF' }
      ]
    },
    {
      title: '📂 Permisos y Justificaciones',
      items: [
        { id: 'register-permissions', label: 'Registrar permisos presenciales' },
        { id: 'permissions-history', label: 'Consultar historial de permisos' },
        { id: 'notify-teachers', label: 'Notificar a docentes' }
      ]
    },
    {
      title: '📊 Estadísticas',
      items: [
        { id: 'attendance-stats', label: 'Ver asistencia general' },
        { id: 'academic-averages', label: 'Consultar promedios académicos' },
        { id: 'level-stats', label: 'Estadísticas por nivel educativo' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 pt-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-6 px-2 flex items-center gap-2">
          <span>👤</span>
          <span>Panel Administrativo</span>
        </h2>

        <div className="space-y-6">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1 px-2 flex items-center gap-2 hover:text-white"
              >
                <span>{section.title.split(' ')[0]}</span>
                <span className="flex-1">{section.title.split(' ').slice(1).join(' ')}</span>
                <span>{openSections[section.title] ? '▲' : '▼'}</span>
              </button>

              {openSections[section.title] && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveItem(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition text-sm flex items-center gap-2 ${activeItem === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                      >
                        <span className="opacity-80">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 rounded-lg transition text-sm hover:bg-gray-700 text-red-400 hover:text-red-300 flex items-center gap-2"
          >
            <span>🔒</span>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
