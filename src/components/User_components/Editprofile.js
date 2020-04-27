import React, {Component} from "react";

export default class Editprofile extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (

            <div>
                <div className="container1">
                    <div style={{width:'70%', marginLeft:'15%'}}>
                        <hr/>
                            <h1>Update Profile</h1>
                        <hr/>
                    </div>

                    <form style={{marginBottom:'48px'}}>
                        <table style={{width:'70%', marginLeft:'16%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <table style={{width:'100%'}}>
                                            <tbody>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Email</label>
                                                        <div className="col-sm-12">
                                                            <input type="email" className="form-control" id="inputEmail3" required placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Phone</label>
                                                        <div className="col-sm-12">
                                                            <input type="numbers" className="form-control" id="inputPhone" required placeholder="Phone"/>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputUserName" className="col-sm-2 col-form-label" style={{float: 'left'}}>Name</label>
                                                        <div className="col-sm-12">
                                                            <input type="Text" className="form-control" id="inputUserName" required placeholder="User Name"/>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Gender</label>
                                                        <div className="col-sm-12">
                                                            <select className="browser-default custom-select">
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{width:'60%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Password</label>
                                                        <div className="col-sm-12">
                                                            <input type="password" className="form-control" id="inputPassword3" required placeholder="Password"/>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td style={{width:'40%'}}>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float:'left'}}>Birthday</label>
                                                        <div className='row col-sm-12' style={{marginLeft:'1px'}}>
                                                        <div style={{width:'85px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}>
                                                                <option value="year">Year</option>
                                                                <option value="male">2000</option>
                                                                <option value="female">2020</option>
                                                            </select>
                                                        </div>
                                                        <div style={{width:'85px',marginLeft:'2px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}>
                                                                <option value="year">Month</option>
                                                                <option value="male">January</option>
                                                                <option value="female">February</option>
                                                            </select>
                                                        </div>
                                                        <div style={{width:'85px',marginLeft:'2px'}}>
                                                            <select className="browser-default custom-select" style={{fontSize:'14px'}}>
                                                                <option value="year">Day</option>
                                                                <option value="male">1</option>
                                                                <option value="female">30</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    <td>
                                        <div>
                                            <div>
                                                <img id="blah" src="http://placehold.it/180" className="image"/>
                                            </div>
                                            <div style={{width:'110px',backgroundColor:'primary', marginLeft:'55px'}}>
                                                <input type="file" name="file" className="btn-primary" style={{width:'107px',padding:'5px',marginLeft:'-5px'}}/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="form-group" style={{marginTop:'15px'}}>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>

        )
    }
}