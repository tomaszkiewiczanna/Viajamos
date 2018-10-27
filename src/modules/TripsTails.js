import React from 'react';
import firebase from './../Config';

class TripsTails extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: this.props.user
        }
    }

    render(){
        return <div className="tripstails-container">
        <h1 className="tripstails-header">Your trips</h1>
            <div className="triptails">
                <p className="triptails-name">+</p>
                <p className="triptails-date">Add new</p>
            </div>

        </div>
    }
}
export default TripsTails;