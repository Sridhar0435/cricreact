import React, { Component } from "react";
import "../../css/Right.css";
import { connect } from "react-redux";
import { headLinesAction } from "../../actions/myAction";
class Right extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.headLinesDispatch();
    }
    headLineRedirect(event, url) {
        event.preventDefault();
        window.open(url, "_blank");
    }
    render() {
        console.log("right")
        console.log(this.props.headLinesFromReducer)
        var headlineCheck = this.props.headLinesFromReducer;
        if (headlineCheck !== "") {
            var headLineAppend = this.props.headLinesFromReducer;
        }
        return (

            <>
                {headlineCheck !== "" ?
                    <section className="rightSection">
                        {/* hoverable removed hover effect */}
                        <article className="rightArticle ">
                            <div className="sericeContentRight">
                                <header className="sericeHeader"><i className="fa fa-rss" aria-hidden="true"></i>  Trending</header>
                                <ul>

                                    {headLineAppend.map((item, index) => (
                                        <li key={index} onClick={(e) => this.headLineRedirect(e, item.url)}>{item.title}</li>
                                    ))}

                                </ul>
                            </div>
                        </article>
                        {/* <article className="rightArticle hoverable">
                    <div className="sericeContentRight">
                        <header className="sericeHeader">Top Headlines</header>
                        <ul>
                            <li>First Match</li>
                            <li>Second Match</li>
                            <li>Third Match</li>
                        </ul>
                    </div>
                </article> */}
                    </section>
                    : ""}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headLinesFromReducer: state.series.headLinesState
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        headLinesDispatch: () => {
            dispatch(headLinesAction())
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Right);