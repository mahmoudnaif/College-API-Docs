import React from 'react'

import APIDocBlock from "./APIDocBlock"

const APIDoc = ({apiDocs,darkmode,setactiveSection}) => {


  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setactiveSection(prev => prev+1);
  };


  return (
    <div className="w-full md:w-[75%] bg-mainpageWhite dark:bg-mainpageDark pr-4  pl-5 md:pl-14 ">
         <div className="container pt-10 pb-2 md:pb-5 ">
         <h1 className="text-2xl md:text-4xl">test</h1>
         <hr className='border-t border-black opacity-15 w-screen md:w-auto -mx-8 md:-mx-16 my-4 dark:border-white'/>
         </div>
    {apiDocs.map((doc, index) => (
      <APIDocBlock key = {index} doc={doc} darkmode={darkmode}  />
    ))}
         <div className=' container pb-10 pt-2 md:pt-4  flex  flex-col md:flex-row justify-between items-start md:items-center '>
         <p className='pb-3 md:pb-0'> Great! now you are ready to start using the API and show us your amazing front-end skills!</p>
       
          <button onClick ={handleNext} className='mt-3 md:mt-0 bg-blue-600 hover:bg-blue-500 dark:bg-[rgb(179,199,255)] w-20 h-10 rounded dark:hover:bg-[rgb(130,148,196)] dark:active:bg-[rgb(106,120,158)]'>Next</button>
        
       </div>
 </div>
    
  )
}





export default APIDoc
