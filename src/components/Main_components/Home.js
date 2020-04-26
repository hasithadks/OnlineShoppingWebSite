import React, { Component } from 'react'
import '../CSS/home.css'

export default class Home extends Component {
    render() {
        return (

            <div className="container">

                <h1>HOME</h1>


                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            {/* Card image */}
                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            {/* Card content */}
                            <div className="card-body">
                                {/* Title */}
                                <h4 className="card-title"><a>Card title</a></h4>
                                {/* Text */}
                                <p className="card-text">
                                    PRICE
                                </p>
                                {/* Button */}
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm">
                        <div className="card">
                            {/* Card image */}
                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            {/* Card content */}
                            <div className="card-body">
                                {/* Title */}
                                <h4 className="card-title"><a>Card title</a></h4>
                                {/* Text */}
                                <p className="card-text">
                                    PRICE
                                </p>
                                {/* Button */}
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            {/* Card image */}
                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />
                            {/* Card content */}
                            <div className="card-body">
                                {/* Title */}
                                <h4 className="card-title"><a>Card title</a></h4>
                                {/* Text */}
                                <p className="card-text">
                                    PRICE
                                </p>
                                {/* Button */}
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )
    }
}
