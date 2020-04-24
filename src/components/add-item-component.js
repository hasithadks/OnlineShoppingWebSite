import React, {Component} from 'react';
import axios from 'axios';
export default class AddItem extends Component{

    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
        this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
        this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
        this.onChangeItemDiscount = this.onChangeItemDiscount.bind(this);
        this.onChangeItemFrom = this.onChangeItemFrom.bind(this);
        this.onChangeItemBrand = this.onChangeItemBrand.bind(this);
        this.onChangeItemFeatures = this.onChangeItemFeatures.bind(this);
        this.onChangeItemImage = this.onChangeItemImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            item_name : '',
            item_description : '',
            item_category : '',
            item_quantity : '',
            item_discount : '',
            item_from : '',
            item_brand :'',
            item_features: '',
            item_image: ''
        }
    }

    onChangeItemName(e){
        this.setState({
            item_name :e.target.value
        });
    }

    onChangeItemDescription(e){
        this.setState({
            item_description :e.target.value
        });
    }

    onChangeItemCategory(e){
        this.setState({
            item_category :e.target.value
        });
    }
    onChangeItemQuantity(e){
        this.setState({
            item_quantity :e.target.value
        });
    }

    onChangeItemDiscount(e){
        this.setState({
            item_discount :e.target.value
        });
    }

    onChangeItemFrom(e){
        this.setState({
            item_from : e.target.value
        });
    }

    onChangeItemBrand(e){
        this.setState({
            item_brand : e.target.value
        });
    }

    onChangeItemFeatures(e){
        this.setState({
            item_features : e.target.value
        });
    }

    onChangeItemImage(e){
        this.setState({
            item_image : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`item name: ${this.state.item_name}`);
        console.log(`item description: ${this.state.item_description}`);
        console.log(`item category: ${this.state.item_category}`);
        console.log(`item quanity: ${this.state.item_quanity}`);
        console.log(`item discount: ${this.state.item_discount}`);
        console.log(`item from: ${this.state.item_from}`);
        console.log(`item brand: ${this.state.item_brand}`);
        console.log(`item features: ${this.state.item_features}`);
        console.log(`item image: ${this.state.item_image}`);

        const newItem = {
            item_name : this.state.item_name,
            item_description : this.state.item_description,
            item_category : this.state.item_category,
            item_quantity : this.state.item_quantity,
            item_discount : this.state.item_discount,
            item_from : this.state.item_from,
            item_brand : this.state.item_brand,
            item_features: this.state.item_features,
            item_image: this.state.item_image
        };

        axios.post('http://localhost:5000/products/add',newItem)
            .then(res => console.log(res.data));

        this.setState({
            item_name : '',
            item_description : '',
            item_category : '',
            item_quanity : '',
            item_discount : '',
            item_from : '',
            item_brand :'',
            item_features: '',
            item_image: ''
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="list-group list-group-flush z-depth-1 rounded">
                            <div className="list-group-item bg-dark d-flex justify-content-start align-items-center py-3">
                                <h4 style={{color:"white"}} > Add Item</h4>
                            </div>
                        </div>
                        <div className="list-group-item">

                            <label>Product Name: </label>
                            <input  type="text"
                                    className="form-control"
                                    value ={this.state.item_name}
                                    onChange={this.onChangeItemName}
                            />

                            <label>Product Description: </label>
                            <input type="text"
                                   className="form-control"
                                   value ={this.state.item_description}
                                   onChange={this.onChangeItemDescription}
                            />

                            <label>Product Catogory: </label>
                            <input type="text"
                                   className="form-control"
                                   value ={this.state.item_category}
                                   onChange={this.onChangeItemCategory}
                            />

                            <label>Product Quantity: </label>
                            <input type="text"
                                   className="form-control"
                                   value ={this.state.item_quantity}
                                   onChange={this.onChangeItemQuantity}
                            />

                            <label>Product Discount: </label>
                            <input type="text"
                                   className="form-control"
                                   value ={this.state.item_discount}
                                   onChange={this.onChangeItemDiscount}
                            />
                        </div>
                        <br/>
                        <div className="list-group-item">
                            <label>From: </label>
                            <input type="text"
                                   className="form-control"
                                   value ={this.state.item_from}
                                   onChange = {this.onChangeItemFrom}
                            />

                            <label>Brand: </label>
                            <input type="text"
                                   className="form-control"
                                   value = {this.state.item_brand}
                                   onChange={this.onChangeItemBrand}/>

                            <label>Fatures: </label>
                            <textarea className="form-control"
                                      value = {this.state.item_features}
                                      onChange={this.onChangeItemFeatures} />
                        </div>
                        <br/>
                        <div className="list-group-item">
                            <div className="custom-file" style={{marginTop:10}} >
                                <input type="file"
                                       className="custom-file-input"
                                       id="customFileLangHTML"
                                       value = {this.state.item_image}
                                       onChange={this.onChangeItemImage} />
                                <label className="custom-file-label" htmlFor="customFileLangHTML" data-browse="Choose files" >Upload Image</label>

                            </div>
                            <input style={{marginTop:10}} type ="submit" value ="Submit" className = "btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
