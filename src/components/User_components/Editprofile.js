import React, {Component} from "react";
import '../CSS/editprofile.css'

export default class Editprofile extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_email:'',
            user_username:'',
            user_password:'',
            user_phone:0,
            user_gender:'',
            user_image:'',
            users:[]
        }
    }



    render() {
        return (

            <div>
                <div className="container1">
                    <h1>Edit Profile</h1>

                    <form className="regform">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label inputlabel">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" required placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputUserName" className="col-sm-2 col-form-label inputlabel">Name</label>
                            <div className="col-sm-10">
                                <input type="Text" className="form-control" id="inputUserName" required placeholder="User Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label inputlabel">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" required placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label inputlabel">Phone</label>
                            <div className="col-sm-10">
                                <input type="numbers" className="form-control" id="inputPhone" required placeholder="Phone"/>
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check male">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="imgupfield">
                            <div className="imgdiv">
                                <img id="blah" src="http://placehold.it/180" className="image"/>
                            </div>

                            <div className= "filebut">
                                <input type="file" name="file" className="file"/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary butsign">Save changes</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

        )
    }
}