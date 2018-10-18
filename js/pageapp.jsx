import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import fire from './config';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                user: {}
            }
        }

        componentDidMount() {
            this.authListener();
        }

        authListener() {
            fire.auth().onAuthStateChanged((user) => {
                //console.log(user);
                if (user) {
                    this.setState({ user });
                    localStorage.setItem('user', user.uid);
                } else {
                    this.setState({ user: null });
                    localStorage.removeItem('user');
                }
            });
        }
        render() {
            return <div>
                if ( this.state.user) {
                <Home/>
            } else {
                <Login/>
            }
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});