import React, {Component} from 'react';
import footerimg from "../Images/footerimg.jpg";
import logo from "../Images/fb cover.jpg";

export default class ItemFooter extends Component{
    render(){
        return(
            <div>
                <footer id="footer" className="footer-hover-links-light mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h2 className="text-color-light font-weight-semibold text-1 mb-3">ABOUT EZY</h2>
                                <p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>
                            </div>
                            <div className="col-lg-4 ml-auto mb-4 mb-lg-0">
                                <h2 className="text-color-light font-weight-semibold text-1 mb-3">OUR LOCATION</h2>
                                <ul className="list list-unstyled">
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <span
                                        className="text-color-light">Address:</span> 1234 Street Name, City Name, USA
                                    </li>
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <span
                                        className="text-color-light">Phone:</span> <a href="tel:+1234567890">(123)
                                        456-7890</a></li>
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <span
                                        className="text-color-light">Email:</span> <a href="mailto:mail@example.com" className="link-underline-dark">mail@example.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h2 className="text-color-light font-weight-semibold text-1 mb-3">QUICK LINKS</h2>
                                <ul className="list list-unstyled">
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <a
                                        href="https://themeforest.net/item/ezy-responsive-multipurpose-html5-template/21814871">Buy
                                        EZY Now</a></li>
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <a
                                        href="contact-us-2.html">Contact Us</a></li>
                                    <li className="mb-2"><i className="fas fa-angle-right mr-2 ml-1"></i> <a
                                        href="contact-us-3.html">Hire Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
