import React, { useEffect, useState } from 'react';
import VideoPreviewShimmer from './VideoPreviewShimmer';
import { VIDEO_API } from '../utils/constats';
import VideoInfo from './VideoInfo';

function VideoPreview({videoId}) {
    const [video,setVideo]=useState([])
    useEffect(()=>{
        getVideo()
    },[])
    const getVideo =async()=>{
  const resp = await fetch(VIDEO_API+videoId)
  const json = await resp.json();
  setVideo(json.items[0])
  console.log("json",json.items)
    }
    
    if(video.length===0) return <VideoPreviewShimmer/>
    return (
        <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
        <div>
          
          <iframe
            className="md:h-[30rem] h-60 w-full rounded-lg"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <VideoInfo info={video} />
        </div>
        {/* <Comments videoId={videoId} /> */}
      </div>
      
       
    );
}

export default VideoPreview;