import React, {Component} from "react";
import axios from "axios";

const  User = props =>(
    localStorage.clear(),
    localStorage.setItem('user_id',props.user._id),
    localStorage.setItem('user_username',props.user.user_username),
    localStorage.setItem('user_password',props.user.user_password),
    <span style={{color:"black"}}> </span>
);

export default class Login extends Component{
     constructor(props) {
         super(props);
         this.onChangeUserName = this.onChangeUserName.bind(this);
         this.onChangePassword = this.onChangePassword.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state ={
             user_id:'',
             user_password:'',
             user_username : '',
             user:[],
         }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/userAccounts/username/'+ this.state.user_username)
    //         .then(response =>{
    //             this.setState({
    //                 user: response.data
    //             });
    //             this.usertList();
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    onChangeUserName(e){
        this.setState({
            user_username :e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            user_password :e.target.value
        });
    }

    usertList(){
        return this.state.user.map(currentTodo => {
            return <User user ={currentTodo} key={currentTodo._id}/>
        });
    }

    onSubmit(e){
        e.preventDefault(e);

        /////////////////////////////////////////////////////////////////////////////////
        this.usertList();
        const detail = {
            user_username: this.state.user_email,
            user_password: this.state.user_password,
        }

            axios.post('http://localhost:5000/userAccounts/username/'+ this.state.user_username,detail)
                .then(response =>{
                    this.setState({
                        user: response.data
                    });
                    // this.usertList();
                })
                .catch(function (error) {
                    console.log(error);
                });

                let usertemp = this.state.user;

                if (usertemp.length > 0){
                    alert("Successfully login");
                    window.location='/home';
                }else{
                    alert("Login fail");
                    // window.location='/login';
                }

                console.log("login success!");
                console.log(localStorage.getItem('user_id'));
                console.log(localStorage.getItem('user_username'));
                console.log(localStorage.getItem('user_password'));
                console.log(localStorage.getItem('user_email'));
        ////////////////////////////////////////////////////////////////////////////////
    }

    render(){
        return (
            <div className="container">
                {this.usertList()}
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
                                <label style={{float: 'left',  marginTop: '20px'}}>Email</label>
                                <input required className="form-control"
                                       type="text"
                                       placeholder="User Name"
                                       value = {this.state.user_username}
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
                            <a href="/forgotpassword" style={{fontSize:'12px', color:'blue',float: 'right'}}>Forgot password?</a>
                        </tr>
                        <tr>
                            <button href="/home" className="btn btn-primary" onClick={this.onSubmit} style={{marginTop:'20px', marginBottom:'10px',float: 'right',width:'110px'}}>Login</button>
                        </tr>
                        <tr>
                            <a href="/register" style={{fontSize:'12px', color:'blue',float: 'right'}}>Register</a>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}
