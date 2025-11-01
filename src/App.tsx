import './App.css'
import React from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-[#0D0D0D] text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App
