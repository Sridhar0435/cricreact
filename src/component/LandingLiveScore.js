import React, { Component } from "react";
import "../css/LandingLiveScore.css";
class LandingLiveScore extends Component {
    constructor() {
        super();
        this.state = {
            marginLeftSpan: 0
        }
    }
    leftArrow() {
        var mainRow = document.querySelector(".row.score-flex-row");
        this.setState({
            marginLeftSpan: this.state.marginLeftSpan += 211
        })
        mainRow.style.marginLeft = this.state.marginLeftSpan + "px";

    }
    rightArrow() {
        var mainRow = document.querySelector(".row.score-flex-row");
        this.setState({
            marginLeftSpan: this.state.marginLeftSpan -= 211
        })
        mainRow.style.marginLeft = this.state.marginLeftSpan + "px";
    }
    render() {
        return (
            <div className="row score-flex-row">
                <span className="leftArrow" onClick={() => this.leftArrow()}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
                <span className="rightArrow" onClick={() => this.rightArrow()}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            {/* <h6 className="matchStatus">In-Progress (IND vs SRI)</h6> */}
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content card-top-hori">
                        <span className="card-title">In-Progress ( IND vs SRI )</span>
                        <div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> India</div>
                                <div className="col s4"></div>
                                <div className="col s4">200/6</div>
                            </div>
                            <div className="row">
                                <div className="col s4"><i className="fa fa-flag" aria-hidden="true"></i> SriLanka</div>
                                <div className="col s4"></div>
                                <div className="col s4">150/6</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default LandingLiveScore;