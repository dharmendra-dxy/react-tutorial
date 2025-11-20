import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {

    // Accepting the data
    const {user} = useContext(UserContext);

    if (!user) return <div>Please LOGIN</div>

    return <div> WELCOME : {user.username}</div>
}

export default Profile
