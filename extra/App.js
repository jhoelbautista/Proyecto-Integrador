import React, { useState } from 'react';
import LoginForm from './components/Auth/LoginForm';
import Sidebar from './components/Layout/Sidebar';
import AdminSidebar from './components/Layout/AdminSidebar';
import TeacherSidebar from './components/Layout/TeacherSidebar';
import ParentSidebar from './components/Layout/ParentSidebar';
import Topbar from './components/Layout/Topbar';
import ContentPanel from './components/Dashboard/ContentPanel';
import AdminContentPanel from './components/Dashboard/AdminContentPanel';
import TeacherContentPanel from './components/Dashboard/TeacherContentPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeItem, setActiveItem] = useState('');

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveItem('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  const renderSidebar = () => {
    const rol = currentUser?.rol?.toLowerCase();
    switch (rol) {
      case 'director':
        return <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} onLogout={handleLogout} />;
      case 'administrador':
        return <AdminSidebar activeItem={activeItem} setActiveItem={setActiveItem} onLogout={handleLogout} />;
      case 'docente':
        return <TeacherSidebar activeItem={activeItem} setActiveItem={setActiveItem} onLogout={handleLogout} />;
      case 'padre':
        return <ParentSidebar activeItem={activeItem} setActiveItem={setActiveItem} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  const renderContentPanel = () => {
    const rol = currentUser?.rol?.toLowerCase();
    switch (rol) {
      case 'administrador':
        return <AdminContentPanel activeItem={activeItem} />;
      case 'docente':
        return <TeacherContentPanel activeItem={activeItem} />;
      default:
        return <ContentPanel activeItem={activeItem} userRole={currentUser.rol} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {renderSidebar()}
      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 z-50">
          <Topbar user={currentUser} />
        </div>
        <div className="pt-16 px-4">
          {renderContentPanel()}
        </div>
      </div>
    </div>
  );
};

export default App;
