// src/pages/Home.jsx
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        Welcome to Wezi Medical Centre
      </h1>
      <p className="mb-6 text-lg md:text-xl">
        Your health is our priority. Book appointments and manage care online.
      </p>
      
      {currentUser ? (
        <div className="mb-8">
          <p className="mb-4">Welcome back, {currentUser.name}!</p>
          {currentUser.role === "admin" ? (
            <Link 
              to="/admin" 
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Go to Admin Dashboard
            </Link>
          ) : (
            <Link 
              to="/dashboard" 
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Go to Patient Dashboard
            </Link>
          )}
        </div>
      ) : (
        <div className="mb-8 space-x-4">
          <Link 
            to="/login" 
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="inline-block px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Register
          </Link>
        </div>
      )}
      
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-2xl">
          <div className="mb-4 text-4xl">🩺</div>
          <h3 className="mb-2 text-xl font-semibold">Quality Care</h3>
          <p>Experienced medical professionals providing comprehensive healthcare services.</p>
        </div>
        <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-2xl">
          <div className="mb-4 text-4xl">⏰</div>
          <h3 className="mb-2 text-xl font-semibold">24/7 Availability</h3>
          <p>Emergency services available round the clock for urgent medical needs.</p>
        </div>
        <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-2xl">
          <div className="mb-4 text-4xl">💻</div>
          <h3 className="mb-2 text-xl font-semibold">Online Management</h3>
          <p>Book appointments, access medical records, and communicate with doctors online.</p>
        </div>
      </div>
      
      <div className="mt-12 text-6xl">🏥</div>
    </div>
  );
}