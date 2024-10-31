import React from 'react'
import CodeSnippet from './CodeSnippet'
import ReactJson from 'react-json-view'

const APIDocBlock = ({doc,darkmode}) => {

    let queryParamsString='';
    for (let param in doc.queryParameters) {
      queryParamsString +=`${param}=${doc.queryParameters[param]}&`;
    }
    if(queryParamsString!=''){
      queryParamsString = queryParamsString.slice(0,-1);
    }
    
    const isMobile = window.innerWidth <= 768;

    const BlockStyle = () => {
     return darkmode ? {
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '100%',    
        overflowX: 'auto',    
        overflowY: 'auto',   
        whiteSpace: isMobile ? 'nowrap': "normal", 
        wordBreak: 'break-all',
       
    } : {
      padding: '10px',
      borderRadius: '10px',
      maxWidth: '100%',    
      overflowX: 'auto',    
      overflowY: 'auto',   
      whiteSpace: isMobile ? 'nowrap': "normal", 
      wordBreak: 'break-all',
       backgroundColor: '#EEF0F3'
  }

    }

  return (
    <> <div className="container pl-5 md:pl-14 pb-10 md: pr-4">
    <h1 className="text-xl md:text-3xl pb-7">{doc.title}</h1>
    <div className='pb-7'>
      <p className=' md:text-2xl pb-5'>Endpoint</p>
    <CodeSnippet  text={`[${doc.method}] http://localhost:5173${doc.endpoint}${queryParamsString=="" ? "": "?"+queryParamsString}`} lang="bash" darkmode={darkmode} />
    </div>
   { doc.requestBody && <div className='pb-7' > <p className='text-lg md:text-2xl pb-5'>Body:</p>
    <ReactJson collapsed={true} src={doc.requestBody} name={null} theme={darkmode ? "ocean":"rjv-default"}  style={BlockStyle()}/>
  </div >}

    { doc.responseBody && <> <p className='text-lg md:text-2xl pb-5'>Response:</p>
    <ReactJson collapsed={true} src={doc.responseBody} name={null} theme={darkmode ? "ocean":"rjv-default"}  style={BlockStyle()}/>
  </>}
  </div>
  <hr className='border-t border-black opacity-15 w-screen md:w-auto  md:-mx-16 my-4 dark:border-white'/>

    </>
  )
}


export default APIDocBlock
