import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

// import styling
import './App.css';

// import components
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
