import React, { useState } from 'react';

const usuariosEjemplo = [
  { ci: '12345678', nombre: 'Juan Pérez', tipo: 'docente', estado: 'activo', usuario: 'juanp', contrasena: '1234' },
  { ci: '87654321', nombre: 'María López', tipo: 'padre', estado: 'inactivo', usuario: 'marial', contrasena: 'abcd' },
  { ci: '11223344', nombre: 'Carlos Gómez', tipo: 'administrativo', estado: 'activo', usuario: 'carlosg', contrasena: 'pass' },
];

const RestablecerCredenciales = () => {
  const [busqueda, setBusqueda] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [formulario, setFormulario] = useState({ ci: '', nombre: '', usuario: '', contrasena: '', tipo: '', estado: '' });
  const [editable, setEditable] = useState(false);

  const usuariosFiltrados = usuariosEjemplo.filter(
    (u) => u.nombre.toLowerCase().includes(busqueda.toLowerCase()) || u.ci.includes(busqueda)
  );

  const handleSeleccion = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setFormulario({ ...usuario });
    setEditable(false); // Reiniciar editable al seleccionar
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleRestablecer = () => {
    setEditable(true); // Habilitar edición
  };

  const handleGuardar = () => {
    console.log('Credenciales actualizadas:', formulario);
    alert('Credenciales actualizadas correctamente.');
    setEditable(false); // Bloquear de nuevo después de guardar
  };

  return (
    <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Restablecer Credenciales</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o CI..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <table className="w-full table-auto border mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">CI</th>
            <th className="p-2 border">Tipo</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((u, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-2 border">{u.nombre}</td>
              <td className="p-2 border">{u.ci}</td>
              <td className="p-2 border capitalize">{u.tipo}</td>
              <td className="p-2 border capitalize">{u.estado}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleSeleccion(u)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
                >
                  Restablecer Credenciales
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {usuarioSeleccionado && (
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-4">Formulario de Usuario</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="ci"
              value={formulario.ci}
              disabled
              className="p-2 border rounded bg-gray-100"
              placeholder="CI"
            />

            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              disabled
              className="p-2 border rounded bg-gray-100"
              placeholder="Nombre"
            />

            <input
              type="text"
              name="usuario"
              value={formulario.usuario}
              onChange={handleChange}
              disabled={!editable}
              className={`p-2 border rounded ${editable ? '' : 'bg-gray-100'}`}
              placeholder="Usuario"
            />

            <input
              type="text"
              name="contrasena"
              value={formulario.contrasena}
              onChange={handleChange}
              disabled={!editable}
              className={`p-2 border rounded ${editable ? '' : 'bg-gray-100'}`}
              placeholder="Contraseña"
            />

            <select
              name="tipo"
              value={formulario.tipo}
              disabled
              className="p-2 border rounded bg-gray-100"
            >
              <option value="">Seleccionar tipo</option>
              <option value="docente">Docente</option>
              <option value="director">Director</option>
              <option value="padre">Padre</option>
              <option value="administrativo">Administrativo</option>
            </select>

            <select
              name="estado"
              value={formulario.estado}
              disabled
              className="p-2 border rounded bg-gray-100"
            >
              <option value="">Seleccionar estado</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleRestablecer}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Restablecer Credenciales
            </button>

            <button
              onClick={handleGuardar}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              disabled={!editable}
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestablecerCredenciales;
