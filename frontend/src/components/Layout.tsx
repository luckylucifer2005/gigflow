import { useAuthStore } from '../store/authStore';
import { LogOut, LayoutDashboard } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
            GigFlow
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-primary-50 text-primary-700">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold mr-3">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate w-32">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header & Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 md:hidden flex items-center justify-between px-4">
           <h1 className="text-xl font-bold text-primary-600">GigFlow</h1>
           <button onClick={handleLogout} className="text-gray-500 hover:text-red-600">
             <LogOut className="w-5 h-5" />
           </button>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
