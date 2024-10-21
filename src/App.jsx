import React from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Docs from './Components/Docs';

const App = () => {
  return (
    <>
    <NavBar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Docs" element={<Docs />} />
    <Route path="*" element={<HomePage />} /> {/* add not found page */} 
    </Routes>
    </>
  );
};

export default App;
