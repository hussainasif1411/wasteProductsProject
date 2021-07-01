// index.html

< !DOCTYPE html >
    <html lang="en">
        <head>
            <title>React App</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
    </html>

//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
    <App />, document.getElementById('root')
);

//App.jsx

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile"
                    component={() => <Profile authorized={true} />} />
            </Switch>
        </Router>
    )
}

export default App;

//Login.jsx

import react from "react";
import { useHistory } from "react-router-dom";

function Login() {

    let history = useHistory();

    return (
        <div>
            <input type="text" placeholder="Enter your name" /><br></br>
            <input type="text" placeholder="Enter your password" />
            <button onClick={() => {
                history.push("/profile");
            }}>Login</button>
        </div>
    );
}

export default Login;

//Profile.jsx

import react from "react";
import { Redirect } from "react-router-dom";

function Profile({ authorized }) {
    if (!authorized) {
        return (
            <Redirect to="/login" />
        );
    }
    return (
        <div>
            Login Successful!!
        </div>
    )
}

export default Profile;