import React, { useState } from 'react';
import menu from "../Images/menu.jpeg"
import youtube from "../Images/youtube.jpeg"
import user from "../Images/user.jpeg"
import {CiSearch} from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { json } from 'react-router-dom';
import { useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constats';
function Header(props) {
    const dispatch=useDispatch();
    const[searchVal,setSearchVal]=useState('')
//debouncing
//make a api call after every key press
//diff between two key press<200 decline api call
//diff between two key press > 200 call api
    useEffect(()=>{
        const timer=setTimeout(()=>{  
            fetchSearchSuggations();
        },200)
        return ()=>clearTimeout(timer)
    },[searchVal])
    /**
     * key-i
     *  -render the comp
     *  -call use effect
     *  -start a timer make api call after 200 ms
     * key-ip
     * re-render the comp
     *  -call useEffect()
     *  -start a timer make api call after 200 ms (new timer)
     *  
     * 
     */

     const fetchSearchSuggations=async()=>
     {
        const data=await fetch(YOUTUBE_SEARCH_API+searchVal);
        const jsonData=await data.json()
        console.log(jsonData[1])
     }
    return (
        <div className='grid grid-flow-col '>
            {/* First */}
            <div className='flex items-center col-span-1'>
                <img src={menu} alt='menu' className='h-8 m-2 cursor-pointer' onClick={()=>dispatch(toggleMenu())}/>
                <img src={youtube} alt='youtube' className='h-12'/>
            </div>
            {/* Second */}
            {/* search */}
            <div className='flex col-span-10 items-center justify-center'>
                <input 
                type='text' 
                placeholder='search' 
                value={searchVal}
                onChange={(e)=>setSearchVal(e.target.value)}
                className='w-1/2 border border-gray-400 px-5 py-1 rounded-l-full' />
                <button className='border border-gray-400 py-2 px-4 bg-gray-300 rounded-r-full'>
                 <CiSearch/>
                </button>
            </div>
            {/* 3rd */}
            <div className=' flex col-span-1 items-center justify-end px-3' >
                <img src={user} alt='user' className='h-8' />
            </div>
        </div>
    );
}

export default Header;