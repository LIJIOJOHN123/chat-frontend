// src/App.js
import React, { useEffect, useState } from "react";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
<>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black transition px-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 transition">
        Tailwind v1 Dark Mode in React
      </h1>
      <p className="mb-6 text-gray-800 transition">
        Current mode: {darkMode ? "Dark" : "Light"}
      </p>
      <button
        onClick={toggleDarkMode}
        className="px-6 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
      >
        Toggle Dark Mode
      </button>
      <Router>
        <Routes>
          <Route exact path ="/" element={<HomePage/>}/>
          <Route exact path ="/login" element={<LoginPage/>}/>
          <Route exact path ="/register" element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </div>

</>
  );
}

export default App;
