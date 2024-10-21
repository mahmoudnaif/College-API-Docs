import React from 'react'
import { Link } from 'react-router-dom'
import whiteModeImage from "../assets/Logo-whiteMode.png"

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center pt-24 md:pt-16'>
    <div className='bg-transparent w-4/5 h-1/2 grid grid-cols-1 md:grid-cols-2 -mt-10'>
      {/* First Grid Item */}
      <div className='flex justify-center items-center'>
      <div className='w-full bg-gray-800 flex flex-col justify-between items-start p-6 rounded-lg shadow-lg pb-8'> 
        <h1 className='text-2xl font-bold text-white mb-4'>College Management System API</h1>
        <p className='text-white mb-4'>The College Management System API is a robust and scalable RESTful API designed to facilitate the management of college-related data. It provides a comprehensive suite of endpoints that streamline the handling of various entities, including students, courses, enrollments, and faculty.</p>
        <div className='flex space-x-2'>
      
                <Link to="/docs">
                <button className='bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 active:bg-indigo-800'>Docs</button>
              </Link>
              <a href="https://github.com/mahmoudnaif/College-management-system" target="_blank">
                <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 active:bg-orange-700'>GitHub</button>
              </a>
        </div>
      </div>
      </div>

      {/* Second Grid Item */}
      <div className='flex justify-center items-center mt-10 md:mt-0'>
        <img src={whiteModeImage} className='w-3/5 h-full object-contain' alt="Logo" />
      </div>
    </div>
  </div>






//     <div className="flex flex-col ">
//     <nav className="bg-gray-800  text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">College managment API Docs</h1>
//         <div>
//           <a href="#" className="mr-4 hover:text-blue-300">Home</a>
//           <a href="#" className="mr-4 hover:text-blue-300">Docs</a>
//           <a href="#" className="mr-4 hover:text-blue-300">Contact</a>
//         </div>
//       </div>
//     </nav>
//   </div>
  )
}

export default HomePage
