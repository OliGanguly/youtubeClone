import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { ALL_VIDEOS } from '../utils/constats';
import { Link } from 'react-router-dom';

function VideoContainer(props) {
    const [allVideos,setAllVideos]=useState([])
    useEffect(()=>{
    getVideos()
    },[])
    const getVideos = async()=>{
        const data=await fetch(ALL_VIDEOS);
        const response = await data.json();
        setAllVideos(response.items)
    }
    return (
        <div className='flex flex-wrap'>
          {
            allVideos && allVideos.map((singleVideo)=>{
                return  <Link to={"/watch?v="+singleVideo.id} ><VideoCard info={singleVideo} key={singleVideo.id}/></Link>
            })
          }
          {/* <VideoCard info={allVideos[0]}/> */}
        
        </div>
    );
}

export default VideoContainer;