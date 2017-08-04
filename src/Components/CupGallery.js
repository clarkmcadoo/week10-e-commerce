import React, {Component} from 'react';

import cupData from "../data/cupData";

class CupGallery extends Component {

    render() {
        let cups = cupData().map((e, i) => {
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
           <div className="cupslist"> {cups} </div>
        );
    }
}

export default CupGallery;