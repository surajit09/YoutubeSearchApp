import * as React from "react";
import {VideoListItem} from './video_list_item'

export interface VideoClick{
     (video:any):void
}

export interface VideoLIstProps{
    videos:any[],
    onVideoSelect:VideoClick
}


export const  VideoList =(props:VideoLIstProps )=> {
    const videoItems= props.videos.map((video:any)=><VideoListItem 
    onVideoClick={props.onVideoSelect}
    key={video.etag} 
    video={video}/>)
    
    
    return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>

    )
}
  
 

