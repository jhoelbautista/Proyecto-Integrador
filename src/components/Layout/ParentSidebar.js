import React, { useState } from 'react';

const ParentSidebar = ({ activeItem, setActiveItem, onLogout }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const menuSections = [
    {
      title: '👨‍👩‍👧‍👦 Mis Hijos',
      items: [
        { id: 'children-info', label: 'Información académica' },
        { id: 'children-schedule', label: 'Horarios de clases' },
        { id: 'children-teachers', label: 'Profesores asignados' }
      ]
    },
    {
      title: '📊 Rendimiento',
      items: [
        { id: 'grades', label: 'Notas y calificaciones' },
        { id: 'attendance', label: 'Asistencia y faltas' },
        { id: 'behavior', label: 'Comportamiento' }
      ]
    },
    {
      title: '📝 Tareas',
      items: [
        { id: 'pending-tasks', label: 'Tareas pendientes' },
        { id: 'completed-tasks', label: 'Tareas completadas' },
        { id: 'missing-tasks', label: 'Tareas no entregadas' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 pt-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-6 px-2 flex items-center gap-2">
          <span>👪</span>
          <span>Panel de Padres</span>
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

export default ParentSidebar;
