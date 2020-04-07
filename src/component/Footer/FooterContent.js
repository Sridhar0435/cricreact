import React, { Component } from "react";
import Footer from "./Footer";
import "../../css/FooterContent.css";
import titleimg from "../../images/whitetitlefull.png";
class FooterContent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row footrowpar">
                        <div className="col l4 s12">
                            <h5 className="white-text titleimgfoo"><img src={titleimg} alt="" srcset="" /></h5>
                        </div>
                        <div className="col l4  s12">
                            <h5 className="white-text"> <span className="foot-title-head">Related</span></h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Terms&Conditions</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Feedback</a></li>
                            </ul>
                        </div>
                        <div className="col l4  s12">
                            <h5 className="white-text"><span className="foot-title-head">Follow Us</span></h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Copyright 2020 © cricklivescore.com developer & maintained by Sridhar Achini
                    </div>
                </div>
                {/* <Footer /> */}
            </footer>
        )
    }
}
export default FooterContent;