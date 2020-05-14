import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const PCategory = props => (
    <tr>
        <td>{props.pcategory.categoryname}</td>
        <td>
            <button style={{paddingRight:"20px;",width:"auto"}} className="btn btn-warning mr-1"><Link style={{color:"black"}} to={"/admin/pcategory/edit/"+props.pcategory._id}>Edit</Link></button>
            <button style={{width:"auto"}} className="btn btn-danger" onClick={() => {props.deletePcategory(props.pcategory._id)}}>Delete</button>
        </td>
    </tr>
)

export default class ProductCategoryList extends Component{
    constructor(props) {
        super(props);

        this.deletePcategory = this.deletePcategory.bind(this);

        this.state = {
            pcategory : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/pcategory/')
            .then(response => {
                this.setState({ pcategory : response.data})
            })
            .catch(error =>{
                console.log(error);
            })
    }

    deletePcategory(id){
        axios.delete('http://localhost:5000/pcategory/'+id)
            .then(res => console.log(res.date))

        this.setState({
            pcategory : this.state.pcategory.filter(el => el._id !== id)
        })
    }

    categoryList(){
        return this.state.pcategory.map(currentcateogory => {
            return <PCategory pcategory={currentcateogory} deletePcategory={this.deletePcategory} key={currentcateogory._id} />;
        })
    }


    render() {
        return(
            <div className="container card">
                <div className="container" style={{marginBottom:"30px",marginTop:"30px"}}>
                    <h3 className="text-monospace">Product Category</h3>
                </div>
                <div align="right">
                    <button className="btn btn-primary" style={{width:"auto", marginBottom:"20px"}}><Link style={{color:"black"}} to={"/admin/pcategory/add"}>Add Product Category</Link></button>
                </div>

                <div>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Category Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.categoryList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
