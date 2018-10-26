import React, { Component } from 'react';
import firebase from './../Config';
import NavBar from './NavBar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: this.props.user
        }
    }

    render() {
        return (
            <div>
                <NavBar user={this.state.user}/>
            </div>
        );

    }
}

export default Home;