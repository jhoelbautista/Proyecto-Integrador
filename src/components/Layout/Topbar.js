import React from 'react';

const Topbar = ({ user }) => {
  if (!user) return null;

  const displayName = user.name || 'Usuario';
  const userInitial = displayName.charAt(0).toUpperCase();

  return (
    <div className="bg-white shadow-sm fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-10">
      <div className="text-gray-800 font-semibold text-lg">Unidad Educativa Luis Espinal Tarde De Collpani</div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-gray-700 font-medium">{displayName}</div>
          <div className="text-xs text-gray-500">{user.role}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          {userInitial}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
