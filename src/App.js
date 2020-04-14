import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";

function App() {
    return (
        <div className="App">
            <h1>React App</h1>
            <h2>My Change</h2>
            <Login/>
            <ProductDetails/>
        </div>
    );
}

export default App;
