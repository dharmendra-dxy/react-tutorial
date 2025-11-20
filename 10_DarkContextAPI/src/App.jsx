import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme.js"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

// value = {} is given inside <ThemeProvider> so that value can be accessed.

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // defining darkTheme and lightTheme:
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  //Actual change in THEME:
  useEffect( ()=>{

    //First removing all 'light' and "dark":
    document.querySelector("html").classList.remove("light", "dark");

    // Add themeMode:
    document.querySelector("html").classList.add(themeMode);

  }, [themeMode] )
  


  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      
    </ThemeProvider>


  )
}

export default App
