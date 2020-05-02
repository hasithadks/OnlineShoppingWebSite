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

export default class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName: 'Men T-Shirt',
            shirtSize: ['S', 'M', 'L', 'XL', 'XXL'],
            shirtColor: [],
            productPrice: 1250,
            discountedPrice: 1000,
            isLike: false,
            isDiscounted: false,
            likeImage: '',
            rating: 1,
            quantity: 0,
            discount: 25,
            productId: 1488,
            userID: 4787,
            favo_ID : ""

        };

        this.onChangeIsLike = this.onChangeIsLike.bind(this);
        this.onclickShoppingCart = this.onclickShoppingCart.bind(this);
        this.onClickMinesLeft = this.onClickMinesLeft.bind(this);
        this.onClickPlusRight = this.onClickPlusRight.bind(this);
    }

    componentDidMount() {
        axios.get(configs.BASE_URL + '/favouriteProduct/' + this.state.productId)
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {


                    let data = response.data[0];
                    if (data.isLiked === true) {
                        this.setState({
                            isLike: true,
                            favo_ID:data._id
                        });
                    } else {
                        this.setState({
                            isLike: false,
                            favo_ID:data._id
                        });
                    }
                }
            });
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
                axios.delete( configs.BASE_URL + '/favouriteProduct/delete/' + this.state.favo_ID)
                    .then(() => alert("Remove from favourite List"));
                }
                )
        }


    }

    onclickShoppingCart() {

    }

    onClickMinesLeft() {
        let temQty = this.state.quantity;
        if(temQty > 0) {
            temQty = temQty - 1;
            this.setState({quantity: temQty})
        }
    }

    onClickPlusRight() {
        let temQty = this.state.quantity;
        temQty = temQty + 1;
        this.setState({quantity: temQty})
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        return (
            <div className="container" style={{width: '100%'}}>
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
                                <h2 style={{color: 'orange', float:"right"}}> Rs. {this.state.discountedPrice}</h2>
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
                                <select style={{width: '100%'}} className="browser-default custom-select">
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                    <option value="xLarge">XL</option>
                                    <option value="xxLarge">XXL</option>

                                </select>
                            </div>
                        </div>
                        <div className="row" style={{padding: '5px'}}>
                            <div className="col-4" style={{padding: '0px'}}>
                                <label>Color : </label>
                            </div>
                            <div className="col-3" style={{padding: '0px'}}>
                                <select style={{width: '100%'}} className="browser-default custom-select">
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="blue">Blue</option>
                                    <option value="red">Red</option>
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
                                <div className="col-3" style={{padding: '0px', float:'left', marginRight:'-50px'}}>
                                    <br/>
                                    <span style={{marginLeft:'-50px'}}>Quantity : </span>
                                </div>
                                <div className="col-2" style={{padding: '0px'}}>
                                    <br/>
                                    <img src={minusImage} width="25" height="25"
                                         alt="Add Favourite Image" onClick={this.onClickMinesLeft}/>
                                </div>
                                <div className="col-1" style={{padding: '0px'}}>
                                    <br/>
                                    <input type="text" className="form-control" style={{width: '100%'}} id="quetity" value={this.state.quantity}/>
                                </div>
                                <div className="col-2" style={{padding: '0px',marginLeft:'-0px'}}>
                                    <br/>
                                    <img src={pluseImage} width="25" height="25"
                                         alt="Add Favourite Image" onClick={this.onClickPlusRight}/>
                                </div>
                                <div className="col-2" style={{padding: '0px'}}>
                                </div>

                            </div>
                        </div>

                        <div className="row" style={{marginLeft: '0px'}}>
                            <div className="col">


                                <a href="/shoppingcart" type="submit"
                                   className="profile-edit-btn nav-link  btn btn-primary" name="btnAddMore"
                                   style={{float: 'left', marginLeft: '5px', marginTop: '30px', marginBottom: '20px'}}>
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
