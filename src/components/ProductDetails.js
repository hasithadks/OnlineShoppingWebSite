import React, {Component} from "react";
import ProductImage from "./Images/tshirt.jpg";
import FavouriteImageGray from "./Images/favorite_grey.png";


export default class ProductDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            productName : 'Men T-Shirt',
            shirtSize : ['S','M','L','XL','XXL'],
            shirtColor : [],
            productPrice : 1250,
            productDiscount : 20,
            discountedPrice : 1000

        };
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="row-cols-1">
                       <img src={ProductImage} width="300" height="320" alt="Product Image"/>
                    </div>
                    <div className="row-cols-1" style={{width:'40%',height:'auto'}}>
                        <div>
                            <h4>{this.state.productName}</h4>
                            <hr/>
                        </div>
                        <div>
                            <img src={FavouriteImageGray} width="40" height="40" alt="Add Favourite Image" style={{float:'Right'}}/>
                            <label>Size :</label>
                            <select>
                                <option value="small">S</option>
                                <option value="medium">M</option>
                                <option value="large">L</option>
                                <option value="xLarge">XL</option>
                                <option value="xxLarge">XXL</option>

                            </select>

                        </div>
                        <div>
                            <label>Color : </label>
                            <select>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                        <div>
                            <label>Quantity : </label>
                            <input type="number" style={{width:'30%'}}/>
                        </div>
                        <hr/>
                        <div>
                            <lable>
                                Product Price :
                            </lable>
                            <label> Rs. {this.state.productPrice}</label>
                        </div>
                        <div id="discountRow">
                            <lable>
                                Product Discount :
                            </lable>
                            <label>{this.state.productDiscount} %</label>
                        </div>
                        <div>
                            <lable>
                                Discounted Price :
                            </lable>
                            <label> Rs. {this.state.discountedPrice}</label>
                        </div>
                        <div>
                            <button className="btn btn-primary" style={{padding:5}}>Add to Cart</button>
                            <button className=" btn btn-primary" style={{padding:5, leftMargin:5}}>Buy Now</button>
                        </div>



                    </div>
                </div>
            </div>

        );
    }
}