import React, {Component} from 'react';

import guitarData from "../data/guitarData";

class GuitarGallery extends Component {

    render() {
        let guitars = guitarData().map((e, i) => {
            return(
                <div className="card">
                <div className="singleguitar card-block">
                <img src={e.img} alt={i} className="productimage"/>
                 <p>{e.type}:{e.price}</p>
                </div>
                </div>
            )
        })
        return (
           <div className="list"> {guitars} </div>
        );
    }
}

export default GuitarGallery;