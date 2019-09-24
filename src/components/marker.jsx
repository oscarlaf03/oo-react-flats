import React, { Component } from 'react';

class Marker extends Component {
    constructor(props){
        super(props);
        this.state = {
            // lat: 59.955413,
            // lng: 30.337844
        }
    }

    render () {
        return( 
            <div className='marker'></div>
        )
    }
}

export default Marker;