import React from 'react';

function VideoInfo({info}) {
    const {
        snippet: { channelTitle, title, description, publishedAt },
        statistics: { viewCount },
      } = info;
    return (
        <div>
           <h2 className="md:text-lg font-sans text-sm font-semibold">{title}</h2>
           <div className="flex items-center">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-5 md:p-7 h-2"></div>
        <div className="ml-2">
          <h2 className="font-semibold text-sm md:text-base">{channelTitle}</h2>
          <p className="text-gray-500 text-sm">xx subscribers</p>
        </div>
      </div>
           {/* <p>{title}</p>
           <p>{description}</p>
           <p>{publishedAt}</p>
           <p>{viewCount}</p> */}
        </div>
    );
}

export default VideoInfo;