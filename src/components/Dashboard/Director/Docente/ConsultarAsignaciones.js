import React, { useState } from 'react';

const mockAsignaciones = [
  { id: 1, docente: 'Juan Pérez', curso: 'Matemáticas', paralelo: 'A' },
  { id: 2, docente: 'María López', curso: 'Lenguaje', paralelo: 'B' },
  { id: 3, docente: 'Luis Gómez', curso: 'Ciencias', paralelo: 'C' },
  // Puedes agregar más datos aquí
];

const ConsultarAsignaciones = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAsignaciones = mockAsignaciones.filter(({ docente, curso, paralelo }) => {
    const search = searchTerm.toLowerCase();
    return (
      docente.toLowerCase().includes(search) ||
      curso.toLowerCase().includes(search) ||
      paralelo.toLowerCase().includes(search)
    );
  });

  const handleAsignacionesClick = (asignacion) => {
    alert(`Ver asignaciones para: ${asignacion.docente} - Curso: ${asignacion.curso} - Paralelo: ${asignacion.paralelo}`);
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Consultar Asignaciones</h3>

      <input
        type="text"
        placeholder="Buscar por docente, curso o paralelo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded w-full"
      />

      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-5 border-b">Docente</th>
            <th className="py-3 px-5 border-b">Curso</th>
            <th className="py-3 px-5 border-b">Paralelo</th>
            <th className="py-3 px-5 border-b">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredAsignaciones.length > 0 ? (
            filteredAsignaciones.map((asignacion) => (
              <tr key={asignacion.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{asignacion.docente}</td>
                <td className="py-3 px-5 border-b">{asignacion.curso}</td>
                <td className="py-3 px-5 border-b">{asignacion.paralelo}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    onClick={() => handleAsignacionesClick(asignacion)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Asignaciones
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No se encontraron asignaciones.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultarAsignaciones;
