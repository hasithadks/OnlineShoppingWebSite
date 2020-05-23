import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../Images/shenosa-white.png";
import advertisement from "../Images/advertisement.png";

export default class ItemNav extends Component{
    render(){
        return(
            // <div style={{backgroundColor:"#ececec"}}>
            //     <div className="navbar navbar-expand-sm align-items-center justify-content-center">
            //     <div className="collpase nav-collapse">
            //         <ul className="navbar-nav mr-sm-5 p-0">
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/" className="nav-link">SAVE MORE ON APP</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/edit/:id" className="nav-link"> CORPORATE & BULK PURCHASING</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}}  to ="/add" className="nav-link">SELL ON DARAZ</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/edit/:id" className="nav-link"> CUSTOMER CARE</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/add" className="nav-link">TRACK MY ORDER</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/login" className="nav-link"> LOGIN</Link>
            //             </li>
            //             <li>
            //                 <Link style={{color:"#f26f36"}} to ="/register" className="nav-link">SIGNUP</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </div>
            //
            //     <div className="container-fluid bg-white">
            //         <div className="row">
            //             <div className="mb-2"></div>
            //         </div>
            //         <div className="row">
            //             <div className="col">
            //                 <Link style={{color:"white"}}  to ="/" className="navbar-brand"><img src={logo} width="auto" height="550px" alt="google.com"/></Link>
            //             </div>
            //             <div className="col-sm-5">
            //                 <div className="input-group mb-1 mt-4">
            //                     <input type="text" className="form-control" placeholder="Search in Daraz"
            //                            aria-label="Search in Daraz" aria-describedby="basic-addon2"/>
            //                     <div className="input-group-append">
            //                         <button className="btn btn-block btn-warning" id="basic-addon2" >Search</button>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="col">
            //                 <img className="float-md-right" src={advertisement} width="auto" height="90px" alt="google.com"/>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="mb-2"></div>
            //         </div>
            //     </div>
            // </div>

            <div>
                <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 120, 'stickyChangeLogo': false}">
                    <div className="header-body">
                        <div className="header-top">
                            <div className="header-top-container container">
                                <div className="header-row">
                                    <div className="header-column justify-content-start">
                                        <span className="d-none d-sm-flex align-items-center">
                                          <i className="fas fa-map-marker-alt mr-1" />
                                          1234 Street Name, City Name
                                        </span>
                                        <span className="d-none d-sm-flex align-items-center ml-4">
                                          <i className="fas fa-phone mr-1" />
                                          <a href="tel:+1234567890">123-456-7890</a>
                                        </span>
                                    </div>
                                    <div className="header-column justify-content-end">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="contact-us-1.html">Contact Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link dropdown-menu-toggle py-2" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    English	<i className="fas fa-angle-down fa-sm" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLanguage">
                                                    <li><a href="#" className="no-skin"><img src="web-assets/img/blank.gif" className="flag flag-us" alt="English" /> English</a></li>
                                                    <li><a href="#" className="no-skin"><img src="web-assets/img/blank.gif" className="flag flag-es" alt="Español" /> Español</a></li>
                                                    <li><a href="#" className="no-skin"><img src="web-assets/img/blank.gif" className="flag flag-fr" alt="Française" /> Française</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="header-top-social-icons social-icons social-icons-transparent d-none d-md-block">
                                            <li className="social-icons-facebook">
                                                <a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
                                            </li>
                                            <li className="social-icons-twitter">
                                                <a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a>
                                            </li>
                                            <li className="social-icons-instagram">
                                                <a href="http://www.instagram.com/" target="_blank" title="Instragram"><i className="fab fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-container container">
                            <div className="header-row">
                                <div className="header-column justify-content-start">
                                    <div className="header-logo">
                                        <a href="#">
                                            <img alt="EZ" width={230} height={62} src={logo} />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-column justify-content-end">
                                    <div className="header-search-expanded">
                                        <form method="GET">
                                            <div className="input-group bg-light border">
                                                <input type="text" className="form-control text-4" name="s" placeholder="I'm looking for..." aria-label="I'm looking for..." />
                                                <span className="input-group-btn">
                                                  <button className="btn" type="submit"><i className="lnr lnr-magnifier text-color-dark" /></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-nav justify-content-start">
                                        <a href="#" className="header-search-button order-1 text-5 d-none d-sm-block mt-1 mr-xl-2">
                                            <i className="lnr lnr-magnifier" />
                                        </a>
                                        <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav flex-column flex-lg-row" id="mainNav">
                                                    <li className="dropdown dropdown-mega">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Home
                                                        </a>
                                                    </li>
                                                    <li className="dropdown dropdown-mega dropdown-mega-style-2">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Elements
                                                        </a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Features
                                                        </a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Pages
                                                        </a>
                                                    </li>
                                                    <li className="dropdown dropdown-mega dropdown-mega-style-2">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Portfolio
                                                        </a>

                                                    </li>
                                                    <li className="dropdown dropdown-mega dropdown-mega-style-2">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Blog
                                                        </a>
                                                    </li>
                                                    <li className="dropdown active">
                                                        <a className="dropdown-item dropdown-toggle active" href="#">
                                                            Shop
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <a href="#" className="btn btn-link text-color-default font-weight-bold order-3 d-none d-sm-block ml-auto mr-2 pt-1 text-1">Login</a>
                                        <div className="mini-cart order-4">
                                            <span className="font-weight-bold font-primary">Cart / <span className="cart-total">$0.00</span></span>
                                            <div className="mini-cart-icon">
                                                <img src="web-assets/img/icons/cart-bag.svg" className="img-fluid" alt="" />
                                                <span className="badge badge-primary rounded-circle">0</span>
                                            </div>
                                            <div className="mini-cart-content">
                                                <div className="inner-wrapper bg-light rounded">
                                                    <div className="mini-cart-product">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h2 className="text-color-default font-secondary text-1 mt-3 mb-0">Blue Hoodies</h2>
                                                                <strong className="text-color-dark">
                                                                    <span className="qty">1x</span>
                                                                    <span className="product-price">$12.00</span>
                                                                </strong>
                                                            </div>
                                                            <div className="col-5">
                                                                <div className="product-image">
                                                                    <a href="#" className="btn btn-light btn-rounded justify-content-center align-items-center"><i className="fas fa-times" /></a>
                                                                    <img src="web-assets/img/products/product-2.jpg" className="img-fluid rounded" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mini-cart-total">
                                                        <div className="row">
                                                            <div className="col">
                                                                <strong className="text-color-dark">TOTAL:</strong>
                                                            </div>
                                                            <div className="col text-right">
                                                                <strong className="total-value text-color-dark">$12.00</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mini-cart-actions">
                                                        <div className="row">
                                                            <div className="col pr-1">
                                                                <a href="#" className="btn btn-dark font-weight-bold rounded text-0">VIEW CART</a>
                                                            </div>
                                                            <div className="col pl-1">
                                                                <a href="#" className="btn btn-primary font-weight-bold rounded text-0">CHECKOUT</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="header-btn-collapse-nav order-4 ml-3" data-toggle="collapse" data-target=".header-nav-main nav">
                                          <span className="hamburguer">
                                            <span />
                                            <span />
                                            <span />
                                          </span>
                                            <span className="close">
                                            <span />
                                            <span />
                                          </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}
