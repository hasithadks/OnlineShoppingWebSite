import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import NavBar from "./components/Main_components/NavBar";
import Footer from "./components/Main_components/Footer";
import Home from "./components/Main_components/Home";
import Login from "./components/User_components/Login";
import Register from "./components/User_components/Register";
import Profile from "./components/User_components/Profile";
import Editprofile from "./components/User_components/Editprofile";

// IT18063288
import ProductDetails from "./components/ProductDetails";
import shoppingCart from "./components/ShoppingCart";
import OrderSummary from "./components/OrderSummary"
import DeliveryDetails from "./components/DeliveryDetails"

import AddItem from "./components/add-item-component";
import EditItem from "./components/edit-item-component";
import ItemList from "./components/item-list-component";


function App() {
    return (
        <div className="App">

        <NavBar/>

            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/edit">
                        <Editprofile/>
                    </Route>
                    <Route path="/product">
                        <ProductDetails/>
                    </Route>
                    <Route path="/shoppingcart" exact component={shoppingCart}/>
                    <Route path="/deliveryDetails" exact component={DeliveryDetails}/>
                    <Route path="/orderSummery" exact component={OrderSummary}/>


                    <Route path="/itemlist" exact component={ItemList}/>
                    <Route path="/edititem/:id" exact component={EditItem}/>
                    <Route path="/additem" exact component={AddItem}/>


                </Switch>
            </Router>


            <Footer/>
        </div>
    );
}

export default App;
