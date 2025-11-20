import { createContext, useContext } from "react";


// here, the "createContext" syntax will be alternative of "UserContext.js" in 09_MiniContextAPI
// createContext( {initial values} )

export const ThemeContext = createContext({

    // string, array, objects can be made inside createContext
    themeMode: "light",

    // Methods are empty if created
    darkTheme: () => {},
    lightTheme: () => {},

})



export const ThemeProvider = ThemeContext.Provider

// exporting a custom HOOK:
export default function useTheme(){
    return useContext(ThemeContext)
}

// export default ThemeContext,
// export default ThemeProvider;

// A module can't have more than 1 export so use like: export const --variable-- when defining the variable.
