import React, {Component} from "react";
import deleteIcon from "../Images/delete_icon.png";
import axios from "axios";
import * as configs from "../../Config/config";


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            delivery: 150,
            subtotal: 0,
            total: 0,
            userID: "4787",
            cartList: [],
        }
        // this.calculateTotal = this.calculateTotal.bind(this);

    }

    componentDidMount() {
        axios.get(configs.BASE_URL + '/cart/' + this.state.userID)
            .then(response => {
                this.setState({
                    cartList: response.data
                })
            });

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

                        <thead>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                {this.state.cartList.map((data, index) => {
                                    return (
                                        <div className="row">

                                        </div>
                                    )
                                })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label style={{float: "right"}}> Sub Total :<span>Rs. {this.state.subtotal}</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label style={{float: "right"}}> Delivery Chargers
                                    :<span>Rs. {this.state.delivery}</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label style={{float: "right", fontSize: '25px'}}> Total
                                    : <span>Rs. {this.state.total}</span> </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/deliveryDetails" type="submit"
                                   className="profile-edit-btn nav-link  btn-primary rounded" name="btnAddMore"
                                   value="Proceed Order">
                                    Proceed Order
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }

}
