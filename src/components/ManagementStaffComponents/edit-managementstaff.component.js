import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class EditManagementStaff extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            password : '',
            fname : '',
            lname : '',
            role : ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/mstaff/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    username: response.data.username,
                    password : response.data.password,
                    fname : response.data.fname,
                    lname : response.data.lname,
                    role : response.data.role
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeUsername(e){
        this.setState({
            username : e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }

    onChangeFname(e){
        this.setState({
            fname : e.target.value
        });
    }

    onChangeLname(e){
        this.setState({
            lname : e.target.value
        });
    }

    onChangeRole(e){
        this.setState({
            role : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const managementstaff = {
            username : this.state.username,
            password : this.state.password,
            fname : this.state.fname,
            lname : this.state.lname,
            role : this.state.role
        }

        console.log(managementstaff);

        axios.post('http://localhost:5000/mstaff/update/'+this.props.match.params.id, managementstaff)
            .then(res => console.log(res.data));

        window.location = '/mstaff';
    }

    render() {
        return(
            <div className="container" align="center">
                <div className="container">
                    <h3>Edit Management Staff</h3>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>First Name :</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={this.state.fname} onChange={this.onChangeFname} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Last Name :</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={this.state.lname} onChange={this.onChangeLname} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>User Name :</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Password :</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Role :</label>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control" onChange={this.onChangeRole} value={this.state.role}>
                                        <option value="select">Select a Role</option>
                                        <option value="Store Manager">Store Manager</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <button style={{width:"auto",marginLeft:"340px",marginRight:"20px"}} className="btn btn-warning"><Link style={{color:"black"}} to={"/mstaff/"}>Back</Link></button>
                                <button style={{width:"auto"}} className="btn btn-primary" type="submit">Update Management Staff</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
