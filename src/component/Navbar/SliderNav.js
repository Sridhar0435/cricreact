import React, { Component } from "react";
import "../../css/Slider.css"
// import "../../css/LandingLiveScore.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { sliderAction } from "../../actions/myAction"
import { Link } from "react-router-dom";
class SliderNav extends Component {

    componentDidMount() {
        this.props.sliderToProps()
    }

    render() {
        const settings = {
            dots: false,
            speed: 500,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            className: "slides",
            responsive: [
                {
                    breakpoint: 768,
                    settingss: {
                        arrows: false,
                        centerPadding: '40px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 400,
                    settingss: {
                        arrows: false,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        }
        console.log(this.props.sliderDataFromRed)
        var matchesOnSlide = this.props.sliderDataFromRed;


        return (
            <div className="setWidth">
                {matchesOnSlide !== "" ?
                    <Slider {...settings}>
                        {matchesOnSlide !== "" ?
                            matchesOnSlide.map((item, index) => (
                                <>
                                    <Link to={`/matchdetails/${item.series.id}/${item.id}`}>
                                        {item.isLive ?
                                            <div className="card blue-grey darken-1 slideNav">
                                                <div className="card-content card-top-hori">
                                                    <span className="card-title">{item.status} ( {item.homeTeam.shortName} vs {item.awayTeam.shortName})</span>
                                                    <div className="row">
                                                        <div className="col s4">{item.homeTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {typeof item.scores !== "undefined" ? <div className="col s4">{item.scores.homeScore} ({item.scores.homeOvers})</div> : ""}
                                                    </div>
                                                    <div className="row">
                                                        <div className="col s4">{item.awayTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {item.scores.awayScore !== "" ? <div className="col s4">{item.scores.awayScore} ({item.scores.awayOvers})</div> : ""}
                                                    </div>
                                                </div>
                                            </div> : ""}
                                    </Link>
                                </>
                            ))
                            : ""}
                        {matchesOnSlide !== "" ?
                            matchesOnSlide.map((item, index) => (
                                <>
                                    <Link key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                        {item.status === "UPCOMING" && item.homeTeam.name !== "Unknown" ?
                                            <div className="card blue-grey darken-1 slideNav">
                                                <div className="card-content card-top-hori">
                                                    <span className="card-title">{item.status} ( {item.homeTeam.shortName} vs {item.awayTeam.shortName})</span>
                                                    <div className="row">
                                                        <div className="col s4">{item.homeTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {typeof item.scores !== "undefined" ? <div className="col s4">{item.scores.homeScore} ({item.scores.homeOvers})</div> : ""}
                                                    </div>
                                                    <div className="row">
                                                        <div className="col s4">{item.awayTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {item.scores.awayScore !== "" ? <div className="col s4">{item.scores.awayScore} ({item.scores.awayOvers})</div> : ""}
                                                    </div>
                                                </div>
                                            </div> : ""}
                                    </Link>
                                </>
                            ))
                            : ""}

                        {matchesOnSlide !== "" ?
                            matchesOnSlide.map((item, index) => (
                                <>
                                    <Link key={index} to={`/matchdetails/${item.series.id}/${item.id}`}>
                                        {item.status === "COMPLETED" ?
                                            <div className="card blue-grey darken-1 slideNav">
                                                <div className="card-content card-top-hori">
                                                    <span className="card-title">{item.status} ( {item.homeTeam.shortName} vs {item.awayTeam.shortName})
                                                <span className="odinum">{item.name} </span>
                                                    </span>
                                                    <div className="row">
                                                        <div className="col s4">{item.homeTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {typeof item.scores !== "undefined" ? <div className="col s4">{item.scores.homeScore} ({item.scores.homeOvers})</div> : ""}
                                                    </div>
                                                    <div className="row">
                                                        <div className="col s4">{item.awayTeam.name}</div>
                                                        <div className="col s4"></div>
                                                        {item.scores.awayScore !== "" ? <div className="col s4">{item.scores.awayScore} ({item.scores.awayOvers})</div> : ""}
                                                    </div>
                                                </div>
                                            </div> : ""}
                                    </Link>
                                </>
                            ))
                            : ""}

                    </Slider> : ""}
                {/* <img src={gif} width="300px" alt="" /> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sliderDataFromRed: state.series.sliderData
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        sliderToProps: () => {
            dispatch(sliderAction())
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(SliderNav);