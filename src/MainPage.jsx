import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import { PlayBar } from './components/PlayBar';
import { BackMain } from './components/BackMain';
import { AlbumPage } from './components/AlbumPage';

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
            console.log(this.props);
        return(
            <div className="container-fluid">
            <Router>
                <div>
                <SideBar/>
                <PlayBar/>
                </div>
                <div className="container-fluid backmain">
                <Route exact path="/"  exact component={BackMain}/>
                <Route path="/albumpage/:showId" render={() => <h1>Funziono!</h1> }/> 
                </div>
            </Router>
            </div>
        );



    }
}

export default MainPage;