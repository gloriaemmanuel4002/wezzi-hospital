// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, User, LogOut } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="text-white bg-blue-600 shadow-md ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">Wezi Clinic</Link>

          <div className="items-center hidden space-x-6 md:flex">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/book" className="hover:underline">Book</Link>
            
            {currentUser ? (
              <>
                {currentUser.role === "admin" ? (
                  <Link to="/admin" className="hover:underline">Admin</Link>
                ) : (
                  <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                )}
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>{currentUser.name}</span>
                  <button 
                    onClick={handleLogout}
                    className="p-2 rounded-full hover:bg-blue-500"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Register</Link>
              </>
            )}

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-blue-500">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-blue-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <LanguageSwitcher />
            <button onClick={() => setMenuOpen(!menuOpen)} className="ml-2">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="px-4 pt-2 pb-4 space-y-2 bg-blue-700 md:hidden">
          <Link to="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="block hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="block hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/book" className="block hover:underline" onClick={() => setMenuOpen(false)}>Book</Link>
          
          {currentUser ? (
            <>
              {currentUser.role === "admin" ? (
                <Link to="/admin" className="block hover:underline" onClick={() => setMenuOpen(false)}>Admin</Link>
              ) : (
                <Link to="/dashboard" className="block hover:underline" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              )}
              <div className="pt-2 border-t border-blue-600">
                <div className="flex items-center py-2">
                  <User size={18} className="mr-2" />
                  <span>{currentUser.name}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full py-2"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:underline" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block hover:underline" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}