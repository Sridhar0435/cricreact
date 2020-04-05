import React, { Component } from "react";
import Footer from "./Footer";
import "../../css/FooterContent.css";
class FooterContent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l3 s12">
                            <h5 className="white-text">CricW!cket</h5>
                        </div>
                        <div className="col l3  s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <div className="col l3  s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <div className="col l3  s12">
                            <h5 className="white-text">Support Us</h5>
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
                        Copyright 2020 ©  CricW!cket
                    </div>
                </div>
                {/* <Footer /> */}
            </footer>
        )
    }
}
export default FooterContent;