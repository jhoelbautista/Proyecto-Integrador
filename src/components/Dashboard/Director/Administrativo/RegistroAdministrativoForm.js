import React, { useState } from 'react';

const RegistroAdministrativoForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    'Datos Personales',
    'Datos de Nacimiento',
    'Dirección Actual',
    'Documentación',
  ];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

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
              ? 'border-green-500 font-bold text-green-600'
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
        onClick={isFinalStep ? handleSubmit : handleNext}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {isFinalStep ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  );

  const handleSubmit = () => {
    console.log('Datos administrativos:', formData);
    alert('Administrativo registrado correctamente');
    // Aquí puedes enviar formData al backend con fetch o axios
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[900px] h-[750px] bg-white shadow-xl p-10 rounded-2xl overflow-y-auto">
        <Tabs />

        {/* Paso 1: Datos personales */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['apellidoPaterno', 'Apellido Paterno'],
              ['apellidoMaterno', 'Apellido Materno'],
              ['nombres', 'Nombres'],
              ['ci', 'CI'],
              ['expedido', 'Expedido'],
              ['complemento', 'Complemento'],
              ['correo', 'Correo Electrónico', 'email'],
              ['celular', 'Celular'],
              ['cargo', 'Cargo Administrativo'],
            ].map(([name, placeholder, type = 'text']) => (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData[name] || ''}
                onChange={handleChange}
              />
            ))}
          </div>
        )}

        {/* Paso 2: Datos nacimiento */}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['pais', 'País de Nacimiento'],
              ['lugarNacimiento', 'Lugar de Nacimiento'],
              ['fechaNacimiento', 'Fecha de Nacimiento', 'date'],
            ].map(([name, placeholder, type = 'text']) => (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData[name] || ''}
                onChange={handleChange}
              />
            ))}
          </div>
        )}

        {/* Paso 3: Dirección */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['ciudad', 'Ciudad / Municipio'],
              ['zona', 'Zona / Urbanización'],
              ['avenida', 'Avenida / Calle'],
              ['numeroVivienda', 'Nro de Vivienda'],
            ].map(([name, placeholder]) => (
              <input
                key={name}
                name={name}
                placeholder={placeholder}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData[name] || ''}
                onChange={handleChange}
              />
            ))}
          </div>
        )}

        {/* Paso 4: Documentación */}
        {step === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm text-gray-600">Adjuntar CI escaneado</label>
              <input
                name="ciArchivo"
                type="file"
                className="border border-gray-300 rounded px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600">Adjuntar Currículum</label>
              <input
                name="curriculumArchivo"
                type="file"
                className="border border-gray-300 rounded px-3 py-2"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <Buttons isFinalStep={step === steps.length} />
      </div>
    </div>
  );
};

export default RegistroAdministrativoForm;
