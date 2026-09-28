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
import Experience from './components/experience';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
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
