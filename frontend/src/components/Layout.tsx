import { useAuthStore } from '../store/authStore';
import { LogOut, LayoutDashboard } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex theme-transition">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 hidden md:flex flex-col theme-transition">
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800 theme-transition">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 bg-clip-text text-transparent">
            GigFlow
          </h1>
          <ThemeToggle />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a
            href="/"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 theme-transition"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-slate-800 theme-transition">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 flex items-center justify-center font-bold mr-3 theme-transition">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-slate-200 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header & Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 md:hidden flex items-center justify-between px-4 theme-transition">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 bg-clip-text text-transparent">
            GigFlow
          </h1>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="text-gray-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50 dark:bg-slate-950 theme-transition">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

