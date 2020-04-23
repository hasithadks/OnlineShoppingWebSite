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
                </Switch>
            </Router>


            <Footer/>
        </div>
    );
}

export default App;
