import React, { Component } from "react";
import "../../css/Middle.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { newsApiAction } from "../../actions/myAction";
import Zoom from 'react-reveal/Zoom';
class Middle extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.newsApiCall();
    }
    redirection(event, url) {
        event.preventDefault();
        window.open(url, "_blank");
    }
    render() {
        console.log("middle news")
        console.log(this.props.newsApiFromReducer)
        var news = this.props.newsApiFromReducer
        if (news !== "") {
            var newsAppend = this.props.newsApiFromReducer
        }
        return (
            <section className="middleSection">
                {news !== "" ?
                    newsAppend.reverse().map((item, index) => (
                        //hoverable remove hover box-shadow
                        <Zoom left cascade>
                            <article className="middleArticle " key={index} >
                                <figure>
                                    <h6>{item.title}</h6>
                                    <img src={item.urlToImage} alt="" />
                                    <figcaption>
                                        <h5 className="imageTitleMiddle" onClick={(e) => this.redirection(e, item.url)}>{item.description}</h5>
                                        {/* <p>{item.content}</p> */}
                                    </figcaption>
                                </figure>
                            </article>
                        </Zoom>
                    ))
                    : ""}
                {/* <article className="middleArticle hoverable">
                    <figure>
                        <a href="">
                            <img src="https://a.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1219759_1296x729.jpg" alt="" />
                        </a>
                        <figcaption>
                            <h5><a href="#">Will England be third-time lucky against 'cornered tigers' Pakistan?</a></h5>
                            <p>In our first of the series, we will be doing ball-by-ball commentary of the 1992 World Cup final</p>
                        </figcaption>
                    </figure>
                </article> */}
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newsApiFromReducer: state.series.newsApi
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        newsApiCall: () => {
            dispatch(newsApiAction())
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Middle);