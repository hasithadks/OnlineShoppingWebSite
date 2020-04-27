import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

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

import AddEditItem from "./components/add-edit-item-component";
import ItemList from "./components/item-list-component";
import ItemFooter from "./components/footer-item-component"
import ItemNav from "./components/nav-item-component"

import ManagementStaffList from "./components/ManagementStaffComponents/managementstaff.component";
import CreateManagementStaff from "./components/ManagementStaffComponents/create-managementstaff.component";
import EditManagementStaff from "./components/ManagementStaffComponents/edit-managementstaff.component";

function App() {
    return (
        <div className="App">
            <Router>
                <ItemNav/>
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
                    <Route path="/additem/:id" exact component={AddEditItem}/>
                    <Route path="/additem" exact component={AddEditItem}/>

                    <Route path="/mstaff" exact component={ManagementStaffList} />
                    <Route path="/mstaff/add" component={CreateManagementStaff} />
                    <Route path="/mstaff/edit/:id" component={EditManagementStaff} />

                </Switch>
                <ItemFooter/>
            </Router>


        </div>
    );
}

export default App;
