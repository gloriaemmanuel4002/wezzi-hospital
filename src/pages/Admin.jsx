// src/pages/Admin.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!currentUser || currentUser.role !== "admin") {
    return (
      <div className="w-full max-w-md p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center">Access Denied</h2>
        <p className="text-center">Please log in as an administrator to access this page.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <p>Welcome, <span className="font-semibold">{currentUser.name}</span>!</p>
        <p>Last login: Today at 09:45 AM</p>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${activeTab === "overview" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "appointments" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "patients" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("patients")}
          >
            Patients
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "doctors" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            onClick={() => setActiveTab("doctors")}
          >
            Doctors
          </button>
        </nav>
      </div>
      
      {activeTab === "overview" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Clinic Overview</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 bg-blue-100 shadow dark:bg-blue-900 rounded-xl">
              <h3 className="mb-2 text-lg font-bold">Appointments Today</h3>
              <p className="text-3xl font-bold">24</p>
              <p>8 upcoming in next hour</p>
            </div>
            <div className="p-6 bg-green-100 shadow dark:bg-green-900 rounded-xl">
              <h3 className="mb-2 text-lg font-bold">Patients</h3>
              <p className="text-3xl font-bold">1,248</p>
              <p>12 new this week</p>
            </div>
            <div className="p-6 bg-red-100 shadow dark:bg-red-900 rounded-xl">
              <h3 className="mb-2 text-lg font-bold">Doctors Available</h3>
              <p className="text-3xl font-bold">8/12</p>
              <p>4 on leave</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Recent Activities</h4>
            <div className="border rounded-lg dark:border-gray-700">
              <div className="p-4 border-b dark:border-gray-700">
                <p>Dr. Mwale completed appointment with Patient #PT0345</p>
                <p className="text-sm text-gray-500">10:30 AM</p>
              </div>
              <div className="p-4 border-b dark:border-gray-700">
                <p>New appointment booked for Vaccination</p>
                <p className="text-sm text-gray-500">9:45 AM</p>
              </div>
              <div className="p-4">
                <p>Lab results for Patient #PT0212 are ready</p>
                <p className="text-sm text-gray-500">8:15 AM</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "appointments" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Manage Appointments</h3>
          <div className="mb-4 flex justify-between">
            <input 
              type="text" 
              placeholder="Search appointments..." 
              className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + New Appointment
            </button>
          </div>
          <div className="border rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-5 p-4 font-semibold bg-gray-100 dark:bg-gray-700">
              <div>Patient</div>
              <div>Service</div>
              <div>Date & Time</div>
              <div>Doctor</div>
              <div>Status</div>
            </div>
            <div className="grid grid-cols-5 p-4 border-t dark:border-gray-700">
              <div>John Banda</div>
              <div>Consultation</div>
              <div>Today, 11:30 AM</div>
              <div>Dr. Mwale</div>
              <div><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm dark:bg-green-900 dark:text-green-200">Confirmed</span></div>
            </div>
            <div className="grid grid-cols-5 p-4 border-t dark:border-gray-700">
              <div>Mary Phiri</div>
              <div>Vaccination</div>
              <div>Today, 2:00 PM</div>
              <div>Dr. Jere</div>
              <div><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm dark:bg-yellow-900 dark:text-yellow-200">Pending</span></div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "patients" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Patient Management</h3>
          <div className="mb-4 flex justify-between">
            <input 
              type="text" 
              placeholder="Search patients..." 
              className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + New Patient
            </button>
          </div>
          <div className="border rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-5 p-4 font-semibold bg-gray-100 dark:bg-gray-700">
              <div>ID</div>
              <div>Name</div>
              <div>Phone</div>
              <div>Last Visit</div>
              <div>Actions</div>
            </div>
            <div className="grid grid-cols-5 p-4 border-t dark:border-gray-700">
              <div>PT0345</div>
              <div>John Banda</div>
              <div>+265 888 777 666</div>
              <div>2023-10-15</div>
              <div>
                <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm dark:bg-blue-900 dark:text-blue-200 mr-2">
                  View
                </button>
                <button className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm dark:bg-green-900 dark:text-green-200">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "doctors" && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Doctor Management</h3>
          <div className="mb-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + Add Doctor
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <div className="mb-4 text-4xl">👨‍⚕️</div>
              <h4 className="font-semibold">Dr. Mwale</h4>
              <p>General Physician</p>
              <p className="mt-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm dark:bg-green-900 dark:text-green-200">Available</span></p>
            </div>
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <div className="mb-4 text-4xl">👩‍⚕️</div>
              <h4 className="font-semibold">Dr. Jere</h4>
              <p>Pediatrician</p>
              <p className="mt-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm dark:bg-green-900 dark:text-green-200">Available</span></p>
            </div>
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <div className="mb-4 text-4xl">👨‍⚕️</div>
              <h4 className="font-semibold">Dr. Banda</h4>
              <p>Surgeon</p>
              <p className="mt-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm dark:bg-yellow-900 dark:text-yellow-200">In Surgery</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}