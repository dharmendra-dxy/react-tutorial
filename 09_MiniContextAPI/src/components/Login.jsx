// TAKING DATA and SENDING DATA 

import React from 'react';
import {useState, useContext } from 'react';
import UserContext from '../context/UserContext';

// HOOK : useContext => this hook will help to get data fetch from "UserContext"


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sending the DATA, Accepting of data will be done at "Profile.jsx"
    // the value of "setUser" comes from "UserContext" by using useContext
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser( {username, password} );
    }

    
    return (
        <div>

        <h2>LOGIN</h2>

        <label >Username : </label>
        <input
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label >Password : </label>
        <input
        type="text" 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login;
