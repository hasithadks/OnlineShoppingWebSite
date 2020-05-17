import React, {Component} from "react";
import axios from "axios";
import * as configs from "../../Config/config";
import ProductImage from "../Images/tshirt.jpg";
import StarRating from "./StarRating";
import {FaStar} from "react-icons/fa";



export default class ProductRatings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            broughtItem: [],
            rating : null,
            hover : null,
            userRating : 0,

        }

        this.handleRating = this.handleRating.bind(this);

    }

    handleRating(rating){

        this.setState({
            userRating : rating
        })

    }

    render() {
        return (
            <div>
                <div className="container" style={{backgroundColor: '#ECECEC', padding: '20px', marginBottom: '10px'}}>
                    <div className="row">
                        <div className="col" style={{backgroundColor: "white", padding: '20px', marginLeft: '30px'}}>
                            <div className="row">
                                <div className="col">
                                    <h3>Rate to Products</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <h5>Your Brought Items</h5>
                                </div>
                            </div>
                            <hr/>
                            {this.state.broughtItem.map((data, index) => {
                                return (
                                    <div className="row">
                                        <div className="col-8" style={{marginLeft: '0px'}}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src={ProductImage} width="90" height="100" alt="Product Image"
                                                         style={{float: 'left'}}/>
                                                </div>
                                                <div className="col-9">
                                                    <div className="row">
                                                        <span>Product name</span>
                                                    </div>
                                                    <div className="row">
                                                        <span style={{fontSize: '12px'}}>Size : {data.item_size}</span>
                                                    </div>
                                                    <div className="row">
                                                        <span
                                                            style={{fontSize: '12px'}}>Color : {data.item_color}</span>
                                                    </div>
                                                    <div className="row">
                                                        <span
                                                            style={{fontSize: '12px'}}>Qty : {data.requested_qty}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="row">
                                            <span style={{
                                                fontSize: '25px',
                                                color: 'orange'
                                            }}><b>Rs. {data.discounted_price}</b></span>
                                                {data.item_discount > 0 ?
                                                    <div>
                                                        <label style={{
                                                            fontSize: '14px',
                                                            textDecoration: 'line-through'
                                                        }}><span>Rs. {data.item_price}</span></label>
                                                        <span style={{
                                                            marginLeft: '20px',
                                                            fontSize: '18px',
                                                            color: "red"
                                                        }}><b>{data.item_discount}%</b></span>
                                                    </div> :
                                                    <div>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <input type="button" value="Rate Now"/>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>


                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src={ProductImage} width="120" height="140" alt="Product Image"
                                 style={{float: 'left'}}/>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <span>Product Name</span>
                            </div>
                            <div className="row">
                                <span>Brand : Nike</span>
                            </div>
                            <div className="row">
                                <span>From : UK</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <h5>Give Stars for the Product</h5>
                    </div>
                    <div className="row">

                        {/*{[...Array(5)].map((star, i) => {*/}
                        {/*    const ratingValue = i + 1;*/}

                        {/*    return <label>*/}
                        {/*        <input type="radio" name="rating" style={{display: "none", cursor: "pointer"}} value={ratingValue}*/}
                        {/*               onClick={this.onCllickRating(ratingValue)}/>*/}
                        {/*        <FaStar size={40} color={ratingValue <= (this.state.hover || this.state.rating) ? "#ffc107" : "#e4e5e9"}*/}
                        {/*                onMouseEnter={() => this.setState({setHover :  ratingValue})}*/}
                        {/*                onMouseLeve = {() => this.setState({setHover : null})   }*/}
                        {/*                style={{cursor: "pointer"}}/>*/}
                        {/*    </label>*/}
                        {/*})}*/}

                        <label>Rating is {this.state.rating}.</label>

                        <StarRating handleRating={this.handleRating} />
                    </div>


                </div>

            </div>
        );
    }

}
