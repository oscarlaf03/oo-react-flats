import React, { Component } from 'react';

class Flat extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    handleClick = () => {
        this.props.select(this.props.lat, this.props.lng);
    }

    render () {
        
        return(
            <div onClick={this.handleClick} className="card" style={ {backgroundImage: `url(${this.props.src})`} } >
                <div className="card-category">{this.props.price} {this.props.currency}</div>
                <div className="card-description">
                    <h2>{this.name}</h2>
                </div>
                <a className="card-link" href='#'></a>
            </div>

        );
    }

}

export default Flat;