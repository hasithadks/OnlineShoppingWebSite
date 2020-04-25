import React, {Component} from "react";
import deleteIcon from "./Images/delete_icon.png";


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            delivery: 150,
            subtotal: 0,
            total: 0
        }
        // this.calculateTotal = this.calculateTotal.bind(this);

    }

// calculateTotal(){
//         let totalcal = this.state.delivery + this.state.subtotal;
//         this.setState({
//             total : totalcal
//         })
// }
    render() {
        return (

            <div className="">
                <div className="row">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="row" style={{width: "80%"}}>
                    <div className="col">
                        <label>Selected Item : <span>0</span></label>
                    </div>
                    <div className="col">
                        <img src={deleteIcon} width="35" height="35" alt="Delete Icon" style={{float: "right"}}/>
                    </div>

                </div>
                <hr/>
                <div className="row" style={{width: "80%"}}>
                    <table style={{width: "100%"}}>
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
                            <label style={{float: "right"}}> Sub Total :<span>Rs. {this.state.subtotal}</span> </label>
                        </tr>
                        <tr>
                            <label style={{float: "right"}}> Delivery Chargers :<span>Rs. {this.state.delivery}</span>
                            </label>
                        </tr>
                        <tr>
                            <label style={{float: "right", fontSize: '25px'}}> Total
                                : <span>Rs. {this.state.total}</span> </label>
                        </tr>
                        <tr>
                            <a href="/deliveryDetails" type="submit"
                               className="profile-edit-btn nav-link  btn-primary rounded" name="btnAddMore"
                               value="Proceed Order">
                                Proceed Order
                            </a>
                        </tr>
                    </table>
                </div>

            </div>
        );
    }

}
