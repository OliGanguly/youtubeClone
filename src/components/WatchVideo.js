import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../redux/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import VideoPreview from './VideoPreview';

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
        <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
          <p className="border-b p-2">Live Chat</p>
          <div className="bg-gray-50">
            {/* <LiveChat /> */}
          </div>
        </div>
      </div>
    );
}

export default WatchVideo;