import React, { useEffect, useState } from "react";

// HOOK: useLoaderData
import { useLoaderData } from "react-router-dom";

function Github() {

    // Optimized code:
    const data = useLoaderData()

    /*
    const [data, setData] = useState([]);

    useEffect( () => {

        fetch("https://api.github.com/users/hiteshchoudhary")
        .then( response => response.json() )
        .then(data => {
            console.log(data);
            setData(data);
        })

    }, [])
    */

    return(
        <div
        className="text-center text-4xl font-bold py-10 "
        >
            <div>
            Github Followers : {data.followers}
            </div>

            <div>
            <img src={data.avatar_url} alt="" className="pt-[80px] m-auto "/>
            </div>
            
        </div>
    )
}

export default Github;


// optimized way:

export const githubInfoLoader = async () => {
    const response = await fetch( "https://api.github.com/users/hiteshchoudhary" )
    return response.json()

}