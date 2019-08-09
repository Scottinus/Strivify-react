import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class GetMusic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            music: []
        }
    }

    componentDidMount = async() =>{
        var headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0"
        });
        var response = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + this.props.artistName,
        {
            method: "GET", headers: headers
        })
        var result = await response.json();
        if(response.ok)
        {
            this.setState({music: result.data})

        }else{

        }
    }


    render(){
       const musics =  this.state.music.map((musics, index) =>{
                   return(  
                       <div key={index} className="col-12 col-sm-3 text-center mb-4">
                       <Link to ={"/albumpage/" + musics.album.id}>
                           <img src={musics.album.cover_medium} className="img-fluid" alt={musics.title}/>
                       </Link>
                       <Link className="music-link mt-2" to="/"><p><strong>Album: </strong>{musics.album.title}</p></Link>
                       <Link className="music-link" to="/"><p><strong>Artist: </strong>{musics.artist.name}</p></Link>
                       </div> 
                   )
               })
               var musicSpliced = musics.slice(0,4);

        return musicSpliced;
    }
}