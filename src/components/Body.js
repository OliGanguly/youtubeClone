import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';


function Body(props) {
   
    return (
        <div className='flex'>
            <div>
            <Sidebar/>
            </div>
 {/* so here outlet is defining whether i should load main body page of the watch page */}
           <Outlet/>
           
        </div>
    );
}

export default Body;