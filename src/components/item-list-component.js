import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
const  Product = props =>(
    <tr>
        <td>{props.product.item_name}</td>
        <td>{props.product.item_description}</td>
        <td>{props.product.item_category}</td>
        <td>{props.product.item_quantity}</td>
        <td>{props.product.item_discount}</td>
        <td>{props.product.item_from}</td>
        <td>{props.product.item_brand}</td>
        <td>{props.product.item_features}</td>
        <td>{props.product.item_image}</td>
        <td><div>
            <Link className="mx-1 text-success fas fa-pen text-decoration-none" to={"/additem/"+props.product._id}></Link><span className=" mx-1 text-danger fas fa-trash" href ='#' onClick={()=>{props.deleteProduct(props.product._id)}}></span>
            </div>
        </td>
    </tr>
);
export default class ItemLists extends Component{

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
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

    deleteProduct(id){
        axios.delete('http://localhost:5000/products/delete/'+id)
            .then(res => console.log(res.data));
        this.setState({
            products:this.state.products.filter(el => el.id !==id)
        })
    }

    productList(){
        return this.state.products.map(currentTodo => {
            return <Product product ={currentTodo} deleteProduct ={this.deleteProduct} key={currentTodo._id}/>
        });
    }
    render(){
        return(
            <div className="App-center">
                <div className="container">
                    <br/><br/>
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
                            <th>Action</th>
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
