import React, {Component} from 'react';
import axios from 'axios';

const  Quantity = props =>(
    <tr>
        <td>{props.quantity.item_id}</td>
        <td>{props.quantity.item_size}</td>
        <td>{props.quantity.item_colour}</td>
        <td>{props.quantity.item_quantity}</td>
        <td>{props.quantity.item_price}</td>
        <td><div>
            <span className=" mx-1 text-success fas fa-pen" href ='#' onClick={()=>{props.fillQuantity(props.quantity._id)}}>Edit</span><span className=" mx-1 text-danger fas fa-trash" href ='#' onClick={()=>{props.deleteQuantity(props.quantity._id)}}>Delete</span>
        </div>
        </td>
    </tr>
);

export default class AddEditItem extends Component{

    constructor(props) {
        super(props);

        this.deleteQuantity = this.deleteQuantity.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
        this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
        this.onChangeItemDiscount = this.onChangeItemDiscount.bind(this);
        this.onChangeItemFrom = this.onChangeItemFrom.bind(this);
        this.onChangeItemBrand = this.onChangeItemBrand.bind(this);
        this.onChangeItemFeatures = this.onChangeItemFeatures.bind(this);
        this.onChangeItemImage = this.onChangeItemImage.bind(this);

        this.onChangeItemId = this.onChangeItemId.bind(this);
        this.onChangeItemSize = this.onChangeItemSize.bind(this);
        this.onChangeItemColour = this.onChangeItemColour.bind(this);
        this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);

        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onQuantity = this.onQuantity.bind(this);
        this.fillQuantity = this.fillQuantity.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);

        this.state ={
            item_name : '',
            item_description : '',
            item_category : '',
            item_quantity : '',
            item_discount : '',
            item_from : '',
            item_brand :'',
            item_features: '',
            item_image: '',
            editItem : false,
            item_id: '',
            item_size: '',
            item_colour: '',
            item_price:'',
            quantity:[],
            id:'',
            quantityItem : false,
            nextStep:false,

        }
    }

    quantityList(){
        return this.state.quantity.map(currentTodo => {
            return <Quantity quantity ={currentTodo} deleteQuantity ={this.deleteQuantity}  fillQuantity ={this.fillQuantity} key={currentTodo._id}/>
        });
    }

    deleteQuantity(id){
        axios.delete('http://localhost:5000/quantity/delete/'+id)
            .then(res => console.log(res.data));
        this.setState({
            quantity:this.state.quantity.filter(el => el.id !==id)
        })
    }



    fillQuantity(id){
        axios.get('http://localhost:5000/quantity/qty/'+ id)
            .then(response =>{
                this.setState({
                    id :response.data._id,
                    item_quantity : response.data.item_quantity,
                    item_price : response.data.item_price,
                })
            })
            .catch(function (error) {
                console.log(error)
            });
        this.setState({
            quantityItem : true
        });

    }

    componentDidUpdate() {
        if(this.state.item_id != null){
        axios.get('http://localhost:5000/quantity/'+this.state.item_id)
            .then(response =>{
                this.setState({quantity: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        else{
            this.setState({quantity:[]});
        }
    }

    componentDidMount() {
        if(this.props.match.params.id != null){
            axios.get('http://localhost:5000/products/'+ this.props.match.params.id)
                .then(response =>{
                    this.setState({
                        item_id : response.data.item_id,
                        item_name : response.data.item_name,
                        item_description : response.data.item_description,
                        item_category : response.data.item_category,
                        item_discount : response.data.item_discount,
                        item_from : response.data.item_from,
                        item_brand : response.data.item_brand,
                        editItem : true,
                        nextStep : true

                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        }else{
            this.setState({
                editItem : false
            });
        }

        if(this.state.item_id != null){
            axios.get('http://localhost:5000/quantity/'+this.state.item_id)
                .then(response =>{
                    this.setState({quantity: response.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else{
            this.setState({quantity:[]});
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

    onChangeItemId(e){
        this.setState({
            item_id : e.target.value
        })
    }

    onChangeItemSize(e){
        this.setState({
            item_size : e.target.value
        })
    }

    onChangeItemColour(e){
        this.setState({
            item_colour : e.target.value
        })
    }

    onChangeItemQuantity(e){
        this.setState({
            item_quantity :e.target.value
        });
    }
    onChangeItemPrice(e){
        this.setState({
            item_price :e.target.value
        });
    }



    onQuantity(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`item id: ${this.state.item_id}`);
        console.log(`item colour: ${this.state.item_colour}`);
        console.log(`item size: ${this.state.item_size}`);
        console.log(`item quantity: ${this.state.item_quantity}`);
        console.log(`item price: ${this.state.item_price}`);

        const newQuantity = {
            item_id : this.state.item_id,
            item_size : this.state.item_size,
            item_colour : this.state.item_colour,
            item_price : this.state.item_price,
            item_quantity : this.state.item_quantity,
        };

        axios.post('http://localhost:5000/quantity/add',newQuantity)
            .then(res => console.log((res.data)));

        this.setState({
            item_size: '',
            item_colour: '',
            item_price:'',
            item_quantity:'',
        })
    }

    updateQuantity(e){
        e.preventDefault();

        const editQuantity = {
            item_id : this.state.item_id,
            item_size : this.state.item_size,
            item_colour : this.state.item_colour,
            item_price : this.state.item_price,
            item_quantity : this.state.item_quantity,
        };

        axios.post('http://localhost:5000/quantity/update/'+this.state.id,editQuantity)
            .then(res => console.log(res.data));
        // this.props.history.push('/');
        this.setState({
            quantityItem : false
        });

        this.setState({
            item_size: '',
            item_colour: '',
            item_price:'',
            item_quantity:'',
        })
    }
    onAdd(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`item name: ${this.state.item_name}`);
        console.log(`item description: ${this.state.item_description}`);
        console.log(`item category: ${this.state.item_category}`);
        console.log(`item quanity: ${this.state.item_quantity}`);
        console.log(`item discount: ${this.state.item_discount}`);
        console.log(`item from: ${this.state.item_from}`);
        console.log(`item brand: ${this.state.item_brand}`);
        console.log(`item features: ${this.state.item_features}`);
        console.log(`item image: ${this.state.item_image}`);
        console.log(`item image: ${this.state.editItem}`);

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
            .then(res => {this.setState({
                item_id: res.data.item_id
            })});


        this.setState({
            nextStep : true
        });
    }

    onEdit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`edit name: ${this.state.item_name}`);
        console.log(`edit description: ${this.state.item_description}`);
        console.log(`edit category: ${this.state.item_category}`);

        console.log(`edit discount: ${this.state.item_discount}`);
        console.log(`edit from: ${this.state.item_from}`);
        console.log(`edit brand: ${this.state.item_brand}`);

        console.log(`edit image: ${this.state.item_image}`);
        console.log(`edit image: ${this.state.editItem}`);

        const editItem = {
            item_name : this.state.item_name,
            item_description : this.state.item_description,
            item_category : this.state.item_category,
            item_discount : this.state.item_discount,
            item_from : this.state.item_from,
            item_brand : this.state.item_brand,
            item_image: this.state.item_image
        };

        axios.post('http://localhost:5000/products/update/'+this.props.match.params.id,editItem)
            .then(res => console.log(res.data));
        //this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <div className="container">
                    <br/>  <br/>
                    <form>
                        <div className="list-group list-group-flush z-depth-1 rounded">
                            <div className="list-group-item bg-dark d-flex justify-content-start align-items-center py-3">
                                <h4 style={{color:"white"}} > {this.state.editItem ? "Edit Item" : "Add Item"}</h4>
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
                            <textarea
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
                                <div className="col-sm-20">
                                    <button style={{marginTop:10}} type ="submit" value ="Submit"
                                            className = {this.state.editItem
                                                ? "btn btn-block btn-success mt-3"
                                                : "btn btn-block btn-primary mt-3"}
                                            onClick= {this.state.editItem
                                                ? this.onEdit
                                                : this.onAdd}

                                    > {this.state.editItem ? "Edit" : "Next"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                        <br/>

                    {this.state.nextStep
                        ? ( <div>
                                <div className="list-group-item">


                            <form>


                                <div className= "row">
                                    <div className="col-sm-3">
                                        <label>ItemId: </label>
                                        <input type="text"
                                               className="form-control"
                                               value = {this.state.item_id}
                                               onChange={this.onChangeItemId}
                                               disabled/>
                                    </div>
                                    <div className="col-sm-1">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Size</label>
                                            <select className="form-control" id="exampleFormControlSelect1"
                                                    value={this.state.item_size}
                                                    onChange={this.onChangeItemSize} >
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Colour</label>
                                            <select className="form-control" id="exampleFormControlSelect1"
                                                    value={this.state.item_colour}
                                                    onChange={this.onChangeItemColour}>
                                                <option>Gray</option>
                                                <option>Black</option>
                                                <option>White</option>
                                                <option>Orange</option>
                                                <option>Red</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <label>Quantity: </label>
                                        <input type="text"
                                               className="form-control"
                                               value = {this.state.item_quantity}
                                               onChange={this.onChangeItemQuantity}/>
                                    </div>
                                    <div className="col-sm-2">
                                        <label>Price: </label>
                                        <input type="text"
                                               className="form-control"
                                               value = {this.state.item_price}
                                               onChange={this.onChangeItemPrice}/>
                                    </div>
                                    <div className="col-sm-2">
                                        <button style={{marginTop:30}} type ="submit" value ="Submit"
                                                className = {this.state.quantityItem
                                                    ? "btn btn-block btn-success"
                                                    : "btn btn-block btn-primary"}
                                                onClick= {this.state.quantityItem
                                                    ? this.updateQuantity
                                                    : this.onQuantity}
                                        > {this.state.quantityItem ? "Edit" : "Add"}
                                        </button>
                                    </div>
                                </div>

                            </form>
                                        <br/>
                                        <table className="table" style={{marginTop :20}}>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Size</th>
                                                <th>Color</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.quantityList()}
                                            </tbody>
                                        </table>
                                    </div>



                        </div>
                                )
                                :(
                                    <div></div>
                                )
                            }
                    <br/> <br/>
                </div>
            </div>
        )
    }
}
