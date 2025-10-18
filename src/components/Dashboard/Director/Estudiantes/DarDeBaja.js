import React, { useState } from 'react';

const mockEstudiantes = [
  { id: 1, apellidoPaterno: 'González', apellidoMaterno: 'Pérez', nombres: 'Juan Carlos', ci: '12345678' },
  { id: 2, apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Lopez', nombres: 'María Fernanda', ci: '87654321' },
  { id: 3, apellidoPaterno: 'Martínez', apellidoMaterno: 'Gómez', nombres: 'Luis Alberto', ci: '11223344' },
];

const DarDeBaja = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estudiantes, setEstudiantes] = useState(mockEstudiantes);

  const filteredEstudiantes = estudiantes.filter(({ apellidoPaterno, apellidoMaterno, nombres, ci }) => {
    const search = searchTerm.toLowerCase();
    return (
      apellidoPaterno.toLowerCase().includes(search) ||
      apellidoMaterno.toLowerCase().includes(search) ||
      nombres.toLowerCase().includes(search) ||
      ci.includes(search)
    );
  });

  const handleDarDeBaja = (id) => {
    const estudiante = estudiantes.find(est => est.id === id);
    if (!window.confirm(`¿Está seguro que desea dar de baja a ${estudiante.nombres} ${estudiante.apellidoPaterno}? Esta acción es irreversible.`)) {
      return;
    }
    setEstudiantes(estudiantes.filter(est => est.id !== id));
    alert(`Estudiante ${estudiante.nombres} ${estudiante.apellidoPaterno} dado de baja correctamente.`);
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Dar de Baja a Estudiante</h3>

      <input
        type="text"
        placeholder="Buscar estudiante por nombre o CI"
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
          {filteredEstudiantes.length > 0 ? (
            filteredEstudiantes.map((est) => (
              <tr key={est.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b">{est.apellidoPaterno}</td>
                <td className="py-3 px-5 border-b">{est.apellidoMaterno}</td>
                <td className="py-3 px-5 border-b">{est.nombres}</td>
                <td className="py-3 px-5 border-b">{est.ci}</td>
                <td className="py-3 px-5 border-b">
                  <button
                    onClick={() => handleDarDeBaja(est.id)}
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
                No se encontraron estudiantes.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DarDeBaja;
