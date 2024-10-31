import React, { useEffect, useState } from 'react';
import SideBar from './SideBar'
import GettingStarted from './GettingStarted';
import data from "../assets/JSONData/Controllers.json";
import APIDoc from './ApiDocsSection';

const Docs = ({openSideBar,setOpenSideBar,darkmode}) => {
  const [activeSec,setactiveSection] = useState(0);
  const [apiDocs,setApiDocs] = useState([]);
  

  const isDesktop = () => window.innerWidth >= 768;

  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      if (isDesktop()) {
        setOpenSideBar(true); // Show sidebar when transitioning to desktop
      } else {
        setOpenSideBar(false); // Hide sidebar when transitioning to mobile
      }
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Trigger the handler on initial render to set correct state
    handleResize(); 

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`src/assets/JSONData/${data[activeSec-1].json}`);
        const response = await fetch(`src/assets/JSONData/${data[activeSec-1]}.json`);
        console.log(`src/assets/JSONData/${data[activeSec-1]}`)
        const result = await response.json();
        console.log(result)
        setApiDocs(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (activeSec === 0) {
      return;
    }
    fetchData();
  }, [activeSec]); 

  return (
<>
{  openSideBar && <SideBar activeSec={activeSec} setactiveSection={setactiveSection} data={data} setOpenSideBar={setOpenSideBar}/>}
    <div className='flex min-h-screen pt-16 md:pl-[20%]  '>
    {activeSec == 0 &&  <GettingStarted setactiveSection={setactiveSection}/>}
    {activeSec != 0 && <APIDoc apiDocs = {apiDocs} darkmode={darkmode} />}

      <div className='hidden md:block md:w-[25%]  bg-black '></div>
    </div> 
</>
  )
}

export default Docs
