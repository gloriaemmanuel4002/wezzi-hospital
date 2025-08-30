// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-6xl space-y-8">
        <h2 className="text-3xl font-bold text-center md:text-5xl">Find Us</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="h-96">
            <iframe
              className="w-full h-full shadow rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.146712365885!2d34.00788957599636!3d-11.45889107706126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191d3a5c9bc631b7%3A0x2f9919282d2e6b1d!2sMzuzu%20Central%20Hospital!5e0!3m2!1sen!2smw!4v1699876543210!5m2!1sen!2smw"
              allowFullScreen=""
              loading="lazy"
              title="Wezi Medical Centre Location"
            ></iframe>
          </div>

          <div className="p-6 bg-white shadow-md dark:bg-gray-800 rounded-2xl">
            <h3 className="mb-4 text-xl font-semibold">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-6 mt-8 text-center md:grid-cols-3">
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl">📍</div>
            <h3 className="my-2 font-semibold">Address</h3>
            <p>Mzuzu City Center</p>
            <p>Northern Region, Malawi</p>
          </div>
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl">📞</div>
            <h3 className="my-2 font-semibold">Phone</h3>
            <p>+265 123 456 789</p>
            <p>+265 987 654 321</p>
          </div>
          <div className="p-4 bg-white shadow dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl">✉️</div>
            <h3 className="my-2 font-semibold">Email</h3>
            <p>info@wezi-medical.com</p>
            <p>support@wezi-medical.com</p>
          </div>
        </div>

        <div className="p-6 mt-8 text-center bg-red-100 dark:bg-red-900 rounded-2xl">
          <h3 className="text-xl font-semibold">🚨 Emergency Contact</h3>
          <p className="mt-2 text-red-600 dark:text-red-200">For emergencies, call: <strong>+265 911 911 911</strong></p>
          <p className="mt-2">Available 24/7</p>
        </div>
      </div>
    </div>
  );
}