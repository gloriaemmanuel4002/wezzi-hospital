// src/pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (email === "admin@weziclinic.com" && password === "admin123") {
      login({ 
        email, 
        role: "admin", 
        name: "Clinic Administrator" 
      });
      navigate("/admin");
    } else if (email === "patient@weziclinic.com" && password === "patient123") {
      login({ 
        email, 
        role: "patient", 
        name: "John Patient",
        patientId: "PT001"
      });
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try admin@weziclinic.com/admin123 or patient@weziclinic.com/patient123");
    }
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
      {error && <div className="p-2 mb-4 text-center text-red-500 bg-red-100 rounded">{error}</div>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <p className="text-sm text-center">Demo credentials:</p>
        <p className="text-xs text-center">Admin: admin@weziclinic.com / admin123</p>
        <p className="text-xs text-center">Patient: patient@weziclinic.com / patient123</p>
      </div>
    </div>
  );
}