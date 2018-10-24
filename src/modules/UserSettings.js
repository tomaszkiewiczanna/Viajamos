import React, {Component} from 'react';
import firebase from './../Config';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            name: '',
            text: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    changeName = (e) => {
        e.preventDefault();
        if (this.state.name !== ""){
            firebase.auth().currentUser.updateProfile({
                displayName: this.state.name,
            }).then(function() {
                console.log('updated');
            }).catch(function(error) {
                console.log('not updated')
            });
        } else {
            this.setState({
                text: 'Type in your name, please.'
            })
        }
    };

    render() {
        return (
            <div className="userSettings-container">
                <h1 className="login-big-logo">viajamos</h1>
                <form className="userSettings-form">
                    <div className="userSetting-form-inputs">
                        <input value={this.state.name} onChange={this.handleNameChange} type="name" name="name"
                               className="userSettings-form-input" id="name-input"
                               placeholder="What's your name?"
                        />
                    </div>
                    <div className="userSetting-form-btns">
                        <button onClick={this.changeName} className="userSetting-btn">Set name</button>
                    </div>
                </form>
                <p className="userSetting-error-message">{this.state.text}</p>
            </div>
        );

    }
}

export default UserSettings;