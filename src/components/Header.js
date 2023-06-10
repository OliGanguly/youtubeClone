import React from 'react';
import menu from "../Images/menu.jpeg"
import youtube from "../Images/youtube.jpeg"
import user from "../Images/user.jpeg"
import {CiSearch} from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
function Header(props) {
    const dispatch=useDispatch();
    return (
        <div className='grid grid-flow-col '>
            {/* First */}
            <div className='flex items-center col-span-1'>
                <img src={menu} alt='menu' className='h-8 m-2 cursor-pointer' onClick={()=>dispatch(toggleMenu())}/>
                <img src={youtube} alt='youtube' className='h-12'/>
            </div>
            {/* Second */}
            <div className='flex col-span-10 items-center justify-center'>
                <input type='text' placeholder='search' className='w-1/2 border border-gray-400 px-5 py-1 rounded-l-full' />
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