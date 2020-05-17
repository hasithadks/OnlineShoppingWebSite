import React, { Component } from 'react'
import axios from "axios";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state ={
            user_email : localStorage.getItem('user_email'),
            user_password: localStorage.getItem('user_password'),
            user_username : localStorage.getItem('user_username'),
            user_phone : localStorage.getItem('user_phone'),
            user_gender :localStorage.getItem('user_gender'),
            user_image : localStorage.getItem('user_image'),
            user_b_year: localStorage.getItem('user_b_year'),
            user_b_month: localStorage.getItem('user_b_month'),
            user_b_day: localStorage.getItem('user_b_day'),
        };
    }

    componentDidUpdate() {
        this.state ={
            user_email : localStorage.getItem('user_email'),
            user_password: localStorage.getItem('user_password'),
            user_username : localStorage.getItem('user_username'),
            user_phone : localStorage.getItem('user_phone'),
            user_gender :localStorage.getItem('user_gender'),
            user_image : localStorage.getItem('user_image'),
            user_b_year: localStorage.getItem('user_b_year'),
            user_b_month: localStorage.getItem('user_b_month'),
            user_b_day: localStorage.getItem('user_b_day'),
        };
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
            <div className="container">
                <form style={{width:'100%', marginTop:'30px', marginBottom:'32px'}}>
                    <hr/>
                    <table style={{width:'75%', marginLeft:'15%'}}>
                        <tbody>
                            <tr>
                                <td>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="profile-head" style={{float:'left', marginLeft:'14px'}}>
                                                    <h4>

                                                    </h4>
                                                </div>
                                            </td>

                                            <td>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="col-md-4">
                                                    <div className="profile-img">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                                        />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="col-md-12 ">
                                                    <a href="/edit" type="submit" className="btn-primary nav-link" name="edit" value="Edit Profile">
                                                        Edit Profile
                                                    </a>
                                                </div>
                                                <div className="col-md-12 " style={{marginTop:'1px'}}>
                                                    <a href="/passwordchange" type="submit" className="btn-primary nav-link" name="edit" value="password change">
                                                        Change password
                                                    </a>
                                                </div>
                                            </td>

                                            <td>

                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>

                                <td>
                                    <table className="table" style={{marginTop:'60px'}}>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{float:'left'}}>{this.state.user_username}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{float:'left'}}>{this.state.user_email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{float:'left'}}>{this.state.user_phone}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Gender</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{float:'left'}}>{this.state.user_gender}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Birthday</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{float:'left'}}>{this.state.user_b_year}/{this.state.user_b_month}/{this.state.user_b_day}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                </form>
            </div>
            </div>
    )
    }
}
