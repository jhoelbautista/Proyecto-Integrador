import React, { useState } from 'react';

const Sidebar = ({ activeItem, setActiveItem, onLogout }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const menuSections = [
    {
      title: '🎓 Estudiantes',
      items: [
        { id: 'register-student', label: 'Registrar nuevo' },
        { id: 'update-student', label: 'Actualizar datos' },
        { id: 'kardex', label: 'Consultar kardex' },
        { id: 'academic-history', label: 'Ver historial académico' },
        { id: 'drop-student', label: 'Dar de baja' },
      ],
    },
    {
      title: '👨 Docente',
      items: [
        { id: 'hire-teacher', label: 'Contratar' },
        { id: 'update-teacher', label: 'Actualizar datos' },
        { id: 'assignments', label: 'Consultar asignaciones' },
        { id: 'drop-teacher', label: 'Dar de baja' },
      ],
    },
    {
      title: '🧑 Administrativo',
      items: [
        { id: 'hire-staff', label: 'Contratar personal' },
        { id: 'update-staff', label: 'Actualizar datos' },
        { id: 'assign-functions', label: 'Asignar funciones' },
        { id: 'drop-staff', label: 'Dar de baja' },
      ],
    },
    {
      title: '📊 Estadísticas',
      items: [
        { id: 'course-stats', label: 'Promedios por curso' },
        { id: 'grade-stats', label: 'Promedios por grado' },
        { id: 'school-stats', label: 'Estadísticas generales' },
        { id: 'yearly-comparison', label: 'Comparativas anuales' },
      ],
    },
    {
      title: '🛠 Usuarios',
      items: [
        { id: 'create-user', label: 'Crear nuevo usuario' },
        { id: 'update-user', label: 'Actualizar usuario' },
        { id: 'reset-password', label: 'Restablecer contraseñas' },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 pt-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-6 px-2 flex items-center gap-2">
          <span>🎓</span>
          <span>Panel de Director</span>
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
                        className={`w-full text-left px-4 py-2 rounded-lg transition text-sm flex items-center gap-2 ${
                          activeItem === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                        }`}
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

export default Sidebar;
