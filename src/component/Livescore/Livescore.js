import React, { Component } from "react";
import "../../css/Livescore.css";
import "../../css/SeriesView.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { liveScorePageAction } from "../../actions/myAction";
import { Link as ScrollLick } from 'react-scroll'
class Livescore extends Component {
    constructor(props) {
        super(props)
        this.liveParent = React.createRef();
        // this.liveChild = 
    }
    componentDidMount() {
        this.props.liveScoreToPage()
    }
    render() {
        console.log(this.props.liveScoreFromRed)
        var liveScoreMatchesCheck = this.props.liveScoreFromRed;
        var liveScoreMatchFilt = [];
        var completedMatchFilt = [];
        var upcominMatchFilt = [];
        if (liveScoreMatchesCheck !== "") {
            liveScoreMatchFilt = liveScoreMatchesCheck.filter(item => {
                return item.isLive ? item : "";
            })
            completedMatchFilt = liveScoreMatchesCheck.filter(item => {
                return item.status === "COMPLETED" ? item : "";
            })
            upcominMatchFilt = liveScoreMatchesCheck.filter(item => {
                return item.status === "UPCOMING" ? item : "";
            })
        }

        return (
            <>
                {liveScoreMatchesCheck !== "" ?
                    <section>
                        <ul className="live_First_ul">
                            <li><ScrollLick
                                activeClass="active"
                                to="liveMain"
                                spy={true}
                                smooth={true}
                                offset={-300}
                                duration={500}
                                isDynamic={true}
                            >
                                Live
                    </ScrollLick>
                            </li>
                            <li><ScrollLick
                                activeClass="active"
                                to="completedLivescore"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}
                                isDynamic={true}
                            >
                                Completed
                    </ScrollLick>
                            </li>
                            <li>
                                <ScrollLick
                                    activeClass="active"
                                    to="upcomingLivescore"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    isDynamic={true}
                                >
                                    Upcoming
                    </ScrollLick>
                            </li>
                        </ul>
                        <article className="liveScoreArticle">
                            <div className="row">

                                <div className="col m4 s12 liveScoreLive " id="liveMain">
                                    {liveScoreMatchFilt.length > 0 ? liveScoreMatchFilt.map((item, index) => (
                                        <Link className="matchLink  animated zoomIn delay-1s" key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                            <div className="card-panel lighten-2 z-depth-2 hoverable">
                                                <div className="card-content boxcolor">
                                                    <header>{item.series.name.replace(/Series 2020/, "")}</header>
                                                    <header>{item.series.name}</header>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th className="tdTeamLogo"></th>
                                                                <th>Team</th>
                                                                <th>Score</th>
                                                                <th>Overs</th>
                                                            </tr>
                                                            <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.homeTeam.logoUrl} alt="" width="25px" /></td> : ""}
                                                                {typeof item.scores !== "undefined" ? <td>{item.homeTeam.shortName}</td> : ""}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.homeScore.includes("-") ? item.scores.homeScore.split("-")[1] + "/" + item.scores.homeScore.split("-")[0] : parseInt(item.scores.homeScore) > 0 ? parseInt(item.scores.homeScore) + "/" + "All-Out" : parseInt(item.scores.homeScore) + "/" + "0"}</td><td>{item.scores.homeOvers}</td> </React.Fragment> : ""
                                                                }
                                                                {item.status == "UPCOMING" ? <td colSpan="4" className="upcomsrview">Upcoming...</td> : ""}
                                                            </tr>
                                                            {typeof item.scores !== "undefined" ? <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.awayTeam.logoUrl} alt="" width="25px" /></td> : ""}

                                                                {typeof item.scores !== "undefined" ? <td>{item.awayTeam.shortName}</td> : ""}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.awayScore.includes("-") ? item.scores.awayScore.split("-")[1] + "/" + item.scores.awayScore.split("-")[0] : parseInt(item.scores.awayScore) > 0 ? parseInt(item.scores.awayScore) + "/" + "All-Out" : parseInt(item.scores.awayScore) + "/" + "0"}</td><td>{item.scores.awayOvers}</td> </React.Fragment> : ""
                                                                }
                                                            </tr> : ""}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Link>
                                    )) : <h5 id="liveMain"> No live Matches Yet. </h5>}
                                </div>
                                <div className="col m4 s12 liveScoreCompleted" id="completedLivescore">
                                    {completedMatchFilt.length > 0 ? completedMatchFilt.map((item, index) => (
                                        <Link className="matchLink animated zoomIn delay-1s" key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                            <div className="card-panel lighten-2 z-depth-2 hoverable">
                                                <div className="card-content boxcolor">
                                                    <header>{item.series.name}</header>
                                                    <header>{item.name}</header>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th className="tdTeamLogo"></th>
                                                                <th>Team</th>
                                                                <th>Score</th>
                                                                <th>Overs</th>
                                                            </tr>
                                                            <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.homeTeam.logoUrl} alt="" width="25px" /></td> : ""}
                                                                {typeof item.scores !== "undefined" ? <td>{item.homeTeam.shortName}</td> : ""}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.homeScore.includes("-") ? item.scores.homeScore.split("-")[1] + "/" + item.scores.homeScore.split("-")[0] : parseInt(item.scores.homeScore) > 0 ? parseInt(item.scores.homeScore) + "/" + "All-Out" : parseInt(item.scores.homeScore) + "/" + "0"}</td><td>{item.scores.homeOvers}</td> </React.Fragment> : ""
                                                                }
                                                                {item.status == "UPCOMING" ? <td colSpan="4" className="upcomsrview">Upcoming...</td> : ""}
                                                            </tr>
                                                            {typeof item.scores !== "undefined" ? <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.awayTeam.logoUrl} alt="" width="25px" /></td> : ""}

                                                                {typeof item.scores !== "undefined" ? <td>{item.awayTeam.shortName}</td> : ""}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.awayScore.includes("-") ? item.scores.awayScore.split("-")[1] + "/" + item.scores.awayScore.split("-")[0] : parseInt(item.scores.awayScore) > 0 ? parseInt(item.scores.awayScore) + "/" + "All-Out" : parseInt(item.scores.awayScore) + "/" + "0"}</td><td>{item.scores.awayOvers}</td> </React.Fragment> : ""
                                                                }
                                                            </tr> : ""}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Link>
                                    )) : <h5 id="completedLivescore"> Completed Matches. </h5>}
                                </div>
                                <div className="col m4 s12 liveScoreUpcoming " id="upcomingLivescore">
                                    {upcominMatchFilt.length > 0 ? upcominMatchFilt.map((item, index) => (
                                        <Link className="matchLink animated zoomIn delay-1s" key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                            <div className="card-panel lighten-2 z-depth-2 hoverable">
                                                <div className="card-content boxcolor">
                                                    <header>{item.series.name}</header>
                                                    <header>{item.name}</header>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th className="tdTeamLogo"></th>
                                                                <th>Team</th>
                                                                <th>Score</th>
                                                                <th>Overs</th>
                                                            </tr>
                                                            <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.homeTeam.logoUrl} alt="" width="25px" /></td> : ""}
                                                                {typeof item.scores !== "undefined" ? <td>{item.homeTeam.shortName}</td> : ""}
                                                                {/* {homeScore = item.scores.homeScore.split("-")} */}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.homeScore.includes("-") ? item.scores.homeScore.split("-")[1] + "/" + item.scores.homeScore.split("-")[0] : parseInt(item.scores.homeScore) > 0 ? parseInt(item.scores.homeScore) + "/" + "All-Out" : parseInt(item.scores.homeScore) + "/" + "0"}</td><td>{item.scores.homeOvers}</td> </React.Fragment> : ""
                                                                }
                                                                {item.status == "UPCOMING" ? <td colSpan="4" className="upcomsrview">Upcoming...</td> : ""}
                                                            </tr>
                                                            {typeof item.scores !== "undefined" ? <tr>
                                                                {typeof item.scores !== "undefined" ? <td className="tdTeamLogo"><img src={item.awayTeam.logoUrl} alt="" width="25px" /></td> : ""}

                                                                {typeof item.scores !== "undefined" ? <td>{item.awayTeam.shortName}</td> : ""}
                                                                {typeof item.scores !== "undefined" ?
                                                                    <React.Fragment><td className="scoreDetails">{item.scores.awayScore.includes("-") ? item.scores.awayScore.split("-")[1] + "/" + item.scores.awayScore.split("-")[0] : parseInt(item.scores.awayScore) > 0 ? parseInt(item.scores.awayScore) + "/" + "All-Out" : parseInt(item.scores.awayScore) + "/" + "0"}</td><td>{item.scores.awayOvers}</td> </React.Fragment> : ""
                                                                }
                                                                {/* { item.status == "UPCOMING" ? <td>Upcoming</td> : ""} */}
                                                            </tr> : ""}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Link>
                                    )) : "UpComing"}
                                </div>


                            </div>
                        </article>
                    </section>
                    : "Loading..."}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        liveScoreFromRed: state.series.inLiveScorePage
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        liveScoreToPage: () => {
            dispatch(liveScorePageAction())
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Livescore);