import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

class App extends Component {

    state = {
        username: '',
        avatar: ''
    };

    componentDidMount() {
        axios.get('https://api.github.com/users/ideepspace').then(
            res => {
                console.log(res.data);
                this.setState({
                    username: res.data.login ,
                    avatar: res.data.avatar_url
                });
            }
        );
    }

    render() {
        const { avatar, username } = this.state;
        return (
            <div className="app">
                <img src={avatar} alt="avatar"/>
                <h1>{username}</h1>
            </div>
        );
    }
}

export default App;
