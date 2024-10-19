import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <div className='z-10 fixed flex justify-between items-center p-4 flex-wrap bg-gray-800 h-16 w-screen text-white shadow-md'>
            <div className='hidden md:block'>
                <h1>College managment API Docs</h1>
            </div>
            <div>
                <ul className='flex justify-center items-center'>
                    
                <Link to="/">
                    <li  className="mr-4 hover:text-blue-300">Home</li>
                </Link>
                <Link to="/Docs">
                    <li  className="mr-4 hover:text-blue-300">Docs</li>
                </Link>
                <Link to="/Contact">
                    <li  className="mr-4 hover:text-blue-300">Contact</li>
                </Link>
                </ul>
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

export default NavBar