import React, { Component } from 'react'
import '../CSS/home.css'
import axios from 'axios';
import {Link} from "react-router-dom";

const  Product = props =>(

    // <tr>
    //     <td>{props.product.item_name}</td>
    //     <td>{props.product.item_description}</td>
    //     <td>{props.product.item_category}</td>
    //     <td>{props.product.item_quanity}</td>
    //     <td>{props.product.item_discount}</td>
    //     <td>{props.product.item_from}</td>
    //     <td>{props.product.item_brand}</td>
    //     <td>{props.product.item_features}</td>
    //     <td>{props.product.item_image}</td>
    // </tr>

    <div className="row">
        <div className="col-sm-3">
                <div className="card">
                    {/* Card image */}
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                    {/* Card content */}
                    <div className="card-body">
                        {/* Title */}
                        <h4 className="card-title"><a>{props.product.item_name}</a></h4>
                        {/* Text */}
                        <p className="card-text">
                            {props.product.item_brand}
                        </p>
                        {/* Button */}
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
        </div>
    </div>


);

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state ={
            item_name:'',
            products: []};

        this.productsList = this.productsList.bind(this);

    }
    componentDidMount() {
        axios.get('http://localhost:5000/products/')
            .then(response =>{
                this.setState({products:response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    productsList(){
        // return this.state.products.map(currentproduct =>{
        //     return currentproduct;
        // })
        // return this.state.products.forEach(value => {
        //     this.item_name = value.item_name;
        // });
        return this.state.products.map(function (currentpro,i) {
            return <Product product = {currentpro} key={i}/>
        });
    }

    render() {
        return (

            <div className="container">

                <div>
                    <h1>HOME</h1>
                        <div className="row">
                            {this.productsList()}
                        </div>

                </div>


                {/*<h1>HOME</h1>*/}

                {/*<div className="row">*/}
                {/*    <div className="col-sm-3">*/}
                {/*        <div className="card">*/}
                {/*            /!* Card image *!/*/}
                {/*            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />*/}
                {/*            /!* Card content *!/*/}
                {/*            <div className="card-body">*/}
                {/*                /!* Title *!/*/}
                {/*                <h4 className="card-title"><a>Title</a></h4>*/}
                {/*                /!* Text *!/*/}
                {/*                <p className="card-text">*/}
                {/*                    PRICE*/}
                {/*                </p>*/}
                {/*                /!* Button *!/*/}
                {/*                <a href="#" className="btn btn-primary">Add to cart</a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<table>*/}
                {/*    <tbody>*/}
                {/*    {this.productsList()}*/}
                {/*    </tbody>*/}
                {/*</table>*/}
            </div>


        )
    }
}
