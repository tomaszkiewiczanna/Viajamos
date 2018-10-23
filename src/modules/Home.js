import React, { Component } from 'react';
import firebase from './../Config';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: this.props.user
        }
    }

    logout = () => {
        firebase.auth().signOut();
    };

    render() {
        console.log(this.state.user);

        return (
            <div>
                <h1>Welcome Home {this.state.user.email}</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }
}

export default Home;