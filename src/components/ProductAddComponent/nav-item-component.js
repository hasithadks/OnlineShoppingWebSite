import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../Images/logo.png";
import advertisement from "../Images/advertisement.png";
import axios from "axios";

export default class ItemNav extends Component{

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            user_email : localStorage.getItem('user_email'),
            user:[],
        }
    }

    onSubmit(e){
        e.preventDefault(e);

        const logout = {
            user_email : localStorage.getItem('user_email'),
        }

        axios.post('http://localhost:5000/userAccounts/logout/' + this.state.user_email,logout)
            .then(res => console.log((res.data)));

        localStorage.clear();
    }

    render(){
        return(
            <div style={{backgroundColor:"#ececec"}}>
                <div className="navbar navbar-expand-sm align-items-center justify-content-center">
                <div className="collpase nav-collapse">
                    <ul className="navbar-nav mr-sm-5 p-0">
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/" className="nav-link">SAVE MORE ON APP</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/edit/:id" className="nav-link"> CORPORATE & BULK PURCHASING</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}}  to ="/add" className="nav-link">SELL ON DARAZ</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/edit/:id" className="nav-link"> CUSTOMER CARE</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/add" className="nav-link">TRACK MY ORDER</Link>
                        </li>

                        <li>
                            <Link style={{color:"#f26f36"}} to ="/login" className="nav-link"> LOGIN</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/register" className="nav-link">SIGNUP</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} to ="/profile" className="nav-link">PROFILE</Link>
                        </li>
                        <li>
                            <Link style={{color:"#f26f36"}} onClick={this.onSubmit} className="nav-link">LOGOUT</Link>
                        </li>
                    </ul>
                </div>
            </div>

                <div className="container-fluid bg-white">
                    <div className="row">
                        <div className="mb-2"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link style={{color:"white"}}  to ="/" className="navbar-brand"><img src={logo} width="auto" height="50px" alt="google.com"/></Link>
                        </div>
                        <div className="col-sm-5">
                            <div className="input-group mb-1 mt-4">
                                <input type="text" className="form-control" placeholder="Search in Daraz"
                                       aria-label="Search in Daraz" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-block btn-warning" id="basic-addon2" >Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="float-md-right" src={advertisement} width="auto" height="90px" alt="google.com"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-2"></div>
                    </div>
                </div>
            </div>


        )
    }
}
