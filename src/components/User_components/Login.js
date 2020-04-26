import React, {Component} from "react";
import '../CSS/login.css'

export default class Login extends Component{


    render(){
        return (
            <div className="container2">
                <h1>Login</h1>
            <form className="logform">
                <div className="row">
                <label>User Name</label>
                <input required className="input"
                    type="text"
                    placeholder="User Name"
                />
                </div>
                <div className="row">
                <label>Password</label>
                <input required className="inputpw"
                    type="password"
                    placeholder="Password"
                />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            </div>
        )

    }
}