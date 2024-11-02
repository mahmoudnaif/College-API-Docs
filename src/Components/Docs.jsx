import React, { useEffect, useState , useRef } from 'react';
import SideBar from './SideBar'
import GettingStarted from './GettingStarted';
import data from "../assets/JSONData/Controllers.json";
import APIDoc from './ApiDocsSection';
import NavigationSideBar from './NavigationSideBar';

const Docs = ({openSideBar,setOpenSideBar,darkmode}) => {
  const [activeSec,setactiveSection] = useState(0);
  const [apiDocs,setApiDocs] = useState([]);
  const [activeBlock, setActiveBlock] = useState(0);
  const sectionsRef = useRef([]); 
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
      setApiDocs([
      {title:"Introduction"}

      ])
      return;
    }
    if(activeSec > data.length){
      setactiveSection(0)
      return;
    }
    fetchData();
  }, [activeSec]); 


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBlock(entry.target.id);
          }
        });
      },
      { threshold: 1 }
    );
setTimeout(() => {
  sectionsRef.current.forEach((section) => {
    if (section) observer.observe(section);
  });
  console.log("entered")
  console.log(sectionsRef.current)
}, 1000);
  
   
  
    return () => {
      observer.disconnect();
    };
  }, [activeSec]); 
  return (
<>
{  openSideBar && <SideBar activeSec={activeSec} setactiveSection={setactiveSection} data={data} setOpenSideBar={setOpenSideBar}/>}
    <div className='flex min-h-screen pt-16 md:pl-[20%] md:w-[75%] bg-black '>
    {activeSec == 0 &&  <GettingStarted setactiveSection={setactiveSection} darkmode={darkmode} />}
    {activeSec != 0 && <APIDoc apiDocs = {apiDocs} darkmode={darkmode} setactiveSection={setactiveSection} sectionsRef={sectionsRef} />}

    </div> 
    <NavigationSideBar apiDocs={apiDocs} activeBlock={activeBlock} sectionsRef={sectionsRef} />

</>

  )
}

export default Docs
