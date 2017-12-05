import * as React from "react";

interface SearchProps{
    onSearchTermChange(term:string):void;
}

interface SearchState{
    term: string;
    
}


class SearchBar extends React.Component<SearchProps,SearchState>{
constructor(props:SearchProps){
    super(props)
    this.state={term:''};
}


  render(){
           return (

            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={(event:any)=>this.onInputChange(event.currentTarget.value)}/>
            
            </div>
           )  
    }

onInputChange(term:string){
    this.setState({term});
    this.props.onSearchTermChange(term);
}


}

 

export default SearchBar;