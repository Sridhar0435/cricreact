import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                            <h5 className="white-text titleimgfoo"><img src={titleimg} alt="" /></h5>
                        </div>
                        <div className="col l4  s12">
                            <h5 className="white-text"> <span className="foot-title-head">Related</span></h5>
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to={`/terms_and_conditions`}>Terms & Conditions</Link></li>
                                <li><Link className="grey-text text-lighten-3" to={`/`}>Privacy Policy</Link></li>
                                <li><Link className="grey-text text-lighten-3" to={`/about_us`}>About Us</Link></li>
                                <li><Link className="grey-text text-lighten-3" to={`/`}>Feedback</Link></li>
                            </ul>
                        </div>
                        <div className="col l4  s12">
                            <h5 className="white-text"><span className="foot-title-head">Follow Us</span></h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b/">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b">LinkedIn</a></li>
                                <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.instagram.com/sridhar_achini/">Instagram</a></li>
                                <li><a className="grey-text text-lighten-3" target="_blank" href="">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Copyright 2020 © cricklivescore.com Developed & Maintained by Sridhar Achini
                    </div>
                </div>
                {/* <Footer /> */}
            </footer>
        )
    }
}
export default FooterContent;