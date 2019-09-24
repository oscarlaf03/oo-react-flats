import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component{
    
    constructor (props) {
        super(props);
    }

    render () {
        return(
            <div>
                <FlatList />
                <Map />
            </div>
        );
    }
}

export default App;