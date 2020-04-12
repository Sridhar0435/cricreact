import React, { Component } from "react";
import "../../../css/matchDetails.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMatchAction, getSummaryBasedOnTab } from "../../../actions/matchDetailAction";
import MatchCommonData from "./MatchCommonData";
import Summary from "../../MatchSummary/Summary";
import ScoreCard from "../../MatchSummary/ScoreCard";
import Commentary from "../../MatchSummary/Commentary";
import Statistics from "../../MatchSummary/Statistics";
import Table from "../../MatchSummary/Table";

class MatchDetails extends Component {
    constructor(props) {
        super(props);

    }
    // componentDidMount() {
    //     this.props.getMatchData(this.props.match.params.seriesId, this.props.match.params.matchId)
    // }
    render() {
        console.log(this.props.displaySum)
        return (
            <section className="sectionMatchDetails">
                <MatchCommonData seriesId={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} tabIndex={this.props.makeActive} />
                {/* <ScoreCard seriesId={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} /> */}
                {/* <Commentary seriesId={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} /> */}
                {this.props.displaySum && this.props.matchShowTime !== "" ? <Summary seriesIdSummary={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} /> : ""}
                {this.props.scoreCard && this.props.matchShowTime !== "" ? <ScoreCard seriesId={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} /> : ""}
                {this.props.commentary && this.props.matchShowTime !== "" ? <Commentary seriesId={this.props.match.params.seriesId} matchId={this.props.match.params.matchId} /> : ""}
                {this.props.statistics && this.props.matchShowTime !== "" ? <Statistics /> : ""}
                {this.props.table && this.props.matchShowTime !== "" ? <Table /> : ""}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matchShowTime: state.matchDetail.matchData,
        displaySum: state.matchDetail.displaySummary,
        scoreCard: state.matchDetail.displayScoreCard,
        commentary: state.matchDetail.displayCommentary,
        statistics: state.matchDetail.displayStatistics,
        table: state.matchDetail.displayTable,
        makeActive: state.matchDetail.tabActive

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMatchData: (seriesId, matchId) => {
            dispatch(getMatchAction(seriesId, matchId))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchDetails);