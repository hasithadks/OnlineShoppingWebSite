import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const MStaff = props => (
    <tr>
        <td>{props.mstaff.fname}</td>
        <td>{props.mstaff.lname}</td>
        <td>{props.mstaff.username}</td>
        <td>{props.mstaff.role}</td>
        <td>
            <button style={{paddingRight:"20px;",width:"auto"}} className="btn btn-warning"><Link style={{color:"black"}} to={"/mstaff/edit/"+props.mstaff._id}>Edit</Link></button>
            <button style={{width:"auto"}} className="btn btn-danger" onClick={() => {props.deleteMstaff(props.mstaff._id)}}>Delete</button>
        </td>
    </tr>
)

export default class ManagementStaffList extends Component{
    constructor(props) {
        super(props);

        this.deleteMstaff = this.deleteMstaff.bind(this);

        this.state = {
            mstaff : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/mstaff/')
            .then(response => {
                this.setState({ mstaff : response.data})
            })
            .catch(error =>{
                console.log(error);
            })
    }

    deleteMstaff(id){
        axios.delete('http://localhost:5000/mstaff/'+id)
            .then(res => console.log(res.date))

        this.setState({
            mstaff : this.state.mstaff.filter(el => el._id !== id)
        })
    }

    mstaffList(){
        return this.state.mstaff.map(currentstaff => {
            return <MStaff mstaff={currentstaff} deleteMstaff={this.deleteMstaff} key={currentstaff._id} />;
        })
    }


    render() {
        return(
            <div className="container card">
                <div className="container" style={{marginBottom:"30px",marginTop:"30px"}}>
                    <h3 className="text-monospace">Management Staff</h3>
                </div>
                <div align="right">
                    <button className="btn btn-primary" style={{width:"auto", marginBottom:"20px"}}><Link style={{color:"black"}} to={"/mstaff/add"}>Add Management Staff</Link></button>
                </div>

                <div>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">FirstName</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Username</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.mstaffList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
