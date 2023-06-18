import React from 'react';
import user from "../Images/user.jpeg"
function ChatMessages({msg}) {
    return (

        <div className='flex items-center shadow-sm p-1'>
            <img src={user} className='w-10 h-10'/>
            <h3 className='font-bold px-2'>{msg?.name}</h3>
            <p className='font-normal'>{msg?.message}</p>
           
           
        </div>
    );
}

export default ChatMessages;