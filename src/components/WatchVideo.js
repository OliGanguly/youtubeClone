import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../redux/appSlice';
import {  useSearchParams } from 'react-router-dom';
import VideoPreview from './VideoPreview';
import LiveChat from './LiveChat';

function WatchVideo(props) {
    const [searchParams] = useSearchParams();
    const videoId=searchParams.get("v")

    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    
    return (
        <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4">
        <VideoPreview videoId={videoId} />
        <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm bg-slate-100">
          <p className="border-b p-2">Live Chat</p>
          {/* Get data live
          update ui */}
          <div className= "bg-slate-100 ">
            <LiveChat />
          </div>
        </div>
      </div>
    );
}

export default WatchVideo;

//Live Chat >>>>> infinite scroll >>> pagination