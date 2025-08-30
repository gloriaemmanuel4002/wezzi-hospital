// src/pages/PatientDashboard.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PatientDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("appointments");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!currentUser || currentUser.role !== "patient") {
    return (
      <div className="w-full max-w-md p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center">Access Denied</h2>
        <p className="text-center">Please log in as a patient to access this page.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Patient Dashboard</h2>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <p>Welcome, <span className="font-semibold">{currentUser.name}</span>!</p>
        <p>Patient ID: {currentUser.patientId}</p>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${activeTab === "appointments" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "medical" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("medical")}
          >
            Medical Records
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "profile" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </nav>
      </div>
      
      {activeTab === "appointments" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">My Appointments</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <p className="font-semibold">General Consultation</p>
              <p>Date: 2023-11-15</p>
              <p>Time: 10:30 AM</p>
              <p>Status: Confirmed</p>
            </div>
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <p className="font-semibold">Vaccination</p>
              <p>Date: 2023-12-01</p>
              <p>Time: 2:00 PM</p>
              <p>Status: Scheduled</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Book New Appointment
          </button>
        </div>
      )}
      
      {activeTab === "medical" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Medical Records</h3>
          <div className="p-4 border rounded-lg dark:border-gray-700">
            <p className="font-semibold">Last Visit: 2023-10-10</p>
            <p>Diagnosis: Regular check-up</p>
            <p>Prescription: Multivitamins</p>
            <p>Doctor: Dr. Banda</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Request Medical Report
          </button>
        </div>
      )}
      
      {activeTab === "profile" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
          <div className="p-4 border rounded-lg dark:border-gray-700">
            <p><span className="font-semibold">Name:</span> {currentUser.name}</p>
            <p><span className="font-semibold">Email:</span> {currentUser.email}</p>
            <p><span className="font-semibold">Phone:</span> +265 999 888 777</p>
            <p><span className="font-semibold">Address:</span> Mzuzu, Malawi</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}