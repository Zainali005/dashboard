// ThemeToggleButton.js
import React from 'react';
import { useThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
};

export default ThemeToggleButton;
