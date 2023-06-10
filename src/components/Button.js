import React, { useState } from 'react';

function Button({obj}) {
    console.log("list",obj)
   
    return (
        <button className='px-3 py-1 m-2 bg-gray-300 rounded-lg'>{obj}</button>   
    );
}

export default Button;