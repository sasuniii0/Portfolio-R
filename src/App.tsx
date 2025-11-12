import './App.css'
import React from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import HireMe from './components/hireMe';
import SkillsEducation from './components/skill';
import BlogExploring from './components/blogs';
import Footer from './components/footer';
import Projects from './components/projects';
import Services from './components/services';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-[#0D0D0D] text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services/>
      <SkillsEducation />
      <Projects />
      <BlogExploring/>
      <HireMe />
      <Footer/>
    </div>
  );
};

export default App
