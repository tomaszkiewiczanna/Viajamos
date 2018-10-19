import React from 'react';
import firebase from './../Config.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <div>
                <h1>Welcome Home {this.props.user.email}</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }
}

export default Home;