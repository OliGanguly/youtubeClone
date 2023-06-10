import React from 'react';


function VideoCard({info}) {
   
    return (
        <div className='shadow-sm w-72 p-2 m-2 rounded-lg'>
            <img  className="round-lg" alt="video" src={info?.snippet?.thumbnails?.medium?.url}/>
            <ul>
                <li className='font-bold py-1'>{info?.snippet?.title}</li>
                <li className='text-sm text-gray-500'>{info?.snippet?.channelTitle}</li>
                <li className='text-sm text-gray-400'>{info?.statistics?.viewCount} views</li>
            </ul>
        </div>
    );
}
//Example of HOC-

export default VideoCard;