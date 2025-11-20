import React, { useState } from "react";
import UserContext from "./UserContext";

// children is a prop i.e. <div>

const UserContextProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}} >
        
        {children}

        </UserContext.Provider>
    )

}

export default UserContextProvider