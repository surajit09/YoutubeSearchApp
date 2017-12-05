import * as React from "react";


export interface VideoClick{
     (video:any):void
}

export interface VideoListItemProps{
    video:any;
    onVideoClick?:VideoClick;
    
   }

export  const VideoListItem=(props:VideoListItemProps)=>{

    const imageUrl=props.video.snippet.thumbnails.default.url;

    return(
        <li onClick={()=>props.onVideoClick(props.video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{props.video.snippet.title}</div>
                </div>
            </div>
        </li>



    )
}



   

