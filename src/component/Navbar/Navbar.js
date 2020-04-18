import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Match from "../Match";
import AllMatch from "../AllMatches";
import { connect } from "react-redux";
import logo from "../../images/logo150px.png";
import title150x50 from "../../images/title150x50.png";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
class Navbar extends Component {

    render() {
        console.log("navbar")
        console.log(this.props.seriesTeam)
        var seriesList = this.props.seriesTeam;
        return (
            <React.Fragment>
                <header className="header"></header>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <ul className="scrollmenu">
                            {/* <li className="li-mainNav "><Link className="titlink logoa" to="/"><img className="logonav" src={logo} alt="" /></Link></li> */}
                            <li className="li-mainNav "><Link className="titlink title150" to="/"><img src={title150x50} alt="" /></Link></li>
                            <li className="li-mainNav "><Link className="titlink title150" to="/">Home</Link></li>
                            <li className="li-mainNav "><Link className="titlink" to="/livescore">Live Score</Link></li>
                            <li className="li-mainNav dropdown">
                                <a className="titlink">Series <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div className="sub_nav animated fadeIn">
                                    <ul className="sub-ul-drop">
                                        {seriesList.length > 0 ? seriesList.map((item, index) => <li key={index} className="sub-li-drop">
                                            <Link className="sub-a-drop" to={`/seriesview/${item.id}`}> {item.name} </Link></li>) : ""}
                                    </ul>
                                </div>
                            </li>
                            <li className="li-mainNav dropdown">
                                <a className="titlink" to="" >Teams <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div className="sub_nav animated fadeIn">
                                    <ul className="sub-ul-drop">
                                        <li className="sub-li-drop"><Link to="/team/3/India" className="sub-a-drop" >India</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/Australia" className="sub-a-drop" >Australia</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/20/England" className="sub-a-drop" >England</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/6/South Africa" className="sub-a-drop" >South Africa</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/West Indies" className="sub-a-drop" >West Indies</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/7/SriLanka" className="sub-a-drop" >SriLanka</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/10/Bangladesh" className="sub-a-drop" >Bangladesh</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/5/Pakistan" className="sub-a-drop" >Pakistanx</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/Afganistan" className="sub-a-drop" >Afganistan</Link></li>
                                        <li className="sub-li-drop"><Link to="/team/4/New Zealand" className="sub-a-drop" >New Zealand</Link></li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="li-mainNav "><Link className="titlink" to="/allmatch">Features</Link></li>
                            <li className="li-mainNav "><Link className="titlink" to="/allmatch">Stats</Link></li> */}
                            {/* <li className="li-mainNav "><Link className="titlink" to="/allmatch">Ranking</Link></li> */}

                            <li className="li-mainNav">
                                <Tippy placement="left" content="Facebook">
                                    <a className="titlink" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </Tippy>
                            </li>

                            <li className="li-mainNav">
                                <Tippy placement="left" content="LinkedIn">
                                    <a className="titlink" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </Tippy>
                            </li>
                            <li className="li-mainNav">
                                <Tippy placement="right" content="Instgram">
                                    <a className="titlink" target="_blank" href="https://www.instagram.com/sridhar_achini/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </Tippy>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        seriesTeam: state.series.passAllMatDataFromReducer
    }
}
export default connect(mapStateToProps)(Navbar);