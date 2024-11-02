import React ,{useState}from 'react';

const SideBar = ({activeSec,setactiveSection,data,setOpenSideBar}) => {


  
    const editActiveSection = (index,textValue)=>{
      setactiveSection(index)
      if( window.innerWidth < 768){
        setOpenSideBar(false);
      }
      console.log(index)
      console.log(textValue)
    }





  return (
     <div className="z-10 fixed h-screen w-screen md:w-1/5 pt-20 bg-headerWhite dark:bg-headerDark">
      <h2 className="text-lg font-bold mb-4 ml-5">DOCS</h2> 
      <ul>
      <li onClick={ ()=>  editActiveSection(0,"Get started" )  }  key={0} className={ activeSec == 0 ? " bg-blue-600  dark:bg-[rgb(179,199,255)] dark:hover:bg-[rgb(130,148,196)]   text-white text-center py-2 hover:bg-blue-500 transition-colors duration-300 rounded-md" : " cursor-pointer text-center py-2 hover:bg-blue-500 dark:hover:bg-[rgb(130,148,196)]  transition-colors duration-300 rounded-md" } >Get started</li>   
         {data.map((value, index) => (
        <li  onClick={ ()=>  editActiveSection(index+1,value)  }  key={index+1} className={ activeSec == index+1 ? "  bg-blue-600  dark:bg-[rgb(179,199,255)] dark:hover:bg-[rgb(130,148,196)]   text-white text-center py-2 hover:bg-blue-500 transition-colors duration-300 rounded-md" : "  cursor-pointer text-center py-2 hover:bg-blue-500 dark:hover:bg-[rgb(130,148,196)]  transition-colors duration-300 rounded-md" } >{value}</li>      
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
