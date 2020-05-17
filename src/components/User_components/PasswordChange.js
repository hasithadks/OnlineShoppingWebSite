import React, { Component } from 'react'
import axios from "axios";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            user_id: '',
            user_email : '',
            user_password: '',
        };
    }

    componentDidMount() {
        if(localStorage.getItem('user_email') != null){
            axios.get('http://localhost:5000/userAccounts/username/'+ localStorage.getItem('user_email'))
                .then(response =>{
                    this.setState({
                        user_id : localStorage.getItem('user_id'),
                        user_email : localStorage.getItem('user_email'),
                        user_password : localStorage.getItem('user_password'),
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    }

    onChangeEmail(e){
        this.setState({
            user_email: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            user_password: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

            const user = {
                user_email: this.state.user_email,
                user_password: this.state.user_password,
            };

            console.log(`id:${this.state.user_id}`);
            console.log(`email:${this.state.user_email}`);
            console.log(`password:${this.state.user_password}`);

            axios.post('http://localhost:5000/userAccounts/update/' + this.state.user_email, user)
                .then(res => console.log((res.data)) && alert("Password Successfully changed!"));

            localStorage.setItem('user_email', this.state.user_email);
            localStorage.setItem('user_password', this.state.user_password);

    }


    render() {
        return (

            <div className="container">
                <div style={{width:'70%', marginLeft:'15%'}}>
                    <hr/>
                    <h2>Password change</h2>
                    <hr/>
                </div>

                <form onSubmit={this.onSubmit}>
                    <table style={{width:'100%', marginLeft:'30%'}} className="col-12">
                        <tr>
                            <td style={{width:'auto'}}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{float: 'left',marginLeft:'-5%'}}>Email</label>
                                    <div className="col-sm-5">
                                        <input type="email" className="form-control" id="inputEmail3" required placeholder="Email" disabled
                                               value={this.state.user_email}
                                               onChange={this.onChangeEmail}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'auto'}}>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left',marginLeft:'-4%'}}>Password</label>
                                    <div className="col-sm-5">
                                        <input type="password" className="form-control" id="inputPassword3" required placeholder="Password"
                                               value={this.state.user_password}
                                               onChange={this.onChangePassword}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'auto'}}>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" style={{float: 'left',marginLeft:'-1%'}}>Confirm password</label>
                                    <div className="col-sm-5">
                                        <input type="password" className="form-control" id="inputPassword3" required placeholder="Confirm password"
                                               value={this.state.user_confirmPassword}
                                               onChange={this.onChangeConfirmPassword}/>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <div className="form-group" style={{marginTop:'15px'}}>
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-primary">Password change</button>
                                </div>
                            </div>
                        </tr>
                    </table>
                </form>
            </div>

        )
    }
}