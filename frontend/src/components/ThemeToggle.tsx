import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/80 p-1 flex items-center justify-between cursor-pointer transition-colors duration-300 shadow-inner group hover:scale-[1.03] active:scale-95 theme-transition focus:outline-none focus:ring-2 focus:ring-primary-500/40"
    >
      {/* Sliding glow pill */}
      <div
        className={`absolute top-0.5 bottom-0.5 rounded-full w-7 h-7 bg-white dark:bg-primary-600 shadow-md transform transition-transform duration-300 ease-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {/* Glow effect inside the pill */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20 dark:to-white/40" />
      </div>

      {/* Sun Icon */}
      <div
        className={`z-10 flex items-center justify-center w-7 h-7 transition-all duration-300 ${
          theme === 'light' ? 'text-primary-600 font-bold scale-110' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-300'
        }`}
      >
        <Sun className="w-4 h-4" />
      </div>

      {/* Moon Icon */}
      <div
        className={`z-10 flex items-center justify-center w-7 h-7 transition-all duration-300 ${
          theme === 'dark' ? 'text-white font-bold scale-110' : 'text-slate-400 dark:text-slate-400 group-hover:text-slate-600'
        }`}
      >
        <Moon className="w-4 h-4" />
      </div>
    </button>
  );
};

export default ThemeToggle;
