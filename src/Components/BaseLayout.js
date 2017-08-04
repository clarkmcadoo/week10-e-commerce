import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {

    render() {
        return (
            <div className="App">
                <h1 className="page-title">Clark's Cool Collectables</h1>
                <div className="buttondiv">
                <div><NavLink to="/"><button className="btn btn-secondary btn-lg homebutton"><i className="fa fa-home" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/about"><button className="btn btn-secondary btn-lg aboutbutton"><i className="fa fa-list" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/location"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-map-marker" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/contact"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-phone" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/gallery"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-camera" aria-hidden="true"></i></button></NavLink></div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;

