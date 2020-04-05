import React, { Component } from "react";
import "../../css/SeriesViewChild.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { myAction, getBySeriesId } from "../../actions/myAction";
class SeriesViewChild extends Component {
    componentDidMount() {
        this.props.getMatchsParamById(this.props.id);
    }
    render() {
        let matchesBySeriesId = this.props.getId;
        console.log("from child view")
        console.log(matchesBySeriesId)
        return (
            <section className="SeriesViewChildSection">
                <article className="SeriesViewChildArticle hoverable">

                    <div className="row">
                        <React.Fragment>
                            {/* <header>Hello</header> */}
                            {
                                matchesBySeriesId.map((item, index) => (
                                    <Link className="matchLink" key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                        <div className="col l6 s12 seriesBox animated zoomIn delay-1s" >
                                            <div className="card-panel  lighten-2 z-depth-2 hoverable">
                                                <div className="card-content boxcolor">
                                                    <header>{item.series.name}</header>
                                                    <header>{item.name}</header>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="tdTeamLogo"></td>
                                                                <td>Team</td>
                                                                <td>Score</td>
                                                                <td>Overs</td>

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
                                        </div>
                                    </Link>
                                ))
                            }
                        </React.Fragment>
                    </div>
                </article>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getAllMatDataFromRed: state.series.passAllMatDataFromReducer,
        getId: state.series.byId
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        getMatchsParamById: (param) => {
            dispatch(getBySeriesId(param))
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(SeriesViewChild);