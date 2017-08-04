import React, {Component} from 'react';

import shirtData from "../data/shirtData";

class ShirtGallery extends Component {

    render() {
        let shirts = shirtData().map((e, i) => {
            return(
                <div className="card">
                <div className="singleitem card-block">
                <img src={e.img} alt={i} className="productimage"/>
                 <p>{e.type}:{e.price}</p>
                </div>
                </div>
            )
        })
        return (
           <div className="cupslist"> {shirts} </div>
        );
    }
}

export default ShirtGallery;