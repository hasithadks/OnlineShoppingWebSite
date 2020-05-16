import React, {Component} from "react";
import ProductImage from "../Images/tshirt.jpg";
import FavouriteImageGray from "../Images/favorite_grey.png";
import FavouriteImageRed from "../Images/favorite_red.png";
import {Link} from "react-router-dom";
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import pluseImage from '../Images/pluse.png';
import minusImage from '../Images/minus.png';
import {resolveToLocation} from "react-router-dom/modules/utils/locationUtils";
import * as configs from "../../Config/config";
import Toast from "react-bootstrap/Toast";

import {useState} from "react";
// function Example() {
//     const [showA, setShowA] = useState(true);
//     const [showB, setShowB] = useState(true);
//
//     const toggleShowA = () => setShowA(!showA);
//     const toggleShowB = () => setShowB(!showB);
//
//     return (
//         <Toast show={showA} autohide={true}>
//             <Toast.Header>
//                 <img
//                     src="holder.js/20x20?text=%20"
//                     className="rounded mr-2"
//                     alt=""
//                 />
//                 <strong className="mr-auto">Bootstrap</strong>
//                 <small>11 mins ago</small>
//             </Toast.Header>
//             <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//     );
// }

export default class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName: 'Men T-Shirt',
            productDiscription: "",
            item_category: "",
            manufacture: "",
            item_brand: "",
            shirtSize: ['S', 'M', 'L', 'XL', 'XXL'],
            itemColor: [],
            productPrice: 1250,
            discountedPrice: 1700,
            isLike: false,
            isDiscounted: true,
            likeImage: '',
            rating: 1,
            quantity: 0,
            discount: 0,
            productId: 0,
            userID: 4787,
            favo_ID: "",
            allProduct: [],
            productQuantities: [],
            availablecount: 0,
            selectedSize: '',
            selectedColor: '',

        };

        this.onChangeIsLike = this.onChangeIsLike.bind(this);
        this.onclickShoppingCart = this.onclickShoppingCart.bind(this);
        this.onClickMinesLeft = this.onClickMinesLeft.bind(this);
        this.onClickPlusRight = this.onClickPlusRight.bind(this);
        this.onAvailableItemCount = this.onAvailableItemCount.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
    }

    componentDidMount() {
        let pID = 0;
        let uID = 0;
        if (this.props.match.params.id != null) {
            axios.get('http://localhost:5000/products/' + this.props.match.params.id)
                .then(response => {
                    pID = response.data.item_id;
                    uID = this.state.userID;
                    //console.log("PID:" + pID);
                    this.setState({
                        productId: response.data.item_id,
                        productName: response.data.item_name,
                        productDiscription: response.data.item_description,
                        item_category: response.data.item_category,
                        discount: response.data.item_discount,
                        manufacture: response.data.item_from,
                        item_brand: response.data.item_brand,

                    }, () => {

                        //let ids = {pID, uID}
                        pID = this.state.productId;
                        console.log("Product ID : "+pID)
                        axios.get(configs.BASE_URL + '/favouriteProduct/uid/' + uID + '/pid/' + pID)
                            .then(response => {
                                // console.log("Product ID :"+this.state.productId);
                                // console.log(JSON.stringify(response.data) );

                                if (response.data.length > 0) {
                                    console.log(response.data);
                                    console.log("Is Like : "+response.data[0].isLiked);
                                    // const selectedItem = response.data.filter((dt) => {
                                    //     return dt.userID === this.state.userID
                                    //console.log("Selected Item:" + selectedItem);

                                        let data = response.data;
                                        if (data[0].isLiked === true) {
                                            this.setState({
                                                isLike: true,
                                                favo_ID: data[0]._id
                                            });
                                        }
                                    console.log("Favo ID : "+this.state.favo_ID);
                                }
                            });


                    })
                })
                .catch(function (error) {
                    console.log(error)
                })

        }

        if (this.state.productId != null) {
            axios.get('http://localhost:5000/quantity/5ebcbb0f5197cf361c4e32be')
                .then(response => {
                    this.setState({productQuantities: response.data});
                    let sizeList = [];
                    let colorList = [];
                    for (let i = 0; i < response.data.length; i++) {

                        sizeList.push(response.data[i].item_size);
                        colorList.push(response.data[i].item_colour);

                    }
                    this.setState({
                        shirtSize: sizeList,
                        itemColor: colorList
                    })
                    //  console.log(response.data);
                    //   console.log(this.state.itemColor);
                    // console.log(this.state.shirtSize);
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            this.setState({quantity: []});
        }


    }


    onChangeIsLike() {

        if (this.state.isLike === false) {
            this.setState({
                    isLike: true

                },
                () => {
                    let {productId, userID, isLike} = this.state;
                    let payload = {productId, userID, isLike};
                    //console.log(payload);
                    axios.post(configs.BASE_URL + '/favouriteProduct/add', payload)
                        .then(() => this.componentDidMount());
                }
            )

        } else {
            this.setState({
                    isLike: false

                },
                () => {
                    axios.delete(configs.BASE_URL + '/favouriteProduct/delete/' + this.state.favo_ID)
                        .then(() => alert("Remove from favourite List"));
                }
            )
        }


    }

    onclickShoppingCart() {

        if (this.state.shirtSize === "") {
            alert("Please Select Size");
        } else if (this.state.itemColor === "") {
            alert("Please Select Color");
        } else if (this.state.quantity === 0) {
            alert("Please Select Quantity");
        }
        console.log("size : " + this.state.shirtSize);
        if (this.state.shirtSize !== "" && this.state.itemColor !== "" && this.state.quantity > 0) {
            //  let {productId, userID, productPrice, discount, discountedPrice, selectedSize, selectedColor, quantity} = this.state;

            let productID = this.state.productId;
            let userID = this.state.userID;
            let item_price = this.state.productPrice;
            let item_discount = this.state.discount;
            let discounted_price = this.state.discountedPrice;
            let item_size = this.state.selectedSize;
            let item_color = this.state.selectedColor;
            let requested_qty = this.state.quantity;


            let payload = {
                productID,
                userID,
                item_price,
                item_discount,
                discounted_price,
                item_size,
                item_color,
                requested_qty
            };


            axios.post(configs.BASE_URL + '/cart/add', payload)
                .then(() => alert("Add to Cart"));
        }

    }

    async onAvailableItemCount(size, color) {
        try {
            if (size != null) {
                //console.log("size is not null");
                await this.setState({
                        selectedSize: size
                    }, () => {
                        console.log("In Method 2" + this.state.selectedSize);
                    }
                );
            }
            if (color != null) {
                //console.log("Color is not null");
                await this.setState({
                    selectedColor: color
                }, () => {
                    console.log("In Method 1" + this.state.selectedColor);
                });
            }

            let allQunttityArray = this.state.productQuantities;
            const {selectedSize, selectedColor} = this.state;
            if (selectedSize !== '' && selectedColor !== '') {
                const selectedItem = allQunttityArray.filter((data) => {
                    return data.item_size === selectedSize && data.item_colour === selectedColor
                });
                if (typeof selectedItem[0] !== "undefined") {

                    this.setState({
                        availablecount: selectedItem[0].item_quantity


                    });

                    //console.log("Selected Item : "+JSON.stringify(selectedItem[0].item_quantity));
                } else {
                    this.setState({
                        availablecount: 0
                    });
                }
            }
        }
        catch (exception) {
            console.log(exception);
        }

    }

    onChangeSize(e) {
        let selectedSize = e.target.value;

        this.onAvailableItemCount(selectedSize, null);
    }

    onChangeColor(e) {
        let selectedColor = e.target.value;

        this.onAvailableItemCount(null, selectedColor);
    }

    onClickMinesLeft() {
        let temQty = this.state.quantity;
        if (temQty > 0) {
            temQty = temQty - 1;
            this.setState({quantity: temQty});
        }
    }

    onClickPlusRight() {
        let temQty = this.state.quantity;
        if (temQty < this.state.availablecount) {
            temQty = temQty + 1;
            this.setState({quantity: temQty});
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }


    render() {
        return (
            <div className="container" style={{width: '100%'}}>
                {/*<div>*/}
                {/*   <Example/>*/}
                {/*</div>*/}
                <div className="row" style={{width: '100%'}}>
                    <div className="row-cols-1">
                        <img src={ProductImage} width="300" height="320" alt="Product Image"/>
                    </div>
                    <div className="row-cols-1" style={{width: '50%', height: 'auto'}}>
                        <div>
                            {this.state.isLike === false ?
                                <img className="img-thumbnail" src={FavouriteImageGray} width="50" height="50"
                                     alt="Add Favourite Image" onClick={this.onChangeIsLike}
                                     style={{float: 'Right'}}/> :
                                <img className="img-thumbnail" src={FavouriteImageRed} width="50" height="50"
                                     alt="Add Favourite Image" onClick={this.onChangeIsLike} style={{float: 'Right'}}/>}
                            <h4>{this.state.productName}</h4>
                            <span style={{fontSize: '14px'}}>Ratings</span>
                            <div className="row" style={{float: 'center', paddingBottom: '0px'}}>
                                <div className="col-lg-9" style={{paddingBottom: '0px'}}>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={6}
                                        value={this.rating}
                                        onStarClick={this.onStarClick.bind(this)}
                                        editing={false}
                                        value={4.2454}

                                        //rating={this.state.rating}
                                        //starRatedColor="blue"
                                        //changeRating={this.changeRating}
                                        //numberOfStars={6}
                                        //name='rating'
                                    />
                                </div>
                            </div>

                        </div>
                        <hr style={{marginTop: '2px'}}/>
                        <div className="row">
                            <div className="col-7">
                                <h2 style={{color: 'orange', float: "right"}}> Rs. {this.state.discountedPrice}</h2>
                            </div>

                            {this.state.isDiscounted !== false ?
                                <div className="col" style={{
                                    float: 'right',
                                    width: '80px', marginRight: '70px', marginTop: '0px'
                                }}>
                                    <h5 style={{color: 'red'}}>{this.state.discount}% Off</h5>
                                    <span style={{textDecoration: 'line-through'}}>Rs. {this.state.productPrice}</span>
                                </div> :
                                <div className="justify-content-lg-between" style={{
                                    float: 'right',
                                    width: '80px', marginRight: '70px', marginTop: '-40px'
                                }}>

                                </div>
                            }

                        </div>
                        <hr/>
                        <div className="row" style={{padding: '5px'}}>
                            <div className="col-4" style={{padding: '0px'}}>
                                <label>Size :</label>
                            </div>
                            <div className="col-3" style={{padding: '0px'}}>
                                <select style={{width: '100%'}} className="browser-default custom-select"
                                        onChange={(e) => this.onChangeSize(e)}>
                                    <option value="" disabled selected>Select Size</option>
                                    {this.state.shirtSize.map((size) => <option key={size}
                                                                                value={size}>{size}</option>)}


                                </select>
                            </div>
                        </div>
                        <div className="row" style={{padding: '5px'}}>
                            <div className="col-4" style={{padding: '0px'}}>
                                <label>Color : </label>
                            </div>
                            <div className="col-3" style={{padding: '0px'}}>
                                <select style={{width: '100%'}} className="browser-default custom-select"
                                        onChange={(e) => this.onChangeColor(e)}>
                                    <option value="" disabled selected>Select Color</option>
                                    {this.state.itemColor.map((color) => <option key={color}
                                                                                 value={color}>{color}</option>)}
                                </select>
                            </div>


                        </div>

                        <div>
                            <hr/>
                            <div className="row" style={{
                                float: 'left',
                                width: '100%',
                                margin: '0px',
                                padding: '10px',
                                marginTop: '-20px'
                            }}>
                                <div className="col-1" style={{padding: '0px'}}>
                                </div>
                                <div className="col-3" style={{padding: '0px', float: 'left', marginRight: '-50px'}}>
                                    <br/>
                                    <span style={{marginLeft: '-50px'}}>Quantity : </span>
                                </div>
                                <div className="col-2" style={{padding: '0px'}}>
                                    <br/>
                                    <img src={minusImage} width="25" height="25"
                                         alt="Add Favourite Image" onClick={this.onClickMinesLeft}/>
                                </div>
                                <div className="col-1" style={{padding: '0px'}}>
                                    <br/>
                                    <input type="text" className="form-control" style={{width: '100%'}} id="quetity"
                                           value={this.state.quantity}/>
                                </div>
                                <div className="col-2" style={{padding: '0px', marginLeft: '-0px'}}>
                                    <br/>
                                    <img src={pluseImage} width="25" height="25"
                                         alt="Add Favourite Image" onClick={this.onClickPlusRight}/>
                                </div>
                                <div className="col-2" style={{padding: '0px'}}>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-11">

                                    <span>Only {this.state.availablecount} Items Left </span>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{marginLeft: '0px'}}>
                            <div className="col-12">


                                <a href="#" type="submit" onClick={this.onclickShoppingCart}
                                   className="profile-edit-btn nav-link  btn btn-primary stop-color-final"
                                   name="btnAddMore"
                                   style={{
                                       float: 'center', marginLeft: '5px', marginTop: '30px', marginBottom: '20px',
                                       backgroundColor: 'orange', borderColor: 'orange', fontSize: '20px'
                                   }}>
                                    Add to Cart
                                </a>
                            </div>
                            {/* <button className=" btn btn-primary" style={{padding: 5, marginLeft: '5px'}}>Buy Now*/}
                            {/*<Link to={`/shoppingcart`}></Link>*/}
                            {/* </button>*/}
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}
