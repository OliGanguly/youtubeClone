import React, { useEffect } from 'react';
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';

function LiveChat(props) {
    const dispatch=useDispatch()
    const chatMessages=useSelector(store=>store.chat.message)
    console.log('chatMessages',chatMessages)
    useEffect(()=>{
        const interval=setInterval(()=>{
            dispatch(addMessage({
                name:"Oli",
                message:"hhhhhhhhhhhhhhhh"
            }))
        },2000)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className='m-2'>
            {
                chatMessages&&chatMessages.map((message)=>{
                    return <ChatMessages msg={message}/>
                })
            }
         
        </div>
    );
}

export default LiveChat;