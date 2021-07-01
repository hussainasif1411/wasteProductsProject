import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
//import {useForm} from "react-hook-form";
//import { Link, useHistory, BrowserRouter as Router, Route } from "react-router-dom";
//import Login from "./Login";

function Register() {

    let history = useHistory();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [userList, setUserList] = useState([]);

    function handleFname(event) {
        setFname(event.target.value)
    }

    function handleLname(event) {
        setLname(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleConfirmPassword(event) {
        setConfirmPassword(event.target.value)
        // if (confirmPassword !== password) {
        //     alert("Passwords do not match");
        // }
    }

    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }

    function register(event) {

        if (email.length === 0 && password.length === 0) {
            alert("Please provide the essential information");
        }

        else {
            if (password === confirmPassword) {
                // alert("Passwords do not match!");
                //console.log(fname);
                Axios.post("http://localhost:4000/create", {
                    fname: fname,
                    lname: lname,
                    email: email,
                    phoneNumber: phoneNumber,
                    password: password
                }).then(() => {
                    console.log("Success");
                });
                alert("Registered");
                //event.preventDefault();
                // setFname("");
                // setLname("");
                // setEmail("");
                // setPassword("");
                // setConfirmPassword("");
                // setPhoneNumber("");
                // //reset();

                
        

                history.push("/login");
                
            }

            else {
                alert("Passwords do not match!");
            }

        }


    }

    // function getLoginPage(){
    //     Axios.get("http://localhost:3001/getLogin").then(() => {
    //         console.log("Success");
    //     });
    // }

    return (
        // <Router>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">

                    <h1>Register</h1>
                    <p>Register your new account</p>


                    <div className="row mt-5">
                        <div className="col-md-6">
                            <label>First Name</label><br></br>
                            <input type="text" onChange={handleFname} placeholder="Your first name" />
                        </div>
                        <div className="col-md-6 ">
                            <label>Last Name</label><br></br>
                            <input type="text" onChange={handleLname} placeholder="Your last name" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <label>Email</label><br></br>
                            <input type="text" onChange={handleEmail} placeholder="Enter your email address" />
                        </div>
                        <div className="col-md-6">
                            <label>Phone</label><br></br>
                            <input type="text" onChange={handlePhoneNumber} placeholder="Enter your phone number" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <label>Password</label><br></br>
                            <input type="text" onChange={handlePassword} placeholder="Password" />
                        </div>
                        <div className="col-md-6">
                            <label>Confirm Password</label><br></br>
                            <input type="text" onChange={handleConfirmPassword} placeholder="Confirm Password" />
                            {/* (if (password !== confirmPassword) {
                                  alert("Passwords do not match!")
                                }) */}
                        </div>
                    </div>

                    <button className="mt-5 btn btn-success" type="submit" onClick={register}>Create Account</button>
                    <p className="mt-5">Already have an account?
                        <Link to='/login' onClick={() => {
                            history.push("/login");
                        }}> Login here</Link></p>
                    {/* <Route exact path="/login" component={Login} /> */}
                    {/* <p className="mt-5">Already have an account? <a href="">Login here</a></p> */}
                    {/* <p className="mt-5">Already have an account? <a href="" onClick={getLoginPage}>Login here</a></p> */}
                    {/* <button type="button" onClick={getLoginPage}>Login here</button> */}
                </div>
                <div className="col-md-6">

                    <img className="environment-img" src="http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg" />
                </div>
            </div>
        </div>
            // <Route exact path="/login" component={Login} />
        // </Router>
    );
}

export default Register;

{/* <Link to={`/component/${post.id}`}/>
  <span onClick={this.saveDataToLocalStorage}>More</span>
</Link> */}