import React, {Component} from "react";

export default class Login extends Component{


    render(){
        return (
            <div className="container">
                <div style={{width:'50%',marginLeft:'25%',marginTop:'6%',marginBottom:'83px'}}>
                <div style={{width:'70%',marginLeft:'16%'}}>
                    <hr/>
                    <h3>Login</h3>
                    <hr/>
                </div>
                <table style={{ marginLeft:'17%', marginTop:'10px'}}>
                    <tbody>
                        <tr>
                            <div className="form-group">
                                <label style={{marginLeft: '20px', float: 'left',  marginTop: '20px'}}>User Name</label>
                                <input required className="form-control" style={{marginLeft: '20px', float: 'left'}}
                                       type="text"
                                       placeholder="User Name"
                                />
                            </div>
                        </tr>
                        <tr>
                            <div className="form-group">
                                <label style={{marginLeft: '20px', float: 'left',  marginTop: '20px'}}>Password</label>
                                <input required className="form-control" style={{marginLeft: '20px', float: 'left'}}
                                       type="password"
                                       placeholder="Password"
                                />
                            </div>
                        </tr>
                        <tr>
                            <a href="#" style={{fontSize:'12px', color:'blue',float: 'right'}}>Forgot password?</a>
                        </tr>
                        <tr>
                            <button className="btn btn-primary" style={{marginTop:'20px', marginBottom:'10px',float: 'right',width:'110px'}}>Login</button>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}