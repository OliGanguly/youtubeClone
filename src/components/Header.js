import React, { useState } from 'react';
import menu from "../Images/menu.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import youtube from "../Images/youtube.jpeg"
import user from "../Images/user.jpeg"
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constats';
import store from '../redux/store';
import { cacheResults } from '../redux/searchSlice';
function Header(props) {
    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState('');
    const [suggations, setSuggations] = useState([])
    const [showSuggations, setShowSuggations] = useState(false)
    //debouncing
    //make a api call after every key press
    //diff between two key press < 200ms decline api call
    //diff between two key press > 200 call api
      
    /**
     * key-i
     *  -render the comp
     *  -call use effect
     *  -start a timer make api call after 200 ms
     * key-ip
     *  -destroye the previous comp
     *  -re-render the comp
     *  -call useEffect()
     *  -start a timer make api call after 200 ms (new timer)
     */
    const searchCache=useSelector(store=>store.search)
    //say i already have result for keyword like
    // SearchCache{
    //    "iphone":["iphone11","iphone12"] 
    // }
    //SearchQuery = iphone
    
    useEffect(() => {
        const timer = setTimeout(() => {
            //Cache logic from redux
            //if it is inside cache then setState from cache else make api call
            if(searchCache[searchVal]){
                // console.log("searchCache",searchCache)
                // console.log("searchVal",searchVal)
                // console.log(",,,,,",searchCache[searchVal])
                setSuggations(searchCache[searchVal])  
            }else{
                fetchSearchSuggations();  
            }
        }, 200)
        return () => clearTimeout(timer)
    }, [searchVal])
    

    const fetchSearchSuggations = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchVal);
        const jsonData = await data.json()
        setSuggations(jsonData[1])
        dispatch(cacheResults({
            [searchVal]:jsonData[1]
        }))
        // console.log(jsonData[1])
    }
    return (
        <div className="flex md:grid-flow-col md:grid justify-between items-center border-b-2 shadow-sm md:shadow-none md:border-none">
            {/* First */}
            <div className='flex items-center md:col-span-3'>
                <img src={menu} alt='menu' className='h-8 m-2 cursor-pointer' onClick={() => dispatch(toggleMenu())} />
                <img src={youtube} alt='youtube' className='h-12' />
            </div>
            {/* Second */}
            {/* search */}
            <div className='hidden md:block col-span-8'>
                <div className='flex items-center shadow-lg md:shadow-none'>
                    <input
                        type='text'
                        placeholder='search'
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        className="bg-gray-100 outline-blue-300 rounded-full p-2 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
                        onFocus={() => setShowSuggations(true)}
                        onBlur={() => setShowSuggations(false)}
                    />
                    <button
                        className="hidden md:bg-gray-100 md:block p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
                        <CiSearch />
                    </button>
                </div>
                {
                    showSuggations && suggations.length > 0 &&
                    <div
                        className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm">
                        <ul>
                            {suggations && suggations.map((i) => {
                                return (
                                    <li key={i}>
                                        <div
                                            className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                                        >
                                            <AiOutlineSearch /> {i}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                }

            </div>
            {/* 3rd */}
            <div className='flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1' >
                <img src={user} alt='user' className='h-8' />
            </div>
        </div>
    );
}

export default Header;