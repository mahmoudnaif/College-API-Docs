import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula,docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeSnippet = ({text,lang,darkmode}) => {
  return (
    <div className=' grid place-items-left h-auto'>
     <SyntaxHighlighter language={lang} style={darkmode ? dracula: docco } customStyle={ darkmode ? {   padding:"7px"}: {
      padding:"7px",
       backgroundColor: '#EEF0F3'
     }}>
   {   text}
     </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
