import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Process from './pages/Process';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0A0F1C] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

