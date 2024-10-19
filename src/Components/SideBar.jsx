import React from 'react';
import data from "../../public/JSONData/Controllers.json";

const SideBar = () => {
  return (
    <div className=" fixed h-screen w-1/5 pt-20 bg-gray-800 text-white p-4"> {/* Sidebar container */}
      <h2 className="text-lg font-bold mb-4">DOCS</h2> {/* Sidebar title */}
      <ul>
         {data.map((value, index) => (
        <li key={index} className='text-center py-2 hover:bg-gray-700 transition-colors duration-300 rounded-md'>{value}</li>      
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
