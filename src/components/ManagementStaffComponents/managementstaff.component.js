import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const MStaff = props => (
    <tr>
        <td>{props.mstaff.fname}</td>
        <td>{props.mstaff.lname}</td>
        <td>{props.mstaff.email}</td>
        <td>{props.mstaff.role}</td>
        <td>
            <button style={{paddingRight:"20px;",width:"auto"}} className="btn btn-warning mr-1"><Link style={{color:"black"}} to={"/admin/mstaff/edit/"+props.mstaff._id}>Edit</Link></button>
            <button style={{width:"auto"}} className="btn btn-danger" onClick={() => {props.deleteMstaff(props.mstaff._id)}}>Delete</button>
        </td>
    </tr>
);

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
            .then(res => console.log(res.date));

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
                    <Link style={{color:"black", textDecoration:"none"}} to={"/admin/mstaff/add"}><button className="btn btn-block btn-warning">Add Product Category</button></Link>
                    <br/>
                </div>

                <div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
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
