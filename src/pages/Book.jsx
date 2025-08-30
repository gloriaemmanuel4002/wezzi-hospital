// src/pages/Book.jsx
export default function Book() {
  return (
    <div className="w-full max-w-lg p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-center">Book Appointment</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <select
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        >
          <option>General Consultation</option>
          <option>Surgery</option>
          <option>Obstetrics & Gynecology</option>
          <option>Vaccinations</option>
        </select>
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}