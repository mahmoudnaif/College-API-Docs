import React, { useEffect, useState } from 'react';
import SideBar from './SideBar'
import GettingStarted from './GettingStarted';
import data from "../assets/JSONData/Controllers.json";
import APIDoc from './ApiDocsSection';

const Docs = () => {
  const [activeSec,setactiveSection] = useState(0);
  const [apiDocs,setApiDocs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`src/assets/JSONData/${data[activeSec-1].json}`);
        const response = await fetch(`src/assets/JSONData/test.json`);
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
    <SideBar activeSec={activeSec} setactiveSection={setactiveSection} data={data}/>
    <div className='flex min-h-screen pt-16 pl-[20%] '>
    {activeSec == 0 &&  <GettingStarted setactiveSection={setactiveSection}/>}
    {activeSec != 0 && <APIDoc apiDocs = {apiDocs} />}

      <div className='hidden md:block md:w-[25%]  bg-black'></div>
    </div> 
</>
  )
}

export default Docs
