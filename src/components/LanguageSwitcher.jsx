// src/components/LanguageSwitcher.jsx
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  const languages = {
    en: "English",
    ny: "Chichewa",
    sw: "Swahili",
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm">🌍</label>
      <select
        value={lang}
        onChange={handleLanguageChange}
        className="p-1 text-blue-400 bg-gray-200 rounded sm text dark:bg-gray-700"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
    </div>
  );
}