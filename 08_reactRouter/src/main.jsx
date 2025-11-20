import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'
import Contact from "./components/Contact/Contact"
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// No need of "App.jsx" file. REASON: we are using react-router

// creating props: "router" => used for routing

// METHOD 1 OF CREATING ROUTER-----------

/* 
const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,

    // to add more elements such as: Home, About, Contact, so creating a children.
    children: [

      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      }

    ]

  }
])
*/

// METHOD 2 OF CREATING ROUTER-----------

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
      <Route path="" element={ <Home/>} />
      <Route path="about" element={ <About/>} />
      <Route path="contact" element={ <Contact/>} />
      
      <Route path="user/:user_id" element={ <User/>} />

      {/* 
      <Route path="github" element={ <Github/>} /> 
      */}

      <Route 
      loader={githubInfoLoader} 
      path="github" 
      element={ <Github/>} 
      />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
)
