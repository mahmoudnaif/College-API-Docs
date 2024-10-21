import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula} from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeSnippet = ({text,lang}) => {
  return (
    <div className=' grid place-items-left h-auto'>
     <SyntaxHighlighter language={lang} style={dracula} customStyle={{
      padding:"7px"
     }}>
   {   text}
     </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
