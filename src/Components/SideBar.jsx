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
     <div className="z-10 fixed h-screen w-screen md:w-1/5 pt-20 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">DOCS</h2> 
      <ul>
      <li onClick={ ()=>  editActiveSection(0,"Get started" )  }  key={0} className={ activeSec == 0 ? " bg-gray-600 text-center py-2 hover:bg-gray-700 transition-colors duration-300 rounded-md" : "  text-center py-2 hover:bg-gray-700 transition-colors duration-300 rounded-md" } >Get started</li>   
         {data.map((value, index) => (
        <li onClick={ ()=>  editActiveSection(index+1,value)  }  key={index+1} className={ activeSec == index+1 ? " bg-gray-600 text-center py-2 hover:bg-gray-700 transition-colors duration-300 rounded-md" : "  text-center py-2 hover:bg-gray-700 transition-colors duration-300 rounded-md" } >{value}</li>      
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
