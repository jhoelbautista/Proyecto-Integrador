import React, { useState } from 'react';

const RegistroDocenteForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({}); // para guardar valores

  const steps = [
    'Datos del Docente',
    'Datos del Nacimiento',
    'Dirección Actual',
    'Títulos',
  ];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // Manejo genérico para inputs controlados
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files : value,
    }));
  };

  const Tabs = () => (
    <div className="flex justify-between mb-6">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`flex-1 text-center p-2 border-b-4 transition-all duration-300 ${
            step === index + 1
              ? 'border-blue-500 font-bold text-blue-600'
              : 'border-gray-300 text-gray-500'
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );

  const Buttons = ({ isFinalStep }) => (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePrev}
        disabled={step === 1}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isFinalStep ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  );

  const SaveCancel = () => (
    <div className="flex justify-end space-x-4 mt-4">
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Guardar
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Cancelar
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
        <Tabs />

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="apellidoPaterno"
              placeholder="Apellido Paterno"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.apellidoPaterno || ''}
              onChange={handleChange}
            />
            <input
              name="apellidoMaterno"
              placeholder="Apellido Materno"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.apellidoMaterno || ''}
              onChange={handleChange}
            />
            <input
              name="nombres"
              placeholder="Nombres"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.nombres || ''}
              onChange={handleChange}
            />
            <input
              name="ci"
              placeholder="CI"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.ci || ''}
              onChange={handleChange}
            />
            <input
              name="expedido"
              placeholder="Expedido"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.expedido || ''}
              onChange={handleChange}
            />
            <input
              name="complemento"
              placeholder="Complemento"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.complemento || ''}
              onChange={handleChange}
            />
            <input
              name="correo"
              type="email"
              placeholder="Correo Electrónico"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.correo || ''}
              onChange={handleChange}
            />
            <input
              name="celular"
              placeholder="Celular"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.celular || ''}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="pais"
              placeholder="País"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.pais || ''}
              onChange={handleChange}
            />
            <input
              name="lugarNacimiento"
              placeholder="Lugar de Nacimiento"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.lugarNacimiento || ''}
              onChange={handleChange}
            />
            <input
              name="nroOficialia"
              placeholder="Nro de Oficialía"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.nroOficialia || ''}
              onChange={handleChange}
            />
            <input
              name="nroLibro"
              placeholder="Nro de Libro"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.nroLibro || ''}
              onChange={handleChange}
            />
            <input
              name="nroPartida"
              placeholder="Nro de Partida"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.nroPartida || ''}
              onChange={handleChange}
            />
            <input
              name="nroFolio"
              placeholder="Nro de Folio"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.nroFolio || ''}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Adjuntar Documentación
              </label>
              <input
                name="documentacionNacimiento"
                type="file"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="ciudad"
              placeholder="Ciudad / Municipio"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.ciudad || ''}
              onChange={handleChange}
            />
            <input
              name="localidad"
              placeholder="Localidad / Comunidad"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.localidad || ''}
              onChange={handleChange}
            />
            <input
              name="zona"
              placeholder="Zona / Urbanización / Villa"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.zona || ''}
              onChange={handleChange}
            />
            <input
              name="avenida"
              placeholder="Avenida / Calle"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.avenida || ''}
              onChange={handleChange}
            />
            <input
              name="numeroVivienda"
              placeholder="Número de Vivienda"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.numeroVivienda || ''}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Adjuntar Documentación
              </label>
              <input
                name="documentacionDireccion"
                type="file"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="formacion"
              placeholder="Formación Académica"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.formacion || ''}
              onChange={handleChange}
            />
            <input
              name="anioEgreso"
              placeholder="Año de Egreso"
              type="number"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.anioEgreso || ''}
              onChange={handleChange}
            />
            <input
              name="universidad"
              placeholder="Universidad o Instituto"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.universidad || ''}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Adjuntar Título
              </label>
              <input
                name="documentacionTitulo"
                type="file"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <Buttons isFinalStep={step === steps.length} />
        <SaveCancel />
      </div>
    </div>
  );
};

export default RegistroDocenteForm;
