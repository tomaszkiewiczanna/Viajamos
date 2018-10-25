import React, { Component } from 'react';
import firebase from './../Config';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            text: '',
        }
    }

    error = (error) => {
        if (error.message) {
            this.setState({
                text: error.message,
            })
        }
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    signup = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then(() => {
        })
            .catch((error) => {
                this.error(error)

            })
    };

    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        }).catch((error) => {
            this.error(error)
        });
    };

    render() {
        return <div className="login-container">
            <h1 className="login-big-logo">viajamos</h1>
            <form className="login-form">
                <div className="login-form-inputs">
                    <input value={this.state.email} onChange={this.handleEmailChange} type="email" name="email"
                           className="login-form-input" id="email-input"
                           placeholder="Enter your e-mail"
                    />

                    <input value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password"
                           className="login-form-input" id="pass-email" placeholder="Password"
                    />
                </div>
                <p className="login-error-message">{this.state.text}</p>
                <div className="login-form-btns">
                    <button onClick={this.login} className="login-form-btn login-btn">Login</button>
                    <button onClick={this.signup} className="login-form-btn signup-btn">Sign up</button>
                </div>
            </form>
        </div>
    }
}

export default Login;