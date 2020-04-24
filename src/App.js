import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Editprofile from "./components/Editprofile";
import ProductDetails from "./components/ProductDetails";

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
