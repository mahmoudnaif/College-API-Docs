import React from 'react'
import CodeSnippet from './CodeSnippet'
import ReactJson from 'react-json-view'

const APIDocBlock = ({doc,darkmode,id,sectionsRef}) => {

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
    <> <div  ref={(el) => (sectionsRef.current[id] = el)} id={id} className="container  pb-10  pt-5">
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
      {doc.note && <blockquote className='text-base md:text-xl mt-5 py-1 md:py-4 pl-3 border-l-2 dark:border-headerDark'>{doc.note} </blockquote> }
  </div>
  <hr className='border-t border-black opacity-15 w-screen md:w-auto -mx-8 md:-mx-16 md-4 dark:border-white'/>

    </>
  )
}


export default APIDocBlock
