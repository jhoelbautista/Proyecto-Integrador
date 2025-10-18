import React, { useState } from 'react';

const VirtualAssistant = ({ setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { id: 'grades', label: 'Ver notas de mis hijos', icon: '📊' },
    { id: 'attendance', label: 'Consultar asistencia', icon: '📅' },
    { id: 'pending-tasks', label: 'Tareas pendientes', icon: '📝' }
  ];

  const handleActionClick = (itemId) => {
    setActiveItem(itemId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl w-64 mb-4 overflow-hidden">
          <div className="bg-blue-600 text-white p-3">
            <h3 className="font-medium">¿En qué puedo ayudarte hoy?</h3>
          </div>
          <ul className="divide-y divide-gray-100">
            {quickActions.map((action) => (
              <li key={action.id}>
                <button
                  onClick={() => handleActionClick(action.id)}
                  className="w-full text-left p-3 hover:bg-blue-50 flex items-center gap-2 transition-colors"
                >
                  <span className="text-lg">{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition"
      >
        🤖
      </button>
    </div>
  );
};

export default VirtualAssistant;
