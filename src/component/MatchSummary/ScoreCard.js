import React, { Component } from "react";
import "../../css/Scorecard.css"
import { connect } from "react-redux";
import { scordCardAction } from "../../actions/matchDetailAction";

class ScoreCard extends Component {
    constructor() {
        super();
        this.state = {
            firstButton: true,
            secondButton: false
        }
    }
    // componentDidMount() {
    //     this.props.scoreCardPage(this.props.seriesId, this.props.matchId) not used this 
    // }
    firstButtonActive() {
        this.setState({
            firstButton: true,
            secondButton: false,

        })

    }
    secondButtonActive() {
        this.setState({
            firstButton: false,
            secondButton: true
        })
    }
    render() {

        console.log("scorecard");
        console.log(this.props.seriesId, this.props.matchId)
        console.log(this.props.scoreCardFromReducer)
        var score = this.props.scoreCardFromReducer;
        if (score !== "" && typeof showFullScoreCard !== "undefined") {
            var showFullScoreCard = this.props.scoreCardFromReducer.fullScorecard
            if (score !== "") {
                var showFullScoreCard = this.props.scoreCardFromReducer.fullScorecard

                var FirstInnBat = showFullScoreCard.innings[0].batsmen.map((item, index) => {
                    return { id: item.id, name: item.name, image: item.imageURL, runs: item.runs, balls: item.balls, fours: item.fours, sixes: item.sixes, strikeRate: item.strikeRate, fowOrder: item.fowOrder, fallOfWicket: item.fallOfWicket, fallOfWicketOver: item.fallOfWicketOver, howOut: item.howOut };
                })

                var FirstInnBall = showFullScoreCard.innings[0].bowlers.map((item, index) => {
                    return { id: item.id, name: item.name, image: item.imageURL, maidens: item.maidens, runs: item.runsConceded, wickets: item.wickets, overs: item.overs, wides: item.wides, economy: item.economy, noBalls: item.noBalls };
                })
                var SecondInnBat = showFullScoreCard.innings[1].batsmen.map((item, index) => {
                    return { id: item.id, name: item.name, image: item.imageURL, runs: item.runs, balls: item.balls, fours: item.fours, sixes: item.sixes, strikeRate: item.strikeRate, fowOrder: item.fowOrder, fallOfWicket: item.fallOfWicket, fallOfWicketOver: item.fallOfWicketOver, howOut: item.howOut };
                })

                var SecondInnBall = showFullScoreCard.innings[1].bowlers.map((item, index) => {
                    return { id: item.id, name: item.name, image: item.imageURL, maidens: item.maidens, runs: item.runsConceded, wickets: item.wickets, overs: item.overs, wides: item.wides, economy: item.economy, noBalls: item.noBalls };
                })
            }
        }
        console.log(FirstInnBat);
        console.log(SecondInnBat);
        return (
            <section>
                {score !== "" && typeof showFullScoreCard !== "undefined" ? <article>
                    <article>
                        <ul className="ul_scorecard1">
                            <li onClick={this.firstButtonActive.bind(this)}><button className={this.state.firstButton ? "waves-effect waves-light btn active" : "waves-effect waves-light btn"}>{score !== "" ? showFullScoreCard.innings[0].team.shortName : ""}</button></li>
                            <li onClick={this.secondButtonActive.bind(this)}><button className={this.state.secondButton ? "waves-effect waves-light btn active" : "waves-effect waves-light btn"}>{score !== "" ? showFullScoreCard.innings[1].team.shortName : ""}</button></li>
                        </ul>
                    </article>
                    {this.state.firstButton ?
                        <article className="scoreCardArticle hoverable ">
                            <table className="responsive-table highlight animated bounceInLeft delay-0s">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Batting</th>

                                        <th>Fow</th>
                                        <th>R</th>
                                        <th>Bs</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody className="pb0">
                                    {score !== "" ? FirstInnBat.map(item => (
                                        <tr key={item.id}>
                                            <td className="playerDetail"><img src={item.image} alt="" width="38px" /></td>
                                            {item.howOut === "not out" ? <td className="notOut">{item.name} *</td> : <td>{item.name}</td>}
                                            <td>{item.howOut}</td>
                                            {item.howOut === "not out" ? <td className="notOut">{item.runs} *</td> : <td>{item.runs}</td>}
                                            <td>{item.balls}</td>
                                            <td>{item.fours}</td>
                                            <td>{item.sixes}</td>
                                            <td>{item.strikeRate}</td>
                                        </tr>
                                    )) : "hello"}
                                </tbody>
                            </table>
                            <article>
                                <h5 className="extra">Extras :  {score !== "" ? showFullScoreCard.innings[0].extra + "(Wd-" + showFullScoreCard.innings[0].wide + ", NB" + showFullScoreCard.innings[0].noBall + ")" : ""} | Total : {score !== "" ? showFullScoreCard.innings[0].run + "(" + showFullScoreCard.innings[0].over + ")" : ""}</h5>
                                <h5></h5>
                                <h4></h4>
                            </article>
                            <table className="responsive-table highlight">
                                <thead>
                                    <tr>

                                        <th colSpan="2">Bowling</th>

                                        <th>O</th>
                                        <th>M</th>
                                        <th>R</th>
                                        <th>W</th>
                                        <th>Eco</th>
                                        <th>Wides</th>
                                        <th>NB</th>
                                    </tr>
                                </thead>
                                <tbody className="pb0">
                                    {score !== "" ? FirstInnBall.map(item => (
                                        <tr key={item.id}>
                                            <td className="playerDetail"><img src={item.image} alt="" width="38px" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.overs}</td>
                                            <td>{item.maidens}</td>
                                            <td>{item.runs}</td>
                                            <td>{item.wickets}</td>
                                            <td>{item.economy}</td>
                                            <td>{item.wides}</td>
                                            <td>{item.noBalls}</td>
                                        </tr>
                                    )) : "hello"}

                                </tbody>
                            </table>
                        </article>
                        : ""}

                    {this.state.secondButton ?
                        <article className="scoreCardArticle hoverable">
                            <table className="responsive-table highlight animated bounceInRight delay-0s">
                                <thead>
                                    <tr>

                                        <th colSpan="2">Batting</th>

                                        <th>Fow</th>
                                        <th>R</th>
                                        <th>Bs</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody className="pb0">
                                    {score !== "" ? SecondInnBat.map(item => (
                                        <tr key={item.id}>
                                            <td className="playerDetail"><img src={item.image} alt="" width="38px" /></td>
                                            {item.howOut === "not out" ? <td className="notOut">{item.name} *</td> : <td>{item.name}</td>}
                                            <td>{item.howOut}</td>
                                            {item.howOut === "not out" ? <td className="notOut">{item.runs} *</td> : <td>{item.runs}</td>}
                                            <td>{item.balls}</td>
                                            <td>{item.fours}</td>
                                            <td>{item.sixes}</td>
                                            <td>{item.strikeRate}</td>
                                        </tr>
                                    )) : "hello"}
                                </tbody>
                            </table>
                            <article>
                                <h5 className="extra">Extras :  {score !== "" ? showFullScoreCard.innings[1].extra + "(Wd-" + showFullScoreCard.innings[1].wide + ", NB" + showFullScoreCard.innings[1].noBall + ")" : ""} | Total : {score !== "" ? showFullScoreCard.innings[1].run + "(" + showFullScoreCard.innings[1].over + ")" : ""}</h5>
                                <h5></h5>
                                <h4></h4>
                            </article>
                            <table className="responsive-table highlight">
                                <thead>
                                    <tr>

                                        <th colSpan="2">Bowling</th>

                                        <th>O</th>
                                        <th>M</th>
                                        <th>R</th>
                                        <th>W</th>
                                        <th>Eco</th>
                                        <th>Wides</th>
                                        <th>NB</th>
                                    </tr>
                                </thead>
                                <tbody className="pb0">
                                    {score !== "" ? SecondInnBall.map(item => (
                                        <tr key={item.id}>
                                            <td className="playerDetail"><img src={item.image} alt="" width="38px" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.overs}</td>
                                            <td>{item.maidens}</td>
                                            <td>{item.runs}</td>
                                            <td>{item.wickets}</td>
                                            <td>{item.economy}</td>
                                            <td>{item.wides}</td>
                                            <td>{item.noBalls}</td>
                                        </tr>
                                    )) : "hello"}

                                </tbody>
                            </table>
                        </article>
                        : ""}
                </article> : <h5>No Score card Yet.</h5>}
                {/* <h1>ScoreCard</h1> */}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        scoreCardFromReducer: state.matchDetail.scorecard
    }
}

// const dispatchStateToProps = (dispatch) => {
//     return {
//         scoreCardPage: (sid, mid) => {
//             dispatch(scordCardAction(sid, mid))
//         }
//     }
// }

export default connect(mapStateToProps)(ScoreCard);