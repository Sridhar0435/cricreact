import React, { Component } from "react";
import "../../css/SeriesView.css";
import Left from "./Left";
import Right from "./Right";
import SeriesViewChild from "./SeriesViewChild";
class SeriesView extends Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount() {
    //     console.log("match " + this.props.match.params.id)
    // }
    render() {
        return (
            <div className="parentMiddleBox">
                <Left id={this.props.match.params.id} />
                <SeriesViewChild id={this.props.match.params.id} />
                <Right />
            </div>
        )
    }
}
export default SeriesView; 