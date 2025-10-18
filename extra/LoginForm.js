import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');

    try {
      const response = await fetch('http://localhost/sistema_academico/backend/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: username, contrasena: password }),
      });

      const data = await response.json();

      if (data.success) {
        setLoginSuccess('✅ Login exitoso');
        // ✅ Pasar datos al componente padre (App.jsx)
        onLogin(data);
      } else {
        setLoginError(`❌ ${data.error}`);
      }
    } catch (error) {
      setLoginError('❌ Error al conectar con el servidor.');
    }
  };

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bienvenido</h1>
        <p className="text-gray-600 mt-2">Sistema de Gestión Académica</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-16"
              placeholder="Ingresa tu contraseña"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
        >
          Iniciar sesión
        </button>

        {loginError && (
          <div className="mt-2 text-center text-xs text-red-600">
            {loginError}
          </div>
        )}
        {loginSuccess && (
          <div className="mt-2 text-center text-xs text-green-600">
            {loginSuccess}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
