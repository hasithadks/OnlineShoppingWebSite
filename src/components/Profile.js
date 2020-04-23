import React, { Component } from 'react'
import './CSS/profile.css'

export default class Profile extends Component {
    render() {
        return (


            <div className="container emp-profile">
                <form className="proform">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">

                                <div className="profile-head">
                                    <h4 className="proname">
                                        Kshiti Ghelani
                                    </h4>

                                </div>

                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                            alt=""/>



                                        {/*<div className="file btn btn-lg btn-primary">*/}
                                        {/*    Change Photo*/}
                                        {/*    <input type="file" name="file"/>*/}
                                        {/*</div>*/}



                                    </div>
                                </div>
                                <div className="col-md-2 ">

                                    <a href="/edit" type="submit" className="profile-edit-btn nav-link  btn-primary editprobut" name="btnAddMore" value="Edit Profile">
                                    Edit Profile
                                    </a>

                                </div>
                            </div>


                        </div>
                        <div className="col-md-7 detail">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Female</p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>


    )
    }
}
