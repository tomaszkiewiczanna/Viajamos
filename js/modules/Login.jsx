import React from 'react';
import firebase from './../Config.jsx';

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
        }).then((u) => {
            console.log(u)
        })
            .catch((error) => {
                this.error(error)

            })
    };

    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            this.error(error)
        });
    };

    render() {
        return <div className="login-container">
            <h1 className="login-big-logo">viajamos</h1>
            <form className="login-form">
                <label>Email address</label>
                <input value={this.state.email} onChange={this.handleEmailChange} type="email" name="email"
                       className="login-form-input" id="email-input"
                       placeholder="Enter email"
                />

                <label>Password</label>
                <input value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password"
                       className="login-form-input" id="pass-email" placeholder="Password"
                />
                <button onClick={this.login} className="login-btn">Login</button>
                <button onClick={this.signup} className="login-btn">Sign up</button>
            </form>
            <h1>{this.state.text}</h1>
        </div>
    }
}

export default Login;