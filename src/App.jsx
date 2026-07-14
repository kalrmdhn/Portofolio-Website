import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

import ExperienceDetail from "./pages/ExperienceDetail";
import ProjectRouter from "./pages/ProjectRouter";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }
  return (
    <div className="app">
      <div className="blue-glow"></div>
      <div className="purple-glow"></div>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectRouter />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
