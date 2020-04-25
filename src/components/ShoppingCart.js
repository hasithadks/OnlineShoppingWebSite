import React, {Component} from "react";
import deleteIcon from "./Images/delete_icon.png";


export default class ShoppingCart extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="row" style={{width:"80%"}}>
                    <div className="col">
                        <label>Selected Item : <span>0</span></label>
                    </div>
                    <div className="col">
                        <img src={deleteIcon} width="35" height="35" alt="Delete Icon" style={{float:"right"}}/>
                    </div>

                </div>
                <hr/>
                <div className="row" style={{width:"80%"}}>
                    <table style={{width:"100%"}}>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        <tr>
                            for loop
                        </tr>
                        <tr>
                            <label style={{float: "right"}}> Total Price :<span></span> </label>
                        </tr>
                        <tr>
                            <a href="/shoppingcart" type="submit" className="profile-edit-btn nav-link  btn-primary rounded" name="btnAddMore" value="Edit Profile">
                                Add to Cart
                            </a>
                        </tr>
                    </table>
                </div>

            </div>
        );
    }

}
