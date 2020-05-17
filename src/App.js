import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import Home from "./components/Main_components/Home";
import Login from "./components/User_components/Login";
import Register from "./components/User_components/Register";
import Profile from "./components/User_components/Profile";
import Editprofile from "./components/User_components/Editprofile";
import PasswordChange from "./components/User_components/PasswordChange";
import ForgotPassword from "./components/User_components/ForgotPassword";

// IT18063288
import ProductDetails from "./components/Cart_and_purchasing_Components/ProductDetails";
import shoppingCart from "./components/Cart_and_purchasing_Components/ShoppingCart";
import OrderSummary from "./components/Cart_and_purchasing_Components/OrderSummary";
import DeliveryDetails from "./components/Cart_and_purchasing_Components/DeliveryDetails";
import FavoList from "./components/Cart_and_purchasing_Components/FavouriteList";

import AddEditItem from "./components/add-edit-item-component";
import ItemList from "./components/item-list-component";
import ItemFooter from "./components/footer-item-component";
import ItemNav from "./components/nav-item-component";

import DashboardIndex from "./components/DashboardComponents/index.component";

function App() {
    return (
        <div className="App">
            <Router>
                <ItemNav/>
                <Switch>
                    <Route path="/login"><Login/></Route>
                    <Route path="/register"><Register/></Route>
                    <Route path="/home"><Home/></Route>
                    <Route path="/profile"><Profile/></Route>
                    <Route path="/edit"><Editprofile/></Route>
                    <Route path="/passwordchange"><PasswordChange/></Route>
                    <Route path="/forgotpassword"><ForgotPassword/></Route>
                    {/*<Route path="/productDetails"><ProductDetails/></Route>*/}
                    <Route path="/productDetails" exact component={ProductDetails}/>
                    <Route path="/productDetails/:id" exact component={ProductDetails}/>
                    <Route path="/shoppingcart" exact component={shoppingCart}/>
                    <Route path="/deliveryDetails" exact component={DeliveryDetails}/>
                    <Route path="/orderSummery" exact component={OrderSummary}/>
                    <Route path="/FavouriteList" exact component={FavoList}/>
                    <Route path="/itemlist" exact component={ItemList}/>
                    <Route path="/additem/:id" exact component={AddEditItem}/>
                    <Route path="/additem" exact component={AddEditItem}/>
                    <Route path="/admin"><DashboardIndex/></Route>
                </Switch>
                <ItemFooter/>
            </Router>
        </div>
    );
}

export default App;
