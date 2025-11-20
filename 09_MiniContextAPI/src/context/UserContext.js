import React from "react";

// STEP 1:
// creating a context => context will give "provider" and will evantually used as a rapper.

const UserContext = React.createContext();

export default UserContext;

/*
<UserContext>
 ..
 ..
 .. Now every components inside <UserContext> can access UserContext
 ..
 ..
</UserContext>
*/


// STEP 2: 
// Creating UserContextProvider => which will provide data