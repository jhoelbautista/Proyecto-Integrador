import React, { useState } from 'react';

const mockDocentes = [
  { id: 1, apellidoPaterno: 'Sánchez', apellidoMaterno: 'Ramírez', nombres: 'Carlos Alberto', ci: '45678912' },
  { id: 2, apellidoPaterno: 'Fernández', apellidoMaterno: 'Gutiérrez', nombres: 'Ana María', ci: '78945612' },
  { id: 3, apellidoPaterno: 'López', apellidoMaterno: 'Martínez', nombres: 'Jorge Luis', ci: '32165487' },
  // Puedes agregar más datos de prueba
];

const ActualizarDatosDocente = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocentes = mockDocentes.filter(({ apellidoPaterno, apellidoMaterno, nombres, ci }) => {
    const search = searchTerm.toLowerCase();
    return (
      apellidoPaterno.toLowerCase().includes(search) ||
      apellidoMaterno.toLowerCase().includes(search) ||
      nombres.toLowerCase().includes(search) ||
      ci.includes(search)
    );
  });

  const handleActualizarClick = (docente) => {
    alert(`Actualizar datos de: ${docente.nombres} ${docente.apellidoPaterno}`);
    // Aquí puedes abrir un modal o navegar a un formulario para actualizar
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Actualizar Datos de Docentes</h3>

      <input
        type="text"
        placeholder="Buscar docente por nombre o CI"
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
          {filteredDocentes.length > 0 ? (
            filteredDocentes.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{doc.apellidoPaterno}</td>
                <td className="py-3 px-5 border-b">{doc.apellidoMaterno}</td>
                <td className="py-3 px-5 border-b">{doc.nombres}</td>
                <td className="py-3 px-5 border-b">{doc.ci}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    onClick={() => handleActualizarClick(doc)}
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
                No se encontraron docentes.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActualizarDatosDocente;
