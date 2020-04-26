import React, { Component } from 'react'
import '../CSS/register.css'
import axios from 'axios';

export default class Register extends Component {
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

    onChangeEmail(e){
        this.setState({
            user_email: e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            user_username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            user_password: e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            user_phone: e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            user_gender: e.target.value
        });
    }

    onChangeImage(e){
        this.setState({
            user_image: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            user_email: this.state.user_email,
            user_username: this.state.user_username,
            user_password: this.state.user_password,
            user_phone: this.state.user_phone,
            user_gender: this.state.user_gender,
            user_image: this.state.user_image
        }

        console.log(`email:${this.state.user_email}`);
        console.log(`username:${this.state.user_username}`);
        console.log(`password:${this.state.user_password}`);
        console.log(`phone:${this.state.user_phone}`);
        console.log(`gender:${this.state.user_gender}`);
        console.log(`image:${this.state.user_image}`);

        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log((res.data)));
    }

    render() {
        return (

            <div className="container1">
                <h1>Register</h1>

            <form className="regform" onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label inputlabel">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required placeholder="Email"
                        value={this.state.user_email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUserName" className="col-sm-2 col-form-label inputlabel">Name</label>
                    <div className="col-sm-10">
                        <input type="Text" className="form-control" id="inputUserName" required placeholder="User Name"
                        value={this.state.user_username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label inputlabel">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" required placeholder="Password"
                        value={this.state.user_password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label inputlabel">Phone</label>
                    <div className="col-sm-10">
                        <input type="numbers" className="form-control" id="inputPhone" required placeholder="Phone"
                        value={this.state.user_phone}
                        onChange={this.onChangePhone}
                        />
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check male">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" defaultChecked
                                checked={this.state.user_gender === 'Male'}
                                onChange={this.onChangeGender}
                                />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female"
                                checked={this.state.user_gender === 'Female'}
                                onChange={this.onChangeGender}
                                />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="imgupfield">
                    <div className="imgdiv">
                        <img id="blah" src="http://placehold.it/180" className="image"
                        value={this.state.user_image}
                        onChange={this.onChangeImage}
                        />
                    </div>

                    <div className= "filebut">
                        <input type="file" name="file" className="file"/>
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary butsign">Sign in</button>
                    </div>
                </div>
            </form>

            </div>

        )
    }
}
