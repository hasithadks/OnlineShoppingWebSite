import React, {Component} from "react";
import deleteIcon from "../Images/delete_icon.png";
import axios from "axios";
import * as configs from "../../Config/config";
import ProductImage from "../Images/tshirt.jpg";


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            delivery: 150,
            subtotal: 0,
            total: 0,
            userID: "4787",
            cartList: [],
            selectedItem: 0,
            is_item_checkbox: false,
        };
        // this.calculateTotal = this.calculateTotal.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
        this.handleAllItems = this.handleAllItems.bind(this);

    }

    componentDidMount() {
        axios.get(configs.BASE_URL + '/cart/' + this.state.userID)
            .then(response => {
                this.setState({
                    cartList: response.data
                })
            });

    }

    onSelectItem(e) {

        let selectedName = e.target.name;
        let isChecked = e.target.checked;
        let value = e.target.value;
        console.log("Selected Name :" + selectedName);
        console.log("IsChecked :" + isChecked);
        console.log("value :" + value);


        this.setState({
            is_item_checkbox: isChecked
        });
    }

    handleAllItems(){


    }
// calculateTotal(){
//         let totalcal = this.state.delivery + this.state.subtotal;
//         this.setState({
//             total : totalcal
//         })
// }
    render() {
        return (

            <div className="container" style={{backgroundColor: '#ECECEC', padding: '20px', marginBottom: '10px'}}>
                <div className="row">
                    <div className="col-7" style={{backgroundColor: "white", padding: '20px', marginLeft: '30px'}}>
                        <div className="row">
                            <div className="col">
                                <h3>Shopping Cart</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <input type="checkbox" className="form-check"
                                       style={{float: 'left', marginTop: '8px'}}/>
                                <span style={{float: 'left', marginLeft: '10px'}}>SELECT ALL ITEMS</span>
                            </div>
                        </div>
                        <hr/>
                        {this.state.cartList.map((data, index) => {
                            return (
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" className="form-check" value={data.discounted_price}
                                               checked={this.state.is_item_checkbox.name} name={index}
                                               style={{float: 'left', marginTop: '25px'}}
                                               onClick={this.onSelectItem}/>
                                    </div>
                                    <div className="col-8" style={{marginLeft: '-5px'}}>
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={ProductImage} width="80" height="90" alt="Product Image"
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
                                                    <span style={{fontSize: '12px'}}>Color : {data.item_color}</span>
                                                </div>
                                                <div className="row">
                                                    <span style={{fontSize: '12px'}}>Qty : {data.requested_qty}</span>
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
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <span className="mx-1 text-danger fas fa-trash text-black-50"> </span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="col-4" style={{backgroundColor: "white", padding: '20px', marginLeft: '30px'}}>
                        <div className="row">
                            <h3 style={{float: "left", marginLeft: '15px'}}>Order Summary</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span style={{float: "left", marginLeft: '0px'}}>SubTotal (1 item/s)</span>
                            </div>
                            <div className="col">
                                <span style={{float: "right", marginRight: '5px'}}>Rs. 2000</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span style={{float: "left", marginLeft: '0px'}}>Delivery Fee</span>
                            </div>
                            <div className="col">
                                <span style={{float: "right", marginRight: '5px'}}>Rs. 200</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span style={{float: "left", marginLeft: '0px'}}>Total</span>
                            </div>
                            <div className="col">
                                <span style={{float: "right", marginRight: '5px'}}>Rs. 2200</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="#" type="submit"
                                   className="profile-edit-btn nav-link  btn btn-primary" name="btnAddMore"
                                   value="Proceed to Pay" style={{
                                    float: 'Right',
                                    marginRight: '0px',
                                    marginTop: '20px',
                                    marginBottom: '20px'
                                }}>
                                    Proceed Order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
