import React, { Component } from 'react';

class Location extends Component {
    state = {  }
    render() {
        return (
            <div className="card">
                <div className="card-block">
                <h4 className="card-title">Here is our location!</h4>
                <img src="location.jpg" alt="our location"/>
                </div>
            </div>
        );
    }
}

export default Location;