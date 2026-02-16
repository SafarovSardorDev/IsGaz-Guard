import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-[#f8fafc] dark:bg-[#050505]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;