import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state ={
            users:[]
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
                                                        Kshiti Ghelani
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
                                                        <p>Kshiti123</p>
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
                                                        <p>kshitighelani@gmail.com</p>
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
                                                        <p>123 456 7890</p>
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
                                                        <p>Female</p>
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
                                                        <p>1997/11/24</p>
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







                    {/*<div className="row">*/}
                    {/*    <div className="col-md-4">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="profile-head">*/}
                    {/*                <h4>*/}
                    {/*                    Kshiti Ghelani*/}
                    {/*                </h4>*/}
                    {/*            </div>*/}

                    {/*            <div className="col-md-4">*/}
                    {/*                <div className="profile-img">*/}
                    {/*                    <img*/}
                    {/*                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"*/}
                    {/*                        />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="col-md-2 ">*/}
                    {/*                <a href="/edit" type="submit" className="profile-edit-btn nav-link  btn-primary" name="btnAddMore" value="Edit Profile">*/}
                    {/*                Edit Profile*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                    {/*    </div>*/}
                    {/*    <div className="col-md-7 detail">*/}
                    {/*        <div className="tab-content profile-tab" id="myTabContent">*/}
                    {/*            <div className="tab-pane fade show active" id="home" role="tabpanel"*/}
                    {/*                 aria-labelledby="home-tab">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <label>Name</label>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <p>Kshiti123</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row">*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <label>Email</label>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <p>kshitighelani@gmail.com</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row">*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <label>Phone</label>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <p>123 456 7890</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*                <div className="row">*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <label>Gender</label>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-md-6">*/}
                    {/*                        <p>Female</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </form>
            </div>
            </div>
    )
    }
}
