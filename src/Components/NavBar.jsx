import React from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
const NavBar = ({setOpenSideBar}) => {
    
  return (
        <div className='pl-5 pr-2 md:px-10 z-20 fixed flex justify-between items-center flex-wrap bg-headerWhite dark:bg-headerDark h-16 w-screen shadow-md'>
           
            <div className="md:hidden cursor-pointer ">
                    <CiMenuBurger size={30} onClick={()=>setOpenSideBar(prev=>!prev)} />
            </div>
            <div>
                <ul className='flex justify-center items-center'>
                    
                <Link to="/">
                    <li  className="mr-4 hover:text-blue-300">Home</li>
                </Link>
                <Link to="/College-API-Docs/Docs">
                    <li  className="mr-4 hover:text-blue-300">Docs</li>
                </Link>
                <Link to="/College-API-Docs/Contact">
                    <li  className="mr-4 hover:text-blue-300">Contact</li>
                </Link>
                </ul>
            </div>
            <div className='hidden md:block'>
                <h1>College managment API Docs</h1>
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
