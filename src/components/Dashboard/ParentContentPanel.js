import React from 'react';
import VirtualAssistant from '../Parents/VirtualAssistant';

const ParentContentPanel = ({ activeItem, user, setActiveItem }) => {
  const panelTitles = {
    'children-info': 'Información Académica',
    'children-schedule': 'Horarios de Clases',
    'children-teachers': 'Profesores Asignados',
    'grades': 'Notas y Calificaciones',
    'attendance': 'Asistencia y Faltas',
    'behavior': 'Comportamiento',
    'pending-tasks': 'Tareas Pendientes',
    'completed-tasks': 'Tareas Completadas',
    'missing-tasks': 'Tareas no Entregadas'
  };

  const getModuleIcon = (id) => {
    if (id.includes('children')) return '👨‍👩‍👧‍👦';
    if (id.includes('grade') || id.includes('attend') || id.includes('behavior')) return '📊';
    if (id.includes('task')) return '📝';
    return '🏠';
  };

  return (
    <div className="ml-64 p-8 mt-16">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getModuleIcon(activeItem)}</span>
            <h2 className="text-2xl font-bold text-gray-800">
              {panelTitles[activeItem] || 'Panel de Padres'}
            </h2>
          </div>
          <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
            {activeItem ? 'Información parental' : 'Seleccione una opción'}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 rounded-lg p-6">
            {activeItem ? (
              <div className="space-y-6">
                {user.children && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-3">Hijos registrados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {user.children.map((child, index) => (
                        <div key={index} className="bg-blue-50 p-3 rounded-lg">
                          <p className="font-medium text-blue-800">{child.name}</p>
                          <p className="text-sm text-blue-600">{child.grade}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Contenido de {panelTitles[activeItem]}</h3>
                    <p className="text-gray-600">
                      Aquí se mostraría el contenido específico de la sección seleccionada.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Acciones rápidas</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded text-sm hover:bg-blue-100 transition">
                        Ver detalles completos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Bienvenido al Panel de Padres</h3>
                <p className="text-gray-500">Seleccione una opción del menú lateral para ver la información de sus hijos</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <VirtualAssistant setActiveItem={setActiveItem} />
    </div>
  );
};

export default ParentContentPanel;
