import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Match from "../Match";
import AllMatch from "../AllMatches";
import { connect } from "react-redux";
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
                            <li className="li-mainNav hoverable"><Link className="titlink" to="/">CricW!cket</Link></li>
                            <li className="li-mainNav hoverable"><Link className="titlink" to="/allmatch">Live Score</Link></li>
                            <li className="li-mainNav dropdown">
                                <a className="titlink" to="" >Series <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div className="sub_nav animated fadeIn">
                                    <ul className="sub-ul-drop">
                                        {seriesList.length > 0 ? seriesList.map(item => <li className="sub-li-drop">
                                            <Link className="sub-a-drop" to={`/seriesview/${item.id}`}> {item.name} </Link></li>) : ""}

                                    </ul>
                                </div>
                            </li>
                            <li className="li-mainNav dropdown">
                                <a className="titlink" to="" >Teams <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div className="sub_nav animated fadeIn">
                                    <ul className="sub-ul-drop">
                                        <li className="sub-li-drop"><Link to="/team/3/India"><a className="sub-a-drop" >India</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/Australia"><a className="sub-a-drop" >Australia</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/20/England"><a className="sub-a-drop" >England</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/6/South Africa"><a className="sub-a-drop" >South Africa</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/West Indies"><a className="sub-a-drop">West Indies</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/7/SriLanka"><a className="sub-a-drop" >SriLanka</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/10/Bangladesh"><a className="sub-a-drop" >Bangladesh</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/5/Pakistan"><a className="sub-a-drop" >Pakistan</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/1/Afganistan"><a className="sub-a-drop" >Afganistan</a></Link></li>
                                        <li className="sub-li-drop"><Link to="/team/4/New Zealand"><a className="sub-a-drop" >New Zealand</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="li-mainNav hoverable"><Link className="titlink" to="/allmatch">Features</Link></li>
                            <li className="li-mainNav hoverable"><Link className="titlink" to="/allmatch">Stats</Link></li>
                            <li className="li-mainNav hoverable"><Link className="titlink" to="/allmatch">Ranking</Link></li>
                            <li className="li-mainNav"><a className="titlink" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="li-mainNav"><a className="titlink" target="_blank" href="https://www.linkedin.com/in/sridhar-achini-8665a015b"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li className="li-mainNav"><a className="titlink" target="_blank" href="https://www.instagram.com/sridhar_achini/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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