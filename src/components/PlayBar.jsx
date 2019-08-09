import React from 'react';


export class PlayBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <>
            <div className="row playbar fixed-bottom">
                <div className="col-12">

                <h3>playbar</h3>
                </div>
            </div>
            </>
        )
    }
}