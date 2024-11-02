import React from 'react'

const NavigationSideBar = ({apiDocs,activeBlock,sectionsRef}) => {

    const scrollToSection = (sectionRef) => {
      const top = sectionRef.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
       
      };
    
  return (
    <div className=' hidden fixed md:block md:w-[25%] h-screen w-screen bg-headerWhite dark:bg-headerDark pt-20 z-10 right-0  top-0'>
 
      <h2 className="text-lg font-bold mb-4 ml-5">Navigator</h2> 
      <ul className='pl-5'>
         {apiDocs.map((doc, index) => (
        <li key={index} onClick={()=>scrollToSection(sectionsRef.current[index])} className={ activeBlock == index ? "  bg-blue-600 pl-2 dark:bg-[rgb(179,199,255)] dark:hover:bg-[rgb(130,148,196)]   text-white text-left py-2 hover:bg-blue-500 transition-colors duration-300 rounded-md" : "  cursor-pointer pl-2 text-left py-2 hover:bg-blue-500 dark:hover:bg-[rgb(130,148,196)]  transition-colors duration-300 rounded-md" } >{doc.title}</li>      
        ))}
      </ul>

    </div>
  )
}

export default NavigationSideBar
