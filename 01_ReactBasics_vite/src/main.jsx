import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// using a varibale in react:
const userName = "Dharmendra | Yadav";

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google (anotherElement)</a>
)

/*
const reactElement = {
  type : "a",
  props : {
      href : "https://google.com",
      target : "_blank",
  },
  children : "Click me to visit Google",
} 
*/


// Creating similar reactElement
const reactElement = React.createElement(

  /* 
  SYNTAX: 
  "tag",
  {attributes: values},
  "Text",
  */

  "a",
  {href : "https://google.com", target: "_blank",},
  "Click to visit google (React Element)",
  // using variable => userName is a => evaluated expression
  userName,

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement

)
