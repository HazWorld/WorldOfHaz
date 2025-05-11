import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './NavBar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { useEffect } from 'react';



function App() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
  
      const scrollFraction = scrollTop / maxScroll;
  
      // HSL hue from 200 (blue) to 0 (red)
      const hue = 200 - scrollFraction * 200;
  
      document.body.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;