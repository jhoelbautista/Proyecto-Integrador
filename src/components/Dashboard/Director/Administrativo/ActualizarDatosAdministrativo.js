import React, { useState } from 'react';

const mockAdministrativos = [
  { id: 1, apellidoPaterno: 'Gómez', apellidoMaterno: 'Pérez', nombres: 'María Fernanda', ci: '12345678' },
  { id: 2, apellidoPaterno: 'Ramírez', apellidoMaterno: 'Lozano', nombres: 'Luis Alberto', ci: '87654321' },
  { id: 3, apellidoPaterno: 'Torres', apellidoMaterno: 'Sánchez', nombres: 'Paola Andrea', ci: '11223344' },
  // Puedes agregar más datos de prueba
];

const ActualizarDatosAdministrativo = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAdministrativos = mockAdministrativos.filter(({ apellidoPaterno, apellidoMaterno, nombres, ci }) => {
    const search = searchTerm.toLowerCase();
    return (
      apellidoPaterno.toLowerCase().includes(search) ||
      apellidoMaterno.toLowerCase().includes(search) ||
      nombres.toLowerCase().includes(search) ||
      ci.includes(search)
    );
  });

  const handleActualizarClick = (administrativo) => {
    alert(`Actualizar datos de: ${administrativo.nombres} ${administrativo.apellidoPaterno}`);
    // Aquí puedes abrir un modal o navegar a un formulario para actualizar
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Actualizar Datos de Administrativos</h3>

      <input
        type="text"
        placeholder="Buscar administrativo por nombre o CI"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded w-full"
      />

      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-5 border-b">Apellido Paterno</th>
            <th className="py-3 px-5 border-b">Apellido Materno</th>
            <th className="py-3 px-5 border-b">Nombres</th>
            <th className="py-3 px-5 border-b">CI</th>
            <th className="py-3 px-5 border-b">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdministrativos.length > 0 ? (
            filteredAdministrativos.map((adm) => (
              <tr key={adm.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{adm.apellidoPaterno}</td>
                <td className="py-3 px-5 border-b">{adm.apellidoMaterno}</td>
                <td className="py-3 px-5 border-b">{adm.nombres}</td>
                <td className="py-3 px-5 border-b">{adm.ci}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    onClick={() => handleActualizarClick(adm)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Actualizar Datos
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No se encontraron administrativos.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActualizarDatosAdministrativo;
