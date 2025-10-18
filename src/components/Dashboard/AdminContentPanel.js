import React from 'react';

const AdminContentPanel = ({ activeItem }) => {
  const panelTitles = {
    // Secciones existentes
    'assign-students': 'Asignación de Estudiantes a Paralelos',
    'student-list': 'Consulta de Estudiantes por Curso/Paralelo',
    'internal-transfers': 'Gestión de Traslados Internos',
    'enrollment-history': 'Historial de Inscripción de Estudiantes',
    'assign-teachers': 'Asignación de Docentes a Cursos',
    'teacher-list': 'Listado de Docentes por Área/Grado',
    'workload': 'Gestión de Carga Horaria Docente',
    'assignments-history': 'Historial de Asignaciones Docentes',
    'create-schedule': 'Creación/Edición de Horarios',
    'classroom-availability': 'Disponibilidad de Aulas',
    'view-schedules': 'Visualización de Horarios',
    
    // Nuevas secciones
    'generate-report-cards': 'Generación de Boletas por Curso',
    'individual-report-card': 'Boleta Individual de Estudiante',
    'student-kardex': 'Acceso al Kardex Estudiantil',
    'export-pdf': 'Exportación de Documentos a PDF',
    'register-permissions': 'Registro de Permisos Presenciales',
    'permissions-history': 'Historial de Permisos por Estudiante',
    'notify-teachers': 'Notificación a Docentes',
    'attendance-stats': 'Estadísticas de Asistencia General',
    'academic-averages': 'Promedios Académicos',
    'level-stats': 'Estadísticas por Nivel Educativo'
  };

  const getModuleIcon = (id) => {
    if (id.includes('report') || id.includes('kardex')) return '📄';
    if (id.includes('permission')) return '📝';
    if (id.includes('stats') || id.includes('average')) return '📈';
    return '⚙️';
  };

  return (
    <div className="ml-64 p-8 mt-16">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getModuleIcon(activeItem)}</span>
            <h2 className="text-2xl font-bold text-gray-800">
              {panelTitles[activeItem] || 'Panel de Administración'}
            </h2>
          </div>
          <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
            {activeItem ? 'Módulo administrativo' : 'Seleccione una opción'}
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
                      {activeItem.includes('report') && (
                        <>
                          <li>Generación masiva</li>
                          <li>Personalización de formatos</li>
                          <li>Vista previa antes de imprimir</li>
                        </>
                      )}
                      {activeItem.includes('permission') && (
                        <>
                          <li>Registro digital de permisos</li>
                          <li>Validación de documentos</li>
                          <li>Notificaciones automáticas</li>
                        </>
                      )}
                      {activeItem.includes('stats') && (
                        <>
                          <li>Gráficos interactivos</li>
                          <li>Filtros por período académico</li>
                          <li>Exportación de datos</li>
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
                        Descargar plantilla
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Bienvenido al Panel Administrativo</h3>
                <p className="text-gray-500">Seleccione una opción del menú lateral para comenzar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContentPanel;

// DONE