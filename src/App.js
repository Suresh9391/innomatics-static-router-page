import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Achievements from './pages/Achievements';
import Classrooms from './pages/Classrooms';
import Internship from './pages/Internship';
import Contact from './pages/Contact';
import Follow from  './pages/Follow';
import NotFound from './pages/NotFound'; // Import NotFound page
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router> 
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="Classrooms" element={<Classrooms />} />
          <Route path="Internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Follow"  element={<Follow />} />
          <Route path="*" element={<NotFound />} /> {/* Wildcard Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


