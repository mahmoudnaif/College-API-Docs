import React from 'react'

import APIDocBlock from "./APIDocBlock"

const APIDoc = ({apiDocs,darkmode}) => {





  return (
    <div className="w-full md:w-[75%] bg-mainpageWhite dark:bg-mainpageDark ">
         <div className="container pl-5 md:pl-14 pt-10 pb-2 md:pb-5 pr-4">
         <h1 className="text-2xl md:text-4xl">test</h1>
         <hr className='border-t border-black opacity-15 w-screen md:w-auto -mx-8 md:-mx-16 my-4 dark:border-white'/>
         </div>
    {apiDocs.map((doc, index) => (
      <APIDocBlock key = {index} doc={doc} darkmode={darkmode}  />
    ))}
 </div>

  )
}





export default APIDoc
