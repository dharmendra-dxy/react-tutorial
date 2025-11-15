import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    username: "Chai",
    code : "react",
  }

  const myArr = [1,2,3,4,5]

  return (
    <>
    <h1 className="bg-slate-400 px-4 py-2 rounded-3xl cursor-pointer text-black mb-5">Tailwind CSS</h1>

    <div className='flex flex-wrap gap-4'>

      <Card channel="chaiAurCode" object = {myObj} array = {myArr} btnText="viewChai" />
      <Card channel="chaiAurReact" btnText="viewReact"/>

    </div>
    
    </>
  )
}

export default App
