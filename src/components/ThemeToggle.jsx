// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 text-blue-600 bg-white rounded-lg shadow dark:bg-gray-700 dark:text-yellow-300"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}