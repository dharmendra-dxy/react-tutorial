import React from 'react'

// import useParams for (userid)
import { useParams } from 'react-router-dom'

function User() {

    const {user_id} = useParams();

    return (
        <div 
        className='text-3xl text-center py-10'
        >
        User : {user_id}
        </div>
    )
}

export default User
