import React, { Component } from "react";
import "../../css/Left.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { myAction, getBySeriesId } from "../../actions/myAction";
import Right from "./Right";
import Tweets from "../Tweets";
import Zoom from "react-reveal/Zoom";
import burger from "../../images/burger.png";
class Left extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  componentDidMount() {
    this.props.changeName();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.seriesData(this.props.id);
    }
  }
  slideShowToggle() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  closeBtn() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    // console.log("Left " + this.props.id)
    // console.log("Left " + this.props.getAllMatDataFromRed) classname = LeftSection
    var AllMatchSeries = this.props.getAllMatDataFromRed;

    return (
      <>
        {/* <div className="mainbox" onClick={this.slideShowToggle.bind(this)}><i className="fa fa-bars" aria-hidden="true"></i></div> */}
        <span className="in_burger">
          {" "}
          <img src={burger} className="burger" alt="" />
        </span>
        <span className="mainbox" onClick={this.slideShowToggle.bind(this)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </span>
        <Zoom left>
          <section
            className={
              this.state.toggle
                ? "LeftSection dispWid animated fadeIn"
                : "LeftSection hideeWid animated fadeIn"
            }
          >
            <a className="closeBtn" onClick={this.closeBtn.bind(this)}>
              x
            </a>
            {/* hoverable removed hover effect */}
            <article className="leftArticle ">
              <div className="serieContent">
                {AllMatchSeries.length > 0 ? (
                  <>
                    <header className="sericeHeader">Series Details</header>
                    {/* <Zoom left cascade> */}
                    <ul>
                      <li>IPL 2020</li>
                      {AllMatchSeries.map((item, index) => (
                        // <li onClick={() => this.props.seriesData(item.id)} key={index}><Link to={`/seriesview/${item.id}`}>{item.name.replace(/2020/g, '')}</Link></li>
                        <li key={index}>
                          <Link to={`/seriesview/${item.id}`}>
                            {item.name.replace(/2020/g, "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* </Zoom> */}
                  </>
                ) : (
                  ""
                )}
              </div>
            </article>
            {/* <article className="leftArticle hoverable">
                    <div className="serieContent">
                        <header className="sericeHeader">Follow Us</header>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </article>
                <article className="leftArticle hoverable">
                    <div className="serieContent">
                        <header className="sericeHeader">Rankings</header>
                        <ul>
                            <li>ICC Rankings</li>
                        </ul>
                    </div>
                </article> */}
            <Zoom left cascade>
              <Right />
            </Zoom>
          </section>
        </Zoom>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getAllMatDataFromRed: state.series.passAllMatDataFromReducer,
    getId: state.series.byId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (index) => {
      dispatch(myAction(index));
    },
    seriesData: (index) => {
      dispatch(getBySeriesId(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Left);
// export default Left;
