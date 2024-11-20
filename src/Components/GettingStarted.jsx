import React ,{useState}from 'react'
import CodeSnippet from './CodeSnippet'
import connectionStringImage from '../assets/images/ConnectionStringConfig.png'
import redis_ip from '../assets/images/redisIp.png'
import changeRedisIp from '../assets/images/ChangeIpReds.png' 
const GettingStarted = ({setactiveSection,darkmode,sectionsRef}) => {

  const cloneRepo = 'git clone https://github.com/mahmoudnaif/College-management-system.git';
  const installRedis ='sudo apt-get install redis'
  const runRedis= 'sudo service redis-server start'

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setactiveSection(1);
  };
  return (
    
    <div  className= "w-full md:w-[100%] bg-mainpageWhite dark:bg-mainpageDark p-10 pt-0 md:p-20 md:pt-0">
      
     <div ref={(el) => (sectionsRef.current[0] = el)} id={0}  className='  pt-5 md:pt-10  '>
      <h1 className='text-lg md:text-4xl '>Introduction</h1>
      <hr className='border-t border-black opacity-15 w-screen md:w-full -mx-10 md:-mx-0  my-4 dark:border-white'/>
      <p >Welcome to the College Management System API, designed to streamline and optimize the management of student, faculty, and course data for educational institutions. This API provides efficient and scalable tools to handle essential tasks such as student enrollment, course assignments, grade tracking, and faculty management, all through secure and standard HTTP requests. Built using ASP.NET Core, the API seamlessly integrates with web frontends, providing users with easy access to academic records, schedules, and administrative functions. With role-based access control, the system ensures that students, professors, teaching assistants, and administrators have appropriate permissions to perform their respective tasks. It also incorporates advanced features like transaction handling, schedule management, and performance optimization for a fast and reliable experience. Whether you're an administrator overseeing multiple departments or a professor managing courses and grades, this API offers a comprehensive solution tailored to meet the needs of modern educational institutions.</p>
      <hr className='border-t border-black opacity-15 w-screen md:w-full  -mx-10 md:-mx-0 my-4 dark:border-white'/>
      </div>


      <div ref={(el) => (sectionsRef.current[1] = el)} id={1} className='  pt-2 md:pt-4  '>
      <h1 className=' text-lg md:text-4xl  '>prerequisites</h1>
      <hr className='border-t border-black opacity-15 w-screen md:w-full  -mx-10 md:-mx-0 my-4 dark:border-white'/>
      <ul className="list-disc">
        <li className='pb-3'>
        .NET SDK: Make sure .NET 6 (or newer) is installed on your machine. You can download it from the .NET official website.
        </li>
        <li className='pb-3'>
        SQL Server: Install SQL Server (Express or any other version) as your database system. You may also use SQL Server Management Studio (SSMS) for managing the database.
        </li>
        <li className='pb-3'>
       <p className='pb-3'> Redis Server for caching.</p>
       <p className='font-semibold text-sm md:text-base'> Note: redis can be only run in a linux based distriution so you will need to use WSL or any VMware of your choice</p>
        </li>
      </ul>
      <hr className='border-t border-black opacity-15 w-screen md:w-full  -mx-10 md:-mx-0 my-4 dark:border-white'/>
       </div>

       <div ref={(el) => (sectionsRef.current[2] = el)} id={2}  className='pt-2 md:pt-4  '>
      <h1 className=' text-lg md:text-4xl'>Getting started</h1>
      <hr className='border-t border-black opacity-15 w-screen md:w-full  -mx-10 md:-mx-0 my-4 dark:border-white'/>
      <ul className="list-disc">
        <li className='pb-5'>
          <p className='pb-5'>Clone the repo:</p>
          <CodeSnippet text={cloneRepo} lang="bash" darkmode={darkmode}/>
        </li>
        <li className='pb-5'>
          <p className=' pb-5'>Change the connection string for the database from appsettings.json file</p>
          <img src={connectionStringImage}  alt="edit connection string" className='pb-5'></img>
          <p className=' text-sm md:text-base font-semibold'>Note: if you don't know how to get the connection string please refer to the following <a href="https://www.c-sharpcorner.com/UploadFile/d40a40/get-sql-server-database-connection-string-easily-from-visual" target="_blank" className='text-purple-950'>Link</a></p>
        </li>
        <li className='pb-5'>
          <p className='pb-5'>Run redis:</p>
          <ol className='list-decimal pl-3 md:pl-10'>
          <li className='pb-2'>Open your virtual machine</li>
          <li className='pb-5'>
            <p className='pb-2'>Install redis-server if not installed</p>
            <CodeSnippet text={installRedis} lang="bash" darkmode={darkmode}/>
          </li>
          <li className='pb-5'>
            <p className='pb-2'>Run redis</p>
            <CodeSnippet text={runRedis} lang="bash" darkmode={darkmode}/>
          </li>
          <li className='pb-5'>
            <p className='pb-2'>Check for redis IP</p>
            <img src={redis_ip} alt="redis-cli" />
          </li>
          <li className='pb-5'>
            <p className='pb-2'>Copy the IP and go to Program.cs file</p>
            <p className='pb-2'>change the ip in line 96</p>
            <img src={changeRedisIp} alt="redis-cli" />
          </li>
        </ol>
        <p className=' text-sm md:text-base font-semibold'>Note: Redis should always br active when you run the API</p>
        </li>
      </ul>
      <hr className='border-t border-black opacity-15 w-screen md:w-full  -mx-10 md:-mx-0 my-4 dark:border-white'/>
       </div>

       <div  className='  pt-2 md:pt-4  flex  flex-col md:flex-row justify-between items-start md:items-center '>
         <p className='pb-3 md:pb-0'> Great! now you are ready to start using the API and show us your amazing front-end skills!</p>
       
          <button onClick ={handleNext} className='mt-3 md:mt-0 bg-blue-600 hover:bg-blue-500 dark:bg-[rgb(179,199,255)] w-20 h-10 rounded dark:hover:bg-[rgb(130,148,196)] dark:active:bg-[rgb(106,120,158)]'>Next</button>
        
       </div>

    </div>

    
  )
}

export default GettingStarted
