import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


// function name has been changed from "AuthLayout" to -> "Protected"

export default function AuthLayout({
    children,
    authentication = true,

}) 
{
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    const authStatus = useSelector(state => state.auth.status);

    // useEffect:
    useEffect( () => {

        if(authentication && authStatus !==authentication ){
            navigate("/login");
        }
        else if( !authentication && authStatus !== authentication){
            navigate("/");
        }
        setLoader(false);

        // alternate easy code of above:
        // if(authStatus === true) navigate("/");
        // else if (authStatus===false) navigate("/login");


    }, [authStatus, navigate, authentication])



  return loader ? (<h1> Loading...</h1>) : (<> {children} </>)
}

