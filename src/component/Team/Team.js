import React, { Component } from "react";
import "../../css/Team.css";
import { connect } from "react-redux";
import { teamActionById } from "../../actions/TeamAction";
import gif from "../../images/loadercircle.gif";
class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0
        }
    }
    componentDidMount() {
        this.props.pageTeamId(this.props.match.params.teamId);
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.match.params.teamId !== this.props.match.params.teamId) {
            this.props.pageTeamId(this.props.match.params.teamId);
        }
    }
    passIndex(index) {
        this.setState({
            id: index.target.value
        })
    }
    render() {
        var player = this.props.teamFromReduc;
        if (player !== "") {
            var players = this.props.teamFromReduc.teamPlayers.players;
        }
        return (
            <>
                {player !== "" ?
                    <section className="teamSection">
                        <article className="teamArticle">
                            <div className="row">
                                <div className="col l12 s12 titl"> <span className="htn">{this.props.match.params.teamName}</span></div>
                            </div>
                            <div className="row row_select">
                                <div className="col l3 s12">
                                    <select className="ul1_team selectTeam" onChange={(index) => this.passIndex(index)}>
                                        {player !== "" ?
                                            players.map((item, index) => (
                                                // <option value={index} className="li1_team" onClick={() => this.passIndex(index)}>{item.fullName}</option>
                                                <option value={index} key={index} className="li1_team" >{item.fullName}</option>
                                            ))
                                            : ""}
                                    </select>
                                </div>
                                <div className="col l9 s12">
                                    <div className="figDiv">

                                        {player !== "" ? <> <figure>
                                            <h3 className="pName">{players[this.state.id].fullName}</h3>
                                            <img src={players[this.state.id].imageURL} width="300px" alt="" />
                                            <ul className="ul_p">
                                                <li className="li_p">Name : {players[this.state.id].fullName}</li>
                                                <li className="li_p">D.O.B : {players[this.state.id].hasOwnProperty("dob")
                                                    ? players[this.state.id].dob.replace(/T00:00:00Z/g, '') : ""}</li>
                                                <li className="li_p">Bowling Style : {players[this.state.id].bowlingStyle}</li>
                                                <li className="li_p">Batting Style : {players[this.state.id].battingStyle}</li>
                                                <li className="li_p">Player Type : {players[this.state.id].playerType}</li>
                                                <li className="li_p">Test Debute : {players[this.state.id].hasOwnProperty("testDebutDate") ? players[this.state.id].testDebutDate.replace(/T00:00:00Z/g, '') : ""}</li>
                                                <li className="li_p">ODI Debute : {players[this.state.id].hasOwnProperty("odiDebutDate") ? players[this.state.id].odiDebutDate.replace(/T00:00:00Z/g, '') : ""}</li>
                                                <li className="li_p">T20 Debute : {players[this.state.id].hasOwnProperty("t20DebutDate") ? players[this.state.id].t20DebutDate.replace(/T00:00:00Z/g, '') : ""}</li>
                                            </ul> </figure>

                                            <div className="bio">{players[this.state.id].hasOwnProperty("bio") ? players[this.state.id].bio.replace(/(<([^>]+)>)/ig, '').split(".").map((item, index) => (<p key={index}>{(index + 1) + ". " + item}</p>)) : ""}</div > </> : ""}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    : <img src={gif} className="loadSpin" width="300px" alt="" />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teamFromReduc: state.teamId.teamRed
    }
}

const dispatchStateToProp = (dispatch) => {
    return {
        pageTeamId: (tid) => {
            dispatch(teamActionById(tid));
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProp)(Team);