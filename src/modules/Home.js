import React, { Component } from 'react';
import firebase from './../Config';
import NavBar from './NavBar';
import TripsTails from './TripsTails';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: this.props.user
        }
    }

    // Get a reference to the database service
   // var database = firebase.database();
// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
// //
// writeUserData(userId, name, email, imageUrl) => {
//         firebase.database().ref('users/' + userId).set({
//             username: name,
//             email: email
//             //some more user data
//         });
//     }

    render() {
        return (
            <div>
                <NavBar user={this.state.user}/>
                <TripsTails user={this.state.user}/>
            </div>
        );

    }
}

export default Home;