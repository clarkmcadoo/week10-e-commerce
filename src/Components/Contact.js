import React, {Component} from 'react';

class Contact extends Component {
    state = { }
    render() {
        return (
            <div className="card">
                <div className="card-block contact">
                    <h4 className="card-title">Please send us words!</h4>
                    <textarea rows="5" cols="50"/>
                    <button className="btn btn-info">Thanks!</button>
                </div>
            </div>
        );
    }
}

export default Contact;