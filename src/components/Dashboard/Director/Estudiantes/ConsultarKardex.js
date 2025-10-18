import React, { useState } from 'react';

const mockEstudiantes = [
  { id: 1, apellidoPaterno: 'González', apellidoMaterno: 'Pérez', nombres: 'Juan Carlos', ci: '12345678' },
  { id: 2, apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Lopez', nombres: 'María Fernanda', ci: '87654321' },
  { id: 3, apellidoPaterno: 'Martínez', apellidoMaterno: 'Gómez', nombres: 'Luis Alberto', ci: '11223344' },
];

const ConsultarKardex = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEstudiantes = mockEstudiantes.filter(({ apellidoPaterno, apellidoMaterno, nombres, ci }) => {
    const search = searchTerm.toLowerCase();
    return (
      apellidoPaterno.toLowerCase().includes(search) ||
      apellidoMaterno.toLowerCase().includes(search) ||
      nombres.toLowerCase().includes(search) ||
      ci.includes(search)
    );
  });

  const handleConsultarKardex = (estudiante) => {
    alert(`Consultar Kardex de: ${estudiante.nombres} ${estudiante.apellidoPaterno}`);
  };

  const handleAñadirRegistro = (estudiante) => {
    alert(`Añadir registro para: ${estudiante.nombres} ${estudiante.apellidoPaterno}`);
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Consultar Kardex</h3>

      <input
        type="text"
        placeholder="Buscar estudiante por nombre o CI"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-5 border-b">Apellido Paterno</th>
            <th className="py-3 px-5 border-b">Apellido Materno</th>
            <th className="py-3 px-5 border-b">Nombres</th>
            <th className="py-3 px-5 border-b">CI</th>
            <th className="py-3 px-5 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEstudiantes.length > 0 ? (
            filteredEstudiantes.map((est) => (
              <tr key={est.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{est.apellidoPaterno}</td>
                <td className="py-3 px-5 border-b">{est.apellidoMaterno}</td>
                <td className="py-3 px-5 border-b">{est.nombres}</td>
                <td className="py-3 px-5 border-b">{est.ci}</td>
                <td className="py-3 px-5 border-b space-x-2">
                  <button
                    onClick={() => handleConsultarKardex(est)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-all border border-blue-300"
                  >
                    Consultar
                  </button>
                  <button
                    onClick={() => handleAñadirRegistro(est)}
                    className="bg-cyan-400 text-white px-4 py-2 rounded-md text-sm hover:bg-cyan-500 transition-all border border-cyan-300"
                  >
                    Añadir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No se encontraron estudiantes.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultarKardex;
