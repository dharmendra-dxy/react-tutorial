import { useState, useCallback, useEffect, useRef } from 'react'

// useState(): lets a component “remember” information like user input.
// useRef(): let a component hold some information that isn’t used for rendering.
// useEffect(): used to recall a function when its dependecies are changed.
// useCallback(): lets you cache a function definition between re-renders.


function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");



  // HOOK: useCallback()
  // Syntax: useCallback( () => {}, [dependencies] )

  // function passwordGenerator:
  const passwordGenerator = useCallback( () => {

    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str+="0123456789";
    }
    if(characterAllowed){
      str+="~!@#$%^&*()_+={}[]<>";
    }

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() *str.length +1);
      pass += str.charAt(index);
    }

    setPassword(pass);


  }, [length, numberAllowed, characterAllowed, setPassword]);


  // HOOK: useRef()
  // Syntax: useRef( defaultValue )
  
  // creating a password refrence:
  const passwordRef = useRef(null);


  const copyPasswordToClipboard = useCallback(() => {
    // Not optimize code: since user dont know weather the text has been copied or not
    // window.navigator.clipboard.writeText(password)

    // optimized way:
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);


  }, [password])


  // HOOK: useEffect()
  // Syntax: useEffect( () => {}, [dependencies] )
  // calling the function paswordGenerator:
  useEffect(() => {

    passwordGenerator();

  }, [length, numberAllowed, characterAllowed, passwordGenerator])



  return (
    <>
    <div className='text-white bg-[#a3b18a] w-[60%]  mx-auto shadow-xl rounded-xl p-8 my-12'>
      
      <h1 className='text-4xl text-center mb-7'>Password Generator</h1>

      <div className='flex shadow-xl rounded-xl overflow-hidden mb-4 '>
        <input 
        type="text"
        value={password}
        className='ouline-none w-full py-1 px-3 text-black font-semibold border-0' 
        placeholder="password"
        readOnly
        // passing reference:
        ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard}
        className='bg-[#344e41] text-white px-3 py-2 outline-none text-lg'>copy</button>
      </div>

      <div className='flex items-center justify-between text-xl'>

        <div className='flex items-center gap-x-2'>

          <input type="range" min={8} max={15} value={length} className='cursor-pointer' onChange={(event) => {setLength(event.target.value)}}/>

          <label >Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" 
          onChange={ () => { setNumberAllowed((prev) => (!prev))}} />
          
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={characterAllowed} id="numberInput" 
          onChange={ () => { setCharacterAllowed((prev) => (!prev))}} />
          
          <label>Character</label>

        </div>

        
      </div>

    </div>
    </>
  )
}

export default App
