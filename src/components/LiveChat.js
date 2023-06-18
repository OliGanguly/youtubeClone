import React, { useEffect } from 'react';
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import { generateRandomCompliment, generateRandomId, generateRandomName } from '../utils/helper';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

function LiveChat(props) {
    const [sendMessage,setSendMessage]=useState("")
    const dispatch=useDispatch()
    const chatMessages=useSelector(store=>store.chat.message)
    // console.log('chatMessages',chatMessages)
    useEffect(()=>{
        const interval=setInterval(()=>{
            dispatch(addMessage({
                id:generateRandomId(),
                name:generateRandomName(),
                message:generateRandomCompliment()
            }))
        },1500)
        return ()=>clearInterval(interval)
    },[dispatch])

    const handleSubmit=(e)=>{
    e.preventDefault()
    const newMessage={
        id:generateRandomId(),
            name:"Oli",
            message:sendMessage
    }
    dispatch(addMessage(newMessage))
    setSendMessage("")
    }
  
    return (
        <div>
          <div className="box-border overflow-y-scroll flex flex-col-reverse h-96">
            {
                chatMessages&&chatMessages.map((message)=>{
                    return <ChatMessages key={message.id} name={message.name} message={message.message}/>
                })
            }
        </div>
        <form onSubmit={handleSubmit}>
        <div className="bg-white flex p-2 gap-2 rounded-xl items-center"> 
        <FaUserCircle className="md:text-4xl " />

        <input
            type="text"
            value={sendMessage}
            className="outline-none border-b-2 w-full border-blue-200"
            placeholder="Say something..."
            onChange={(e)=>setSendMessage(e.target.value)}
            />
             <button type="submit">
             <AiOutlineSend className="w-10 cursor-pointer" />
             </button>
            </div>
        </form>
       
       
        </div>
    );
}

export default LiveChat;