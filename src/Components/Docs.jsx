import React from 'react'
import SideBar from './SideBar'

const Docs = () => {
  return (
<>
    <SideBar />
    <div className='flex min-h-screen pt-16 pl-[20%] bg-cyan-100'>
      <div className=' w-full md:w-[75%] bg-slate-900'></div>
      <div className='hidden md:block md:w-[25%]  bg-black'></div>
    </div> 
</>
  )
}

export default Docs
