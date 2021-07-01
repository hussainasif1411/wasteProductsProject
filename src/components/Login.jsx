import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
//import { Link, BrowserRouter as Router, Route, useHistory } from "react-router-dom";
// import Register from "./Register";

function Login() {

    let history = useHistory();

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value)
    }

    function handleUserPassword(event) {
        setUserPassword(event.target.value)
    }

    function login(event) {
        event.preventDefault();
        Axios.post("http://localhost:4000/login", {
            userName: userName,
            userPassword: userPassword
        })
        .then((res) => {
            // console.log(result.data);
            // if(result.length > 0){
            //     history.push("/wasteProduction");
            // }
            // else{
            //     //event.preventDefault() ;
            //     alert("User not found!");
            // }
            console.log(res);
            if (res.data.message) {
                setLoginStatus(res.data.message)
                alert("User dont exist!");
            }
            else {
                setLoginStatus(res.data[0].userName);
                
                history.push("/wasteProduction");
            }
        });

        //setUserList(response.data);


        //history.push("/wasteProduction");
    }

    return (
        // <Router>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1>Login</h1>
                    <p>Already have an account? Login to your system</p>

                    <form>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <label>Username</label><br></br>
                                <input type="text" onChange={handleUserName} placeholder="Enter your username here" />
                            </div>
                            <div className="col-md-12 mt-4 ">
                                <label>Password</label><br></br>
                                <input type="text" onChange={handleUserPassword} placeholder="Enter your password" />
                            </div>
                        </div>

                        <button className="mt-5 btn btn-success" type="submit" onClick={login}>Login</button>
                    </form>

                    <h1>Hello {loginStatus}</h1>


                    <p className="mt-5">Have not registered yet?
                        <Link to='/' onClick={() => {
                            history.push("/");
                        }} > Register here</Link></p>
                </div>
                <div className="col-md-6">

                    <img className="environment-img" src="http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg" />
                </div>
            </div>
        </div>
        // <Route exact path="/" component={Register} />
        // </Router>
    );
}

export default Login;