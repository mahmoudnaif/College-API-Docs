import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Docs from './Components/Docs';

const App = () => {
  const [openSideBar,setOpenSideBar]= useState(false);

  
  return (
    <>
    <NavBar setOpenSideBar={setOpenSideBar} />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Docs" element={<Docs setOpenSideBar={setOpenSideBar} openSideBar={openSideBar}   />} />
    <Route path="*" element={<HomePage />} /> {/* add not found page */} 
    </Routes>
    </>
  );
};

export default App;
