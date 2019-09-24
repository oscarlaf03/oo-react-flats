import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component{
    constructor (props) {
        super(props);
        this.state ={
            lat:19.955413,
            lng:24.337844
        }
    }

    selectedCordinates = (lat, lng) => {
        console.log(`cordinates from app lat:${lat} lng:${lng}`);
        this.setState({
            lat: lat,
            lng: lng
        });

    }

    render () {
        return(
            <div>
                <FlatList select={this.selectedCordinates} />
                <Map lat={this.state.lat} lng={this.state.lng} />
            </div>
        );
    }
}

export default App;