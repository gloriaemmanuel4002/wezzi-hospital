// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout({ darkMode, toggleDarkMode }) {
  const { currentUser } = useAuth();

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
      <footer className="py-6 text-center border-t dark:border-gray-700">
        <p className="text-sm">© {new Date().getFullYear()} Wezi Medical Centre. All rights reserved.</p>
        {currentUser && (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Logged in as: {currentUser.name} ({currentUser.role})
          </p>
        )}
      </footer>
    </div>
  );
}