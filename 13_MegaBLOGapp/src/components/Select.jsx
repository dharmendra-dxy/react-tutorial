import React from 'react';
// import:
import { useId } from 'react';



function Select({
    options,
    label,
    className = "",
    ...props
}, ref)
{
    const id = useId();


    return (

        <div className='w-full'>
            {
                label && <label className='' htmlFor={id}> </label>
            }

            <select
            className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border borger-gray-20 w-full`}
            id={id}
            ref={ref}
            {...props}
            >
                {/* --- Loop options:---- */}
                {
                    options ?.map( (option) => (

                        <option key={option} value={option}>
                            {option}
                        </option>

                    ))
                }

            </select>

        </div>

  )
}

// this time using hook : "Forward reference" while exporting:

export default React.forwardRef(Select)