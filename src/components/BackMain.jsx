import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GetMusic } from './GetMusic';


export class BackMain extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Router>
            <div className="row">
            <div className="col-2">
            </div>
            <div className="col-10">
                <div className="row music-section">
                    <div className="col-12">
                    <div className =" mt-4 categories-back text-center">
                        <Link to="/">Trending</Link>
                        <Link to="/">Podcast</Link>
                        <Link to="/">Moods and Genres</Link>
                        <Link to="/">New Releases</Link>
                        <Link to="/">Disocver</Link>
                    </div>
                    </div>

                    <div className="row container-cat">
                    <div className="col-12 mb-3">
                    <h2>Created for you</h2>
                    </div>
                        <GetMusic artistName={"rock"}/>
                        <div className="col-12 mb-3">
                        <h2>#Tool</h2>
                        </div>
                        <GetMusic artistName={"tool"}/>
                        <div className="col-12 mb-5">
                        <h2>#twentyonepilots</h2>
                        </div>
                        <GetMusic artistName={"twentyonepilots"}/>

                        </div>
                    </div>
            </div>
        </div>
            </Router>
        )
    }
}