import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Gallery extends Component {

    render() {
        return (
            <div className="card">
            <div className="card-block">
                <h4 className="card-title">What would you like to see?</h4>
                <div className="gallerynav">
                <div><NavLink to="/gallery/shirts"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-shirtsinbulk" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/gallery/guitars"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-music" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/gallery/cups"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-cutlery" aria-hidden="true"></i></button></NavLink></div>
            </div>
            </div>
            </div>
        );
    }
}

export default Gallery;