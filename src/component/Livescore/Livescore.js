import React, { Component } from "react";
import "../../css/Livescore.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { liveScorePageAction } from "../../actions/myAction";

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
        return (
            <section>
                {/* <div className="row liveFirstRow">
                    <div className="col m4 s4">
                        <h5 className="titleh5"><a href="#liveMain">Live</a></h5>
                    </div>
                    <div className="col m4 s4">
                        <h5 className="titleh5"><a href="#completedLivescore">Completed</a></h5>
                    </div>
                    <div className="col m4 s4">
                        <h5 className="titleh5"><a href="#upcomingLivescore">Upcoming</a></h5>
                    </div>
                </div> */}
                <ul className="live_First_ul">
                    <li><a href="#liveMain" ref={this.liveParent}>Live</a></li>
                    <li><a href="#completedLivescore">Completed</a></li>
                    <li><a href="#upcomingLivescore">Upcoming</a></li>
                </ul>
                <article className="liveScoreArticle">
                    <div className="row">
                        <div className="col m4 s12 liveScoreLive" id="liveMain">
                            Live
                        </div>
                        <div className="col m4 s12 liveScoreCompleted" id="completedLivescore">
                            Completed
                        </div>
                        <div className="col m4 s12 liveScoreUpcoming" id="upcomingLivescore">
                            Upcoming
                        </div>
                    </div>
                </article>
            </section>
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