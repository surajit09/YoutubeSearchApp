/// <reference path="../youtube-api-search.d.ts" />


import * as React from "react";
import * as ReactDOM from "react-dom";
//import YTSearch from 'youtube-api-search';
import * as ytSearch from 'youtube-api-search'
const API_KEY='Your API Key'


//import { Hello } from "./components/Hello";
import SearchBar from "./components/search_bar"
import {VideoList} from './components/video_list'
import {VideoDetail} from './components/video_detail'
interface Props{}

interface State{
    videos:any[],
    selectedVideo:any
}

class App extends React.Component<{},State>{

    constructor(props:Props){
        super(props)
        this.state={
            videos:[],
            selectedVideo:null
    }

    this.videoSearch('sharepoint')


    }

videoSearch(SearchTerm:string){
    ytSearch({key:API_KEY, term: SearchTerm},(data:any)=>{
            console.log(data)
             this.setState({
                 videos:data,
                selectedVideo:data[0]
            })})
}

    render(){
        return(<div>
           <SearchBar onSearchTermChange={(term:string)=>this.videoSearch(term)} />

           <VideoDetail video={this.state.selectedVideo}/>

           <VideoList 
           onVideoSelect={(selectedVideo:any)=>this.setState({selectedVideo})}
           videos={this.state.videos}/>  
        </div> )
}
    
}

ReactDOM.render(
   <App/>, document.getElementById("example")
);
