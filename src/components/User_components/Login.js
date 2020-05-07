import React, {Component} from "react";
import axios from "axios";

export default class Login extends Component{

     constructor(props) {
         super(props);

         this.onChangeUserName = this.onChangeUserName.bind(this);
         this.onChangePassword = this.onChangePassword.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state ={
             user_email : '',
             user_password:'',
             user_username : '',
             user_phone : '',
             user_gender :'',
             user_image : ''
         }
    }

     onSubmit(e){
         e.preventDefault(e);

       //  console.log(`Form submitted:`);
       //  console.log(`email: ${this.state.user_email}`);
       //  console.log(`password: ${this.state.user_password}`);

         axios.get('http://localhost:5000/users/username/'+ this.state.user_email)
             .then(response =>{
                 this.setState({
                     //_id :response.data._id,
                     user_email : response.data.user_email,
                     user_username : response.data.user_username,
                     user_password : response.data.user_password,
                     user_phone : response.data.user_phone,
                     user_gender : response.data.user_gender,
                     user_image : response.data.user_image,
                 })
             })
             .catch(function (error) {
                 console.log(error)
             });

         console.log(`Form submitted:`);
         console.log(`email: ${this.state.user_email}`);
         console.log(`username: ${this.state.user_username}`);
         console.log(`password: ${this.state.user_password}`);
         console.log(`phone: ${this.state.user_phone}`);
         console.log(`gender: ${this.state.user_gender}`);
         console.log(`image: ${this.state.user_image}`);
    }

    onChangeUserName(e){
        this.setState({
            user_email :e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            user_password :e.target.value
        });
    }

    render(){
        return (
            <div className="container">
                <div style={{width:'50%',marginLeft:'25%',marginTop:'6%',marginBottom:'83px'}}>
                <div style={{width:'70%',marginLeft:'9%'}}>
                    <hr/>
                    <h3>Login</h3>
                    <hr/>
                </div>
                <table style={{ marginLeft:'17%', marginTop:'10px'}}>
                    <tbody>
                        <tr>
                            <div className="form-group">
                                <label style={{float: 'left',  marginTop: '20px'}}>User Name</label>
                                <input required className="form-control"
                                       type="text"
                                       placeholder="User Name"
                                       value = {this.state.user_email}
                                       onChange={this.onChangeUserName}
                                />
                            </div>
                        </tr>
                        <tr>
                            <div className="form-group">
                                <label style={{float: 'left',  marginTop: '8px'}}>Password</label>
                                <input required className="form-control"
                                       type="password"
                                       placeholder="Password"
                                       value = {this.state.user_password}
                                       onChange={this.onChangePassword}
                                />
                            </div>
                        </tr>
                        <tr>
                            <a href="#" style={{fontSize:'12px', color:'blue',float: 'right'}}>Forgot password?</a>
                        </tr>
                        <tr>
                            <button className="btn btn-primary" onClick={this.onSubmit} style={{marginTop:'20px', marginBottom:'10px',float: 'right',width:'110px'}}>Login</button>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}
