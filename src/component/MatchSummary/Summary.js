import React, { Component } from "react";
import "../../css/Summary.css"
import { connect } from "react-redux";
import { getSeriesTeamNames } from "../../actions/matchDetailAction";
class Summary extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.seriesTeamNames(this.props.seriesIdSummary)
    }

    render() {

        console.log(this.props.getSeriesTeams)
        var inSummary = this.props.matchLiveDataCompInSummary; // match Live & high lights
        if (inSummary !== "") {
            var showInSummary = inSummary.matchDetail;
        }

        console.log("inSummary")
        console.log(inSummary)
        var summaryPageShow = this.props.getSummary; // to display series table in summray page
        var seriesTeamNames = this.props.getSeriesTeams; // to show series Team Names
        let group = "";
        return (
            <section>
                <article className="articleTable hoverable animated bounceInLeft delay-1s">
                    <header>{inSummary !== "" ? showInSummary.tossMessage : ""}</header>
                    <span>if Batting</span>

                </article>
                <article className="articleTable hoverable animated bounceInLeft delay-1s">
                    <table className="responsive-table highlight">
                        <thead>
                            <tr className="">
                                <th></th>
                                <th>Team</th>
                                <th>Position</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Lost</th>
                                <th>Draw</th>
                                <th>Tied</th>
                                <th>Points</th>
                                <th>NRR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {summaryPageShow !== "" && summaryPageShow.metaData.state !== "Upcoming" ? summaryPageShow.teams.map((item, index) => (
                                <React.Fragment key={index}>
                                    {group !== item.groupName && item.groupName.includes("Group") ? <tr className="">
                                        <td colSpan="10" className="tdfull">{group = item.groupName}</td>
                                    </tr> : ""}

                                    <tr className="">
                                        <td><img src={item.logoUrl} className="hoverable" alt="" width="25px" /></td>
                                        <td>{item.shortName}</td>
                                        <td>{item.position}</td>
                                        <td>{item.played}</td>
                                        <td>{item.won}</td>
                                        <td>{item.lost}</td>
                                        <td>{item.drawn}</td>
                                        <td>{item.tied}</td>
                                        <td>{item.points}</td>
                                        <td>{item.netRunRate}</td>
                                    </tr>
                                </React.Fragment>
                            )) : <tr><td colSpan="10" className="upcomingmatchsummary">Upcoming Match...</td></tr>
                            }
                        </tbody>
                    </table>
                    <div>
                        <ul className="statusSumm">
                            <li>{summaryPageShow !== "" ? summaryPageShow.metaData.status : ""}</li>
                            <li>{summaryPageShow !== "" ? summaryPageShow.metaData.series : ""}</li>
                        </ul>
                    </div>
                </article>



                <article className="articleTable hoverable animated bounceInLeft delay-1s">
                    <header className="seriesName"><span>{summaryPageShow !== "" ? summaryPageShow.metaData.series : ""}</span></header>
                    <div>
                        <ul className="teamList">
                            <li>AUS</li>
                            <li>IND</li>
                            <li>ENG</li>
                        </ul>
                    </div>
                    <div className="row">
                        {seriesTeamNames !== "" ? seriesTeamNames.seriesTeams.teams.map((item, index) => (

                            <div className="col l4 s3" key={index}>
                                <article >
                                    <figure className="summaryFig">
                                        <img src={item.logoUrl} alt="" />
                                        <figcaption>{item.name}</figcaption>
                                    </figure>
                                </article>
                            </div>
                        )) : ""
                        }
                    </div>
                </article>

                <h1>Summary</h1>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getSummary: state.matchDetail.summary,
        getSeriesTeams: state.matchDetail.seriesTeams,
        matchLiveDataCompInSummary: state.matchDetail.matchLiveData //matchdetail api 
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        seriesTeamNames: (seriesId) => {
            dispatch(getSeriesTeamNames(seriesId))
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Summary);