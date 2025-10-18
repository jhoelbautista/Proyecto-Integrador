import React, { useState } from 'react';

const mockUsuarios = [
  { ci: '12345678', nombre: 'María Elena Lopez', usuario: '', contraseña: '', tipo: '' },
  { ci: '87654321', nombre: 'Luis Alberto García', usuario: '', contraseña: '', tipo: '' },
  { ci: '11223344', nombre: 'Ana Sofía Perez', usuario: '', contraseña: '', tipo: '' },
];

const tipos = ['docente', 'director', 'padre', 'administrativo'];

const CrearNuevoUsuario = () => {
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [tipo, setTipo] = useState('');

  const handleCIChange = (value) => {
    setCi(value);
    const usuario = mockUsuarios.find((u) => u.ci === value);
    if (usuario) setNombre(usuario.nombre);
  };

  const handleNombreChange = (value) => {
    setNombre(value);
    const usuario = mockUsuarios.find((u) => u.nombre === value);
    if (usuario) setCi(usuario.ci);
  };

  const handleEnviar = () => {
    alert(`Datos enviados:\nCI: ${ci}\nNombre: ${nombre}\nUsuario: ${usuario}\nContraseña: ${contraseña}\nTipo: ${tipo}`);
  };

  const handleGuardar = () => {
    alert('Usuario guardado localmente (simulado)');
  };

  return (
    <div className="w-[900px] h-auto bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
      <h3 className="text-xl font-semibold mb-6">Crear Nuevo Usuario</h3>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block mb-2 font-medium">CI</label>
          <input
            list="ci-list"
            value={ci}
            onChange={(e) => handleCIChange(e.target.value)}
            className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escriba o seleccione un CI"
          />
          <datalist id="ci-list">
            {mockUsuarios.map((u) => (
              <option key={u.ci} value={u.ci} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="block mb-2 font-medium">Nombre</label>
          <input
            list="nombre-list"
            value={nombre}
            onChange={(e) => handleNombreChange(e.target.value)}
            className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escriba o seleccione un nombre"
          />
          <datalist id="nombre-list">
            {mockUsuarios.map((u) => (
              <option key={u.nombre} value={u.nombre} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block mb-2 font-medium">Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nombre de usuario"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Contraseña</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Contraseña"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Tipo</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Seleccionar tipo</option>
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleEnviar}
          className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition-all"
        >
          Enviar Datos
        </button>
        <button
          onClick={handleGuardar}
          className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default CrearNuevoUsuario;
