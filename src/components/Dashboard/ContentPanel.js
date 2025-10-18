import React from 'react';
import DirecEstudContentPanel from './Director/Estudiantes/DirecEstudContentPanel';
import ActualizarDatos from './Director/Estudiantes/ActualizarDatos';
import ConsultarKardex from './Director/Estudiantes/ConsultarKardex';
import HistorialAcademico from './Director/Estudiantes/HistorialAcademico';
import DarDeBaja from './Director/Estudiantes/DarDeBaja';
import RegistroDocenteForm from './Director/Docente/RegistroDocenteForm'; 
import ActualizarDatosDocente from './Director/Docente/ActualizarDatosDocente';
import ConsultarAsignaciones from './Director/Docente/ConsultarAsignaciones'; 
import DarDeBajaDocente from './Director/Docente/DarDeBajaDocente';
import RegistroAdministrativoForm from './Director/Administrativo/RegistroAdministrativoForm';
import ActualizarDatosAdministrativo from './Director/Administrativo/ActualizarDatosAdministrativo'; 
import DarDeBajaAdministrador from './Director/Administrativo/DarDeBajaAdministrador';
import CrearNuevoUsuario from './Director/Usuarios/CrearNuevoUsuario';
import ActualizarDatosUsuario from './Director/Usuarios/ActualizarDatosUsuario';
import RestablecerCredenciales from './Director/Usuarios/RestablecerCredenciales'; // ✅ NUEVO IMPORT

const ContentPanel = ({ activeItem }) => {
  const panelTitles = {
    'register-student': 'Registro de Nuevo Estudiante',
    'update-student': 'Actualización de Datos Estudiantiles',
    'kardex': 'Consulta de Kardex',
    'academic-history': 'Historial Académico',
    'drop-student': 'Baja de Estudiantes',
    'hire-teacher': 'Registro de Nuevo Docente',
    'update-teacher': 'Actualización de Datos Docentes',
    'assignments': 'Consultar Asignaciones',
    'drop-teacher': 'Baja de Docentes',
    'hire-staff': 'Registro de Nuevo Administrativo',
    'update-staff': 'Actualización de Datos Administrativos',
    'drop-staff': 'Baja de Administrativos',
    'create-user': 'Crear Nuevo Usuario',
    'update-user': 'Actualizar Datos de Usuario',
    'reset-password': 'Restablecer Credenciales del Usuario', // ✅ NUEVA ENTRADA
  };

  return (
    <div className="ml-64 p-8 mt-16">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {panelTitles[activeItem] || 'Dashboard Principal'}
          </h2>
          <div className="text-sm text-gray-500">
            {activeItem ? 'Módulo activo' : 'Seleccione una opción'}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 rounded-lg p-4">
            {activeItem === 'register-student' ? (
              <DirecEstudContentPanel />
            ) : activeItem === 'update-student' ? (
              <ActualizarDatos />
            ) : activeItem === 'kardex' ? (
              <ConsultarKardex />
            ) : activeItem === 'academic-history' ? (
              <HistorialAcademico />
            ) : activeItem === 'drop-student' ? (
              <DarDeBaja />
            ) : activeItem === 'hire-teacher' ? (
              <RegistroDocenteForm />
            ) : activeItem === 'update-teacher' ? (
              <ActualizarDatosDocente />
            ) : activeItem === 'assignments' ? (
              <ConsultarAsignaciones />
            ) : activeItem === 'drop-teacher' ? (
              <DarDeBajaDocente />
            ) : activeItem === 'hire-staff' ? (
              <RegistroAdministrativoForm />
            ) : activeItem === 'update-staff' ? (
              <ActualizarDatosAdministrativo />
            ) : activeItem === 'drop-staff' ? (
              <DarDeBajaAdministrador />
            ) : activeItem === 'create-user' ? (
              <CrearNuevoUsuario />
            ) : activeItem === 'update-user' ? (
              <ActualizarDatosUsuario />
            ) : activeItem === 'reset-password' ? ( // ✅ NUEVA CONDICIÓN
              <RestablecerCredenciales />
            ) : activeItem ? (
              <p className="text-gray-700">
                Contenido de <span className="font-medium">"{panelTitles[activeItem]}"</span> se mostrará aquí.
                <br />
                <span className="text-sm text-gray-500 mt-2 block">
                  Esta área incluirá formularios, tablas y gráficos según el módulo seleccionado.
                </span>
              </p>
            ) : (
              <p className="text-gray-700">
                Bienvenido al sistema de gestión educativa. Seleccione una opción del menú lateral para comenzar.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
