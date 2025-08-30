// src/pages/Services.jsx
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "General Consultation", 
      desc: "Routine check-ups and health advice from our experienced doctors.", 
      icon: "🩺",
      details: "Our general consultation service provides comprehensive health assessments, diagnosis, and treatment plans for various medical conditions. Book an appointment for routine check-ups or specific health concerns."
    },
    { 
      title: "Surgery", 
      desc: "Safe and professional surgical services performed by skilled surgeons.", 
      icon: "🔪",
      details: "We offer a range of surgical procedures from minor outpatient surgeries to more complex operations. Our surgical team uses state-of-the-art equipment and follows strict safety protocols."
    },
    { 
      title: "Obstetrics & Gynecology", 
      desc: "Maternity and women's health services provided with care and expertise.", 
      icon: "🤰",
      details: "Our OB/GYN department provides prenatal care, delivery services, postnatal care, and comprehensive women's health services including screenings and treatments for various conditions."
    },
    { 
      title: "Vaccinations", 
      desc: "Protective immunizations for all ages to prevent various diseases.", 
      icon: "💉",
      details: "We provide immunization services for children and adults, including routine vaccinations, travel vaccines, and special immunization programs. Keep yourself and your family protected."
    },
    { 
      title: "Laboratory Services", 
      desc: "Accurate diagnostic tests and results using advanced technology.", 
      icon: "🧪",
      details: "Our modern laboratory offers a wide range of tests including blood tests, urine analysis, microbiology, pathology, and specialized diagnostic testing with quick and accurate results."
    },
    { 
      title: "Pharmacy", 
      desc: "Reliable access to prescribed medicines and pharmaceutical advice.", 
      icon: "💊",
      details: "Our in-house pharmacy provides prescribed medications, over-the-counter drugs, and professional pharmaceutical advice. We maintain a comprehensive inventory of quality medicines."
    },
    { 
      title: "Emergency Care", 
      desc: "24/7 emergency medical services for urgent health issues.", 
      icon: "🚑",
      details: "Our emergency department is staffed round the clock with experienced medical professionals ready to handle emergencies, accidents, and critical health situations."
    },
    { 
      title: "Dental Care", 
      desc: "Comprehensive dental services for oral health and hygiene.", 
      icon: "🦷",
      details: "We offer a full range of dental services including check-ups, cleanings, fillings, extractions, and more specialized dental procedures to maintain your oral health."
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 py-12">
      <div className="w-full max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Our Services</h2>
        <p className="mb-12 text-lg">Comprehensive healthcare services for you and your family</p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition bg-white shadow dark:bg-gray-800 rounded-2xl hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 mx-4 bg-white shadow-lg dark:bg-gray-800 rounded-2xl">
              <div className="mb-4 text-6xl text-center">{selectedService.icon}</div>
              <h3 className="mb-4 text-2xl font-semibold text-center">{selectedService.title}</h3>
              <p className="mb-6">{selectedService.details}</p>
              <div className="flex justify-between">
                <button 
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 mt-12 text-center bg-red-100 dark:bg-red-900 rounded-2xl">
          <h3 className="text-xl font-semibold">🚨 Emergency Services Available 24/7</h3>
          <p className="mt-2">Call us anytime at <strong>+265 911 911 911</strong> for urgent medical assistance</p>
        </div>
      </div>
    </div>
  );
}