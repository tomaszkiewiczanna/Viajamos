import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './Config.jsx';
import Login from "./modules/Login.jsx";
import Home from "./modules/Home.jsx";
import './../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
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
            if (this.state.user === null){
                return <Login/>
            } else {
                return <Home user={this.state.user}/>
            }

        }
    }

    class App extends React.Component {
        render() {
            return <Start/>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});