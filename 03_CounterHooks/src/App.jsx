// Solution to UI updation: HOOKS -==> useState, useEffect

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;

  let [counter, setCounter] = useState(15);
  // synatx: let [value, setValueFunction] = useState(initial value)


  const addValue = () => {
    // counter++;
    // PROBLEM : throught (counter++), Counter value do not update in webpage i.e. problem in UI Updation
    // Solution: hooks : setCounter(counter+1)

    if(counter<20){
      setCounter(counter+1);
      console.log("clicked", counter)
    }
  }

  const removeValue = () => {

    if(counter>0){
      setCounter(counter - 1);
      console.log("clicked", counter)
    }  
  }

  return (
    <>
      <h1>Chai aur Code | REACT</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App


// INTERVIEW QNS:

/*
const addValue = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
}

what will be the result 16 or 19?

ANS: 16
REASON: useState() send the update in batches and repition of code will seems to have the same code

QNS: what if I want myself to add counter by 4 using above code

ANS:
  const addValue = () => {
    setCounter((prevCounter) = > {counter+1});
    setCounter((prevCounter) = > {counter+1});
    setCounter((prevCounter) = > {counter+1});
    setCounter((prevCounter) = > {counter+1});
  }

  Now the value will add up by 4

*/