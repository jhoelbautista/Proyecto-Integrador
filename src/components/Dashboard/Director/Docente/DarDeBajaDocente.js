import React, { useState } from 'react';

const mockDocentes = [
  { id: 1, apellidoPaterno: 'Salazar', apellidoMaterno: 'Mamani', nombres: 'Carlos Andrés', ci: '99887766' },
  { id: 2, apellidoPaterno: 'Quispe', apellidoMaterno: 'Flores', nombres: 'Lucía Margarita', ci: '33445566' },
  { id: 3, apellidoPaterno: 'Choque', apellidoMaterno: 'Vargas', nombres: 'Marco Antonio', ci: '22334455' },
];

const DarDeBajaDocente = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [docentes, setDocentes] = useState(mockDocentes);

  const filteredDocentes = docentes.filter(({ apellidoPaterno, apellidoMaterno, nombres, ci }) => {
    const search = searchTerm.toLowerCase();
    return (
      apellidoPaterno.toLowerCase().includes(search) ||
      apellidoMaterno.toLowerCase().includes(search) ||
      nombres.toLowerCase().includes(search) ||
      ci.includes(search)
    );
  });

  const handleDarDeBaja = (id) => {
    const docente = docentes.find(doc => doc.id === id);
    if (!window.confirm(`¿Está seguro que desea dar de baja al docente ${docente.nombres} ${docente.apellidoPaterno}? Esta acción es irreversible.`)) {
      return;
    }
    setDocentes(docentes.filter(doc => doc.id !== id));
    alert(`Docente ${docente.nombres} ${docente.apellidoPaterno} dado de baja correctamente.`);
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Dar de Baja a Docente</h3>

      <input
        type="text"
        placeholder="Buscar docente por nombre o CI"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
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
          {filteredDocentes.length > 0 ? (
            filteredDocentes.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{doc.apellidoPaterno}</td>
                <td className="py-3 px-5 border-b">{doc.apellidoMaterno}</td>
                <td className="py-3 px-5 border-b">{doc.nombres}</td>
                <td className="py-3 px-5 border-b">{doc.ci}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    onClick={() => handleDarDeBaja(doc.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-all border border-red-400"
                  >
                    Dar de Baja
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

export default DarDeBajaDocente;
