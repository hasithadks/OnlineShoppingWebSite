import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const  Product = props =>(
    <tr>
        <td>{props.product.item_name}</td>
        <td>{props.product.item_description}</td>
        <td>{props.product.item_category}</td>
        <td>{props.product.item_quanity}</td>
        <td>{props.product.item_discount}</td>
        <td>{props.product.item_from}</td>
        <td>{props.product.item_brand}</td>
        <td>{props.product.item_features}</td>
        <td>{props.product.item_image}</td>
        <td>
            <Link to={"/edititem/"+props.product._id}>Edit</Link>
        </td>
    </tr>
);
export default class ItemLists extends Component{

    constructor(props) {
        super(props);
        this.state = {products:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
            .then(response =>{
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/products/')
            .then(response =>{
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productList(){
        return this.state.products.map(function (currentTodo,i) {
            return <Product product ={currentTodo} key={i}/>
        });
    }
    render(){
        return(
            <div>
                <div className="container">
                    <h3>Items List</h3>
                    <table className="table table-striped" style={{marginTop :20}}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                            <th>From</th>
                            <th>Brand</th>
                            <th>Features</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.productList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
