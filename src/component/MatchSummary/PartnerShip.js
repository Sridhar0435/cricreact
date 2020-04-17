import React, { Component } from "react";
import "../../css/PartnerShip.css";
import { connect } from "react-redux";
import { partnerShipAction } from "../../actions/matchDetailAction";
class PartnerShip extends Component {
    componentDidMount() {
        this.props.partnerTab(this.props.sId, this.props.mId, 1);
    }
    render() {
        var style = {
            "width": "70%"
        }
        console.log(this.props.sId, this.props.mId)
        console.log(this.props.partnerShipFromRed);
        var pShipCheck = this.props.partnerShipFromRed;
        if (pShipCheck !== "") {
            var pShipAppend = this.props.partnerShipFromRed
        }

        return (
            <div className="parship_Box">
                {pShipCheck !== "" && pShipCheck.hasOwnProperty("meta") ?
                    <>
                        <h5><span className="PartnershipTitle">Partnership</span></h5>
                        <ul className="ul_scorecard1">
                            <li onClick={() => this.props.partnerTab(this.props.sId, this.props.mId, 1)}><button className={pShipAppend.meta.inningId === 1 ? "waves-effect waves-light btn active" : "waves-effect waves-light btn"}>{this.props.firstIn}</button></li>
                            <li onClick={() => this.props.partnerTab(this.props.sId, this.props.mId, 2)}><button className={pShipAppend.meta.inningId === 2 ? "waves-effect waves-light btn active" : "waves-effect waves-light btn"}>{this.props.secondIn}</button></li>
                        </ul>
                        <table className="highlight  partnership_table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>4s</th>
                                    <th>6s</th>
                                    <th className="bar_th" colSpan="2">Runs</th>
                                    <th>6s</th>
                                    <th>4s</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pShipAppend.partners.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.firstBatsman.name}</td>
                                        <td>{item.firstBatsman.fours}</td>
                                        <td>{item.firstBatsman.sixes}</td>
                                        <td>
                                            <span className="p_1_span">{item.firstBatsman.runs}</span>
                                            <div className="progress first_bar">
                                                <div className="determinate barColor" style={{ width: item.firstBatsman.runs + "%" }} ></div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="p_2_span">{item.secondBatsman.runs}</span>
                                            <div className="progress sec_bar">
                                                <div className="determinate barColor" style={{ width: item.secondBatsman.runs + "%" }} ></div>
                                            </div>
                                        </td>
                                        <td>{item.secondBatsman.sixes}</td>
                                        <td>{item.secondBatsman.fours}</td>
                                        <td>{item.secondBatsman.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </> : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        partnerShipFromRed: state.matchDetail.partnerShipR
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        partnerTab: (sid, mid, innId) => {
            dispatch(partnerShipAction(sid, mid, innId))
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(PartnerShip);