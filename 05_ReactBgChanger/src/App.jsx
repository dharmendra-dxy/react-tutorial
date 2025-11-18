import { useState } from "react"


function App() {

  const [color, setColor] = useState("black");

  return (
    <div className="h-screen w-screen duration-200 " style={{backgroundColor : color}}>
      

      <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0">
        
        <div className="flex flex-wrap justify-center gap-10 bg-slate-50 rounded-lg px-10 py-6 text-black">
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "red"}}
          onClick={()=>{setColor("red")}}
          >RED</button>
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "purple"}} onClick={()=>{setColor("purple")}}>Purple</button>
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "indigo"}} onClick={()=>{setColor("indigo")}}>Indigo</button>
          <button className="h-[70px] w-[70px] text-black rounded-full shadow-xl" style={{backgroundColor: "white"}} onClick={()=>{setColor("white")}}>Off White</button>
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "olive"}} onClick={()=>{setColor("olive")}}>Olive</button>
          <button className="h-[70px] w-[70px] text-white rounded-full shadow-xl" style={{backgroundColor: "pink"}} onClick={()=>{setColor("pink")}}>Pink</button>

        </div>

      </div>


    </div>
  )
}

export default App
