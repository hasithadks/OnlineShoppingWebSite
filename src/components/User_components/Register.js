import React, { Component } from 'react'
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

            <div className="container">
                <div style={{width:'75%', marginLeft:'12%',marginTop:'4%',marginBottom:'75px'}}>
                <hr/>
                <h1>Register</h1>
                <hr/>

            <form onSubmit={this.onSubmit}>
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr>
                            <td style={{width:'40%'}}>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Phone</label>
                                    <div className="col-sm-12">
                                        <input type="numbers" className="form-control" id="input" required placeholder="Phone"
                                               value={this.state.user_phone}
                                               onChange={this.onChangePhone}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td style={{width:'60%'}}>
                                <div className="form-group">
                                    <label htmlFor="inputUserName" className="col-sm-2 col-form-label" style={{float: 'left'}}>Name</label>
                                    <div className="col-sm-12">
                                        <input type="Text" className="form-control" id="inputUserName" required placeholder="User Name"
                                               value={this.state.user_username}
                                               onChange={this.onChangeUsername}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'40%'}}>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Password</label>
                                    <div className="col-sm-12">
                                        <input type="password" className="form-control" id="inputPassword3" required placeholder="Password"
                                               value={this.state.user_password}
                                               onChange={this.onChangePassword}
                                        />
                                    </div>
                                </div>
                            </td>

                            <td style={{width:'60%'}}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Email</label>
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" id="inputEmail3" required placeholder="Email"
                                               value={this.state.user_email}
                                               onChange={this.onChangeEmail}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'40%'}}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left'}}>Gender</label>
                                    <div className="col-sm-12">
                                    <select className="browser-default custom-select">
                                        <option value="male"
                                                checked={this.state.user_gender === 'Male'}
                                                onChange={this.onChangeGender}
                                        >Male</option>
                                        <option value="female"
                                                checked={this.state.user_gender === 'Female'}
                                                onChange={this.onChangeGender}>Female</option>
                                    </select>
                                    </div>
                                </div>



                                {/*<fieldset className="form-group">*/}
                                {/*    <div className="row">*/}
                                {/*        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>*/}
                                {/*        <div className="col-sm-12">*/}
                                {/*            <div className="form-check">*/}
                                {/*                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" defaultChecked*/}
                                {/*                       checked={this.state.user_gender === 'Male'}*/}
                                {/*                       onChange={this.onChangeGender}*/}
                                {/*                />*/}
                                {/*                <label className="form-check-label" htmlFor="gridRadios1">*/}
                                {/*                    Male*/}
                                {/*                </label>*/}
                                {/*            </div>*/}
                                {/*            <div className="form-check">*/}
                                {/*                <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female"*/}
                                {/*                        checked={this.state.user_gender === 'Female'}*/}
                                {/*                        onChange={this.onChangeGender}*/}
                                {/*                />*/}
                                {/*                <label className="form-check-label" htmlFor="gridRadios2">*/}
                                {/*                    Female*/}
                                {/*                </label>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</fieldset>*/}
                            </td>

                            <td style={{width:'60%'}}>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <div className="checkbox">
                                            <label style={{float: 'left',fontSize:'12px',marginTop:'10px'}}><input type="checkbox" name="remember" required/>By clicking "SIGN UP" I agree to Privacy Policy</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Sign Up</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*<div>*/}
                {/*    <div>*/}
                {/*        <img id="blah" src="http://placehold.it/180" className="image"*/}
                {/*        value={this.state.user_image}*/}
                {/*        onChange={this.onChangeImage}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <input type="file" name="file" className="file"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </form>
                </div>
            </div>



        )

    }

}
