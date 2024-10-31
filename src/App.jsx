import React, { useState,useEffect } from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Docs from './Components/Docs';

const App = () => {
  const [openSideBar,setOpenSideBar]= useState(false);
  const [darkmode,setDarkMode] = useState(false)
  useEffect(()=>{
    const checkUserPreference = () => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    };

    checkUserPreference();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkUserPreference);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', checkUserPreference);
    };




  },[])

  
  return (
    <div className={darkmode && "dark text-white"}>
    <NavBar setOpenSideBar={setOpenSideBar} />
    <Routes>
    <Route path="/" element={<HomePage darkmode={darkmode}/>} />
    <Route path="/Docs" element={<Docs setOpenSideBar={setOpenSideBar} openSideBar={openSideBar}  darkmode={darkmode} />} />
    <Route path="*" element={<HomePage />} /> {/* add not found page */} 
    </Routes>
      <button onClick={()=> setDarkMode(prev => !prev)} className='fixed w-10 h-10 bottom-10 right-10 text-xs bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold'>
        {darkmode ? "LHT" : 'DRK'}      
      </button>
    </div>
    
  );
};

export default App;
