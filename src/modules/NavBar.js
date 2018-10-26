import React from 'react';
import firebase from './../Config';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    logout = () => {
        firebase.auth().signOut();
    };

    render(){
        return <div className="navbar">
            <h1 className="small-logo">viajamos</h1>
            <div className="navbar-right">
                <p className="navbar-right-sayhi">Hello, {this.props.user.displayName}!</p>
                <button  className="navbar-right-logout" onClick={this.logout}>Logout</button>
            </div>

        </div>
    }
}
export default NavBar;