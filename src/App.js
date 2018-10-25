import React, { Component } from 'react';
import './App.css';
import firebase from './Config';
import Login from "./modules/Login";
import Home from "./modules/Home";
import UserSettings from "./modules/UserSettings";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                localStorage.setItem('user', user.uid);

            } else {
                this.setState({user: null});
                localStorage.removeItem('user');
            }
        });
    };

    componentDidMount() {
        this.authListener();
    }

    render() {
        if (this.state.user !== null && this.state.user.displayName !== null){
            return <Home user={this.state.user}/>
        } else if (this.state.user !== null && this.state.user.displayName === null){
            return <UserSettings user={this.state.user}/>
        } else{
            return <Login/>
        }

    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Start/>
      </div>
    );
  }
}

export default App;
