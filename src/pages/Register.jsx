// src/pages/Register.jsx
export default function Register() {
  return (
    <div className="w-full max-w-md p-8 mx-auto bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
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
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}