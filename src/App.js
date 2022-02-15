import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/documentation' element={<Documentation/>} />
          <Route path='/team' element={<Team/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;