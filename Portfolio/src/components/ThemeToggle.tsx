import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, ThemePreference } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme, toggleTheme, isSystemPreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {/* Primary 1-Click Toggle Button */}
      <div className="flex items-center rounded-full border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] p-0.5 shadow-2xs">
        <button
          id="theme-toggle-btn"
          type="button"
          onClick={toggleTheme}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="relative flex items-center justify-center w-8 h-8 rounded-full text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#1C2638] transition-colors cursor-pointer"
          aria-label={`Current theme is ${resolvedTheme}. Click to toggle theme.`}
          title={`Theme: ${theme === 'system' ? 'System' : theme} (${resolvedTheme}). Right-click or use menu for options.`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {resolvedTheme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="text-[#82BAF6]"
              >
                <Moon className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 45, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -45, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="text-[#E88AA8]"
              >
                <Sun className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Small dropdown trigger to easily select System / Light / Dark */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="px-1.5 py-1 text-[10px] font-mono font-medium text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white rounded-r-full transition-colors cursor-pointer"
          aria-label="Select theme mode"
          title="Choose Light, Dark, or Device Default"
        >
          {theme === 'system' ? (
            <span className="flex items-center gap-0.5">
              <Laptop className="w-2.5 h-2.5 opacity-80" />
              <span className="text-[9px] uppercase tracking-tighter">Auto</span>
            </span>
          ) : (
            <span className="text-[9px] uppercase tracking-wider">{theme}</span>
          )}
        </button>
      </div>

      {/* Theme selection menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 text-xs"
          >
            <div className="px-2.5 py-1.5 text-[10px] font-mono text-[#667085] dark:text-[#94A3B8] border-b border-[#F1F5F9] dark:border-[#1E293B] mb-1">
              Select Appearance
            </div>

            <button
              type="button"
              onClick={() => {
                setTheme('light');
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#FFF1F5] dark:bg-[#202B3B] text-[#172033] dark:text-[#F1F5F9] font-medium'
                  : 'text-[#667085] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#1A2332] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-[#E88AA8]" />
                Light
              </span>
              {theme === 'light' && <Check className="w-3.5 h-3.5 text-[#E88AA8]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setTheme('dark');
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#EAF3FF] dark:bg-[#1C2638] text-[#172033] dark:text-[#F1F5F9] font-medium'
                  : 'text-[#667085] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#1A2332] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Moon className="w-3.5 h-3.5 text-[#82BAF6]" />
                Dark
              </span>
              {theme === 'dark' && <Check className="w-3.5 h-3.5 text-[#82BAF6]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setTheme('system');
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                theme === 'system'
                  ? 'bg-[#F1F5F9] dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] font-medium'
                  : 'text-[#667085] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#1A2332] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-[#667085] dark:text-[#94A3B8]" />
                Device Default
              </span>
              {theme === 'system' && <Check className="w-3.5 h-3.5 text-[#667085] dark:text-[#94A3B8]" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
