import React, { Component } from "react";
import "../../css/Commentary.css"
import gif from "../../images/loader.gif";
import { connect } from "react-redux";
import { commentaryAction } from "../../actions/matchDetailAction";
class Commentary extends Component {
    constructor() {
        super()
        this.state = {
            first: true,
            second: false,
        }
    }

    // componentDidMount() {
    //     this.props.commPage(this.props.seriesId, this.props.matchId)
    // }
    change(event) {
        if (event.target.value === "1") {
            this.setState({
                first: true,
                second: false
            })
        } else {
            this.setState({
                first: false,
                second: true
            })
        }
        console.log(event.target.value)
    }
    render() {

        console.log("commFromState")
        var stateCommentary = this.props.commFromState;
        if (stateCommentary !== "") {
            var commentaryShow = this.props.commFromState.commentary.innings;
            console.log(commentaryShow)
            if (this.state.first) {
                var firstMatchComm = commentaryShow[0].overs.map((item, index) => {
                    return { overNum: item.number, balls: item.balls }
                })
                var style = {
                    background: commentaryShow[0].teamColour
                }
            } else {
                var firstMatchComm = commentaryShow[1].overs.map((item, index) => {
                    return { overNum: item.number, balls: item.balls }
                })
                var style = {
                    background: commentaryShow[1].teamColour
                }
            }
            console.log(firstMatchComm)
            console.log(commentaryShow[1].shortName)
            console.log(commentaryShow[0].shortName)
        }

        return (
            <section >
                {stateCommentary !== "" ?
                    <article className="articleCommentary ">

                        <div className="row rowFilter">
                            <div className="col l2 s12">Filter : </div>
                            <div className="input-field col l2 s12">
                                <select className="selectTeam" onChange={(e) => this.change(e)}>
                                    <option value="1" selected >{stateCommentary !== "" ? commentaryShow[0].shortName : ""}</option>
                                    <option value="2" >{stateCommentary !== "" ? commentaryShow[1].shortName : ""}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {stateCommentary !== "" ?
                                firstMatchComm.map((item, index) => (
                                    <React.Fragment>
                                        {item.balls.map((subItem, index) => (
                                            <>
                                                {subItem.comments.length > 1 ? <h5 className="oversum"> {subItem.comments[0].text}</h5> : ""}
                                                {/* <h5 className="oversum">{subItem.comments.length > 1 ? subItem.comments[0].text : ""}</h5> */}
                                                <div key={index} style={style} className="card-panel lighten-2 z-depth-2 hoverable commCard">
                                                    <div className="card-content boxcolor">
                                                        <div className="row hor_com">
                                                            <div className="col l1 s2 com4w">
                                                                <span className="span1_com4w">
                                                                    {/* || subItem.comments[0].runs !== ""  */}
                                                                    {subItem.result !== "" ? subItem.result : "."}
                                                                    {subItem.comments[0].runs !== "" && subItem.comments[0].ballType == "Wide" ? <sup>Wd</sup> : ""}
                                                                </span>
                                                                <span className="span2_com4w">{item.overNum - 1 + "." + subItem.ballNumber}</span></div>
                                                            <div className="col l11 s10 comContent">{subItem.comments.length > 1 ? subItem.comments[1].text : subItem.comments[0].text}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}


                                    </React.Fragment>
                                )) : <img src={gif} width="300px" alt="" />}
                        </div>
                        <h1 className="flow-text"> img</h1>
                    </article> : <img src={gif} width="300px" alt="" />}
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        commFromState: state.matchDetail.commentary
    }
}

// const dispatchStateToProps = (dispatch) => {
//     return {
//         commPage: (sid, mid) => {
//             dispatch((commentaryAction(sid, mid)));
//         }
//     }
// }
export default connect(mapStateToProps)(Commentary);