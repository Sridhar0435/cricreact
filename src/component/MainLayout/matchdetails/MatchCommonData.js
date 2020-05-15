import React, { Component } from "react";
import "../../../css/matchDetails.css" // matchCommonData  css also written in this
import { connect } from "react-redux";
import { getMatchAction, getSummaryBasedOnTab, matchLiveAndHighLightAction } from "../../../actions/matchDetailAction";
import Summary from "../../MatchSummary/Summary";
import gif from "../../../images/loadercircle.gif";
class MatchCommonData extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getMatchData(this.props.seriesId, this.props.matchId);
        this.props.summary("GET_SUMMARY", this.props.seriesId);
        this.props.MatchLiveHighL(this.props.seriesId, this.props.matchId); //matchliveapi

    }

    render() {
        // let showMatchData = this.props.matchShowTime;
        let showMatchData = this.props.matchLiveDataComp;
        console.log("matchLiveDataComp")
        console.log(this.props.matchLiveDataComp)

        if (showMatchData !== "") {
            var showDate;
            var fullSummaryChaganedApi = showMatchData.matchDetail.matchSummary;
            var dateFor = showMatchData.matchDetail.matchSummary.cmsMatchStartDate.split(" ");
            showDate = dateFor[0].split("-");
            showDate = `${showDate[2]}-${showDate[1]}-${showDate[0]}`
        }
        return (
            <>
                {showMatchData !== "" ?
                    <section className="section_Match_Detials">

                        <article className="articleMatchDetails">
                            <article>
                                <div className="divmatchMain">
                                    <ul className="first-ul">
                                        <li>{showMatchData !== "" ? fullSummaryChaganedApi.venue.location : ""}</li>
                                        <li className="winOrLoss">{showMatchData !== "" ? fullSummaryChaganedApi.matchSummaryText : ""}</li>
                                        <li>{showMatchData !== "" ? showDate : ""}</li>
                                    </ul>
                                    <div className="row">
                                        <div className="col l4 s6 animated bounceIn">
                                            <article className="matchArt matchArt_1">
                                                <figure className="figureImage">
                                                    <img src={showMatchData !== "" ? fullSummaryChaganedApi.homeTeam.logoUrl : ""} alt="" />
                                                    <figcaption>{showMatchData !== "" ? fullSummaryChaganedApi.homeTeam.name : ""}</figcaption>
                                                </figure>
                                                <div className="scoreLable">
                                                    <span className="wicketScore">{showMatchData !== "" && typeof fullSummaryChaganedApi.scores !== "undefined" ? fullSummaryChaganedApi.scores.homeScore : ""}</span> <br /> <span className="Ovrs">{showMatchData !== "" && typeof fullSummaryChaganedApi.scores !== "undefined" ? "(" + fullSummaryChaganedApi.scores.homeOvers + "Ovrs)" : ""} </span>
                                                </div>
                                            </article>
                                        </div>
                                        {fullSummaryChaganedApi.status !== "UPCOMING" ?
                                            <div className="col l4 s4 animated bounceIn small_screen_none">
                                                <figure className="figureImageLogo">
                                                    <img src={showMatchData !== "" ? fullSummaryChaganedApi.series.shieldImageUrl : ""} alt="" width="300px" />
                                                    <figcaption>{showMatchData !== "" ? fullSummaryChaganedApi.currentMatchState : ""}</figcaption>
                                                </figure>
                                            </div>
                                            :
                                            <div className="col l4 s4  animated bounceIn small_screen_none">
                                                <ul className="summary_If_Up_ul">
                                                    <li className="summary_If_Up_ul_li1">{fullSummaryChaganedApi.name}</li>
                                                    <li className="summary_If_Up_ul_li2">{fullSummaryChaganedApi.localStartDate}</li>
                                                    <li className="summary_If_Up_ul_li3">{fullSummaryChaganedApi.localStartTime}</li>
                                                    <li className="summary_If_Up_ul_li4">{fullSummaryChaganedApi.venue.name}</li>
                                                    <li className="summary_If_Up_ul_li5">{fullSummaryChaganedApi.series.name}</li>
                                                </ul>
                                            </div>
                                        }

                                        <div className="col l4 s6 animated bounceIn">
                                            <article className="matchArt matchArt_2">
                                                <div className="scoreLable">
                                                    <span className="wicketScore">{showMatchData !== "" && typeof fullSummaryChaganedApi.scores !== "undefined" ? fullSummaryChaganedApi.scores.awayScore : ""}</span> <br /> <span className="Ovrs">{showMatchData !== "" && typeof fullSummaryChaganedApi.scores !== "undefined" ? "(" + fullSummaryChaganedApi.scores.awayOvers + "Ovrs)" : ""} </span>
                                                </div>
                                                <figure className="figureImage">
                                                    <img src={showMatchData !== "" ? fullSummaryChaganedApi.awayTeam.logoUrl : ""} alt="" />
                                                    <figcaption>{showMatchData !== "" ? fullSummaryChaganedApi.awayTeam.name : ""}</figcaption>
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="row xs-m">
                                        {fullSummaryChaganedApi.status !== "UPCOMING" ?
                                            <div className="col s12 animated bounceIn big_screen_none">
                                                <figure className="figureImageLogo">
                                                    <img src={showMatchData !== "" ? fullSummaryChaganedApi.series.shieldImageUrl : ""} alt="" width="300px" />
                                                    <figcaption>{showMatchData !== "" ? fullSummaryChaganedApi.currentMatchState : ""}</figcaption>
                                                </figure>
                                            </div>
                                            :
                                            <div className="col s12 animated bounceIn big_screen_none">
                                                <ul className="summary_If_Up_ul">
                                                    <li className="summary_If_Up_ul_li1">{fullSummaryChaganedApi.name}</li>
                                                    <li className="summary_If_Up_ul_li2">{fullSummaryChaganedApi.localStartDate}</li>
                                                    <li className="summary_If_Up_ul_li3">{fullSummaryChaganedApi.localStartTime}</li>
                                                    <li className="summary_If_Up_ul_li4">{fullSummaryChaganedApi.venue.name}</li>
                                                    <li className="summary_If_Up_ul_li5">{fullSummaryChaganedApi.series.name}</li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </article>
                            <article className="all_tabs_s__sc_c">
                                <ul className="tabs tabs-fixed-width tab-demo z-depth-1 ul_tab_links">
                                    <li className="tab" onClick={() => this.props.summary("GET_SUMMARY", this.props.seriesId, this.props.matchId)}><a className={this.props.displaySum ? "active" : "flow-text"}>Summary</a></li>
                                    <li className="tab" onClick={() => this.props.summary("GET_SCORE_CARD", this.props.seriesId, this.props.matchId)}><a className={this.props.scoreTabState ? "active" : ""}>Score card</a></li>
                                    <li className="tab" onClick={() => this.props.summary("GET_COMMENTARY", this.props.seriesId, this.props.matchId)}><a className={this.props.commentaryTabState ? "active" : ""}>Commentary</a></li>
                                    {/* <li className="tab" onClick={() => this.props.summary("GET_STATISTICS", this.props.seriesId)}><a className={this.props.statisticsTabState ? "active" : ""}>Statistics</a></li> */}
                                    {/* <li className="tab" onClick={() => this.props.summary("TABLE", this.props.seriesId)}><a className={this.props.tableTabState ? "active" : ""}>Table</a></li> */}
                                </ul>
                            </article>

                        </article>
                    </section>
                    : <img src={gif} className="loadSpin" width="300px" alt="" />}
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        matchShowTime: state.matchDetail.matchData,// replaced this with matchdetail api and used in this page
        displaySum: state.matchDetail.displaySummary,
        makeActive: state.matchDetail.tabActive,
        matchLiveDataComp: state.matchDetail.matchLiveData, //matchdetail api
        scoreTabState: state.matchDetail.displayScoreCard,
        commentaryTabState: state.matchDetail.displayCommentary,
        statisticsTabState: state.matchDetail.displayStatistics,
        tableTabState: state.matchDetail.displayTable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMatchData: (seriesId, matchId) => {
            dispatch(getMatchAction(seriesId, matchId))
        },
        summary: (summaryName, seriesid, matchid) => {
            dispatch(getSummaryBasedOnTab(summaryName, seriesid, matchid))
        },
        MatchLiveHighL: (seriesId, matchId) => {
            dispatch(matchLiveAndHighLightAction(seriesId, matchId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchCommonData);