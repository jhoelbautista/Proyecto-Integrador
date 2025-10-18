import React from 'react';

const TeacherContentPanel = ({ activeItem }) => {
  const panelTitles = {
    // Mis Cursos
    'my-courses': 'Listado de Cursos Asignados',
    'course-students': 'Estudiantes por Curso',
    'attendance': 'Registro de Asistencia',
    'student-notes': 'Observaciones por Estudiante',

    // Evaluaciones
    'upload-grades': 'Carga de Notas de Evaluaciones',
    'grade-activities': 'Calificación de Actividades',
    'recovery': 'Registro de Recuperaciones',
    'course-average': 'Promedio General del Curso',

    // Tareas
    'assign-tasks': 'Asignación de Nuevas Tareas',
    'submitted-tasks': 'Tareas Entregadas',
    'task-history': 'Historial de Entregas',

    // Permisos
    'view-permissions': 'Permisos Registrados',
    'justified-absences': 'Faltas Justificadas',
    'filter-permissions': 'Filtro de Permisos'
  };

  const getModuleIcon = (id) => {
    if (id.includes('course')) return '📚';
    if (id.includes('grade') || id.includes('eval')) return '📝';
    if (id.includes('task')) return '📋';
    if (id.includes('permission')) return '🧾';
    return '👨‍🏫';
  };

  return (
    <div className="ml-64 p-8 mt-16">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getModuleIcon(activeItem)}</span>
            <h2 className="text-2xl font-bold text-gray-800">
              {panelTitles[activeItem] || 'Panel del Docente'}
            </h2>
          </div>
          <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
            {activeItem ? 'Módulo docente' : 'Seleccione una opción'}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 rounded-lg p-6">
            {activeItem ? (
              <div className="space-y-4">
                <p className="text-gray-700">
                  Contenido de <span className="font-medium text-blue-600">"{panelTitles[activeItem]}"</span> se mostrará aquí.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Funcionalidades disponibles</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {activeItem.includes('course') && (
                        <>
                          <li>Visualización completa de cursos</li>
                          <li>Filtros por período académico</li>
                          <li>Exportación de listados</li>
                        </>
                      )}
                      {activeItem.includes('grade') && (
                        <>
                          <li>Sistema de calificación flexible</li>
                          <li>Registro de observaciones</li>
                          <li>Cálculo automático de promedios</li>
                        </>
                      )}
                      {activeItem.includes('task') && (
                        <>
                          <li>Asignación con fechas límite</li>
                          <li>Sistema de entregas digitales</li>
                          <li>Registro de retroalimentación</li>
                        </>
                      )}
                      {activeItem.includes('permission') && (
                        <>
                          <li>Visualización de permisos</li>
                          <li>Filtros avanzados</li>
                          <li>Integración con asistencia</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Acciones rápidas</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded text-sm hover:bg-blue-100 transition">
                        Ver tutorial de uso
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-gray-50 text-gray-600 rounded text-sm hover:bg-gray-100 transition">
                        Descargar formato
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Bienvenido al Panel Docente</h3>
                <p className="text-gray-500">Seleccione una opción del menú lateral para comenzar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherContentPanel;
