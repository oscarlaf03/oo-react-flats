import flats from './data/flats.jsx';
import Flat from './flat.jsx';
import React, { Component } from 'react';

class FlatList extends Component {
    constructor (props){
        super(props);
    }
    render () {
        return(
            <div className='flat-list'> 
                
                { flats.map(flat => {
                    return  <Flat name={flat.name} price={flat.price} 
                    currency={flat.priceCurrency} key={flat.name}
                    lat={flat.lat} lng={flat.lng} src={flat.imageUrl}
                    select={this.props.select}
                    />
                })}
                  
            </div>
        );
    }
}

export default FlatList;