import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../css/Serices.css";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Tweets from "../Tweets";
import SeriesView from "./SeriesView";
import { connect } from "react-redux";
import { myAction, getBySeriesId } from "../../actions/myAction";
class Serices extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="parentMiddleBox">
                <Left />
                <Middle />
                {/* <Right /> */}
                <Tweets />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getAllMatDataFromRed: state.passAllMatDataFromReducer,
        getId: state.byId,
        showMiddle: state.middleBox
    }
}
export default connect(mapStateToProps)(Serices);