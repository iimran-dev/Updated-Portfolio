'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

export function ThemeToggle({ className = '', size = 'md' }) {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const icons = {
    light: <Sun size={iconSize[size]} />,
    dark: <Moon size={iconSize[size]} />,
    system: <Monitor size={iconSize[size]} />,
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center rounded-xl border-2 border-border-primary
        bg-bg-input text-text-primary neo-shadow-sm
        hover:neo-shadow
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2
        ${sizeClasses[size]} ${className}
      `}
      aria-label={`Current theme: ${theme}. Click to toggle.`}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: 'transform' }}
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'absolute' }}
      >
        {icons[theme]}
      </motion.div>
    </motion.button>
  );
}
