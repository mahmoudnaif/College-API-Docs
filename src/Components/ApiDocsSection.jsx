import React from 'react'
import CodeSnippet from './CodeSnippet'
import ReactJson from 'react-json-view'

const APIDoc = ({apiDocs}) => {

  
  return (
    <div className="w-full md:w-[75%] bg-slate-300 p-4">
         <div className="container pl-5 md:pl-14 pt-10 pb-2 md:pb-5 pr-4">
         <h1 className="text-2xl md:text-4xl">test</h1>
         <hr className="border-t border-red-300 -mx-8 md:-mx-16 my-4" />
         </div>
    {apiDocs.map((doc, index) => (
      <APIDocBlock key = {index} doc={doc}  />
    ))}
 </div>

  )
}



const APIDocBlock = ({doc}) => {

    let queryParamsString='';
    for (let param in doc.queryParameters) {
      queryParamsString +=`${param}=${doc.queryParameters[param]}&`;
    }
    if(queryParamsString!=''){
      queryParamsString = queryParamsString.slice(0,-1);
    }
    
    const isMobile = window.innerWidth <= 768;
  return (
    <> <div className="container pl-5 md:pl-14 pb-10 md: pr-4">
    <h1 className="text-xl md:text-3xl pb-7">{doc.title}</h1>
    <div className='pb-7'>
      <p className=' md:text-2xl pb-5'>Endpoint</p>
    <CodeSnippet text={`[${doc.method}] http://localhost:5173${doc.endpoint}${queryParamsString=="" ? "": "?"+queryParamsString}`} lang="bash" />
    </div>
   { doc.requestBody && <div className='pb-7' > <p className='text-lg md:text-2xl pb-5'>Body:</p>
    <ReactJson src={doc.requestBody} name={null} theme="ocean"  style={{
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '100%',     
          overflowX: 'auto',    
          overflowY: 'auto',    
          whiteSpace: isMobile ? 'nowrap': "normal", 
          wordBreak: 'break-all' 
        }} />
  </div >}

    { doc.responseBody && <> <p className='text-lg md:text-2xl pb-5'>Response:</p>
    <ReactJson src={doc.responseBody} name={null} theme="ocean"  style={{
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '100%',    
            overflowX: 'auto',    
            overflowY: 'auto',   
            whiteSpace: isMobile ? 'nowrap': "normal", 
            wordBreak: 'break-all'
        }}/>
  </>}
  </div>
  <hr className="border-t border-red-300 -mx-4 md:-mx-16 my-4" />

    </>
  )
}


export default APIDoc
