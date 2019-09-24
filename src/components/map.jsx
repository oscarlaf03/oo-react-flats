import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';


class Map extends Component {
    constructor(props){
        super(props);
        this.state={
            center:{
                
                lat:this.props.state.lat,
                lng:this.props.state.lng
            }

        }
    }

    render () {
        return(
            <div className='map-container'>
                <GoogleMapReact
                    bootstrapURLKeys={ {key: 'AIzaSyA1dw0Jy3rR_7T3ut6mOSXpKHsdBZcCfz8'}}
                    defaultCenter={this.state.center}
                    defaultZoom={11} > 

                    <Marker  lat={this.props.lat} lng={this.props.lng}/>
                </GoogleMapReact>
            </div>
        )

    }
}

export default Map;