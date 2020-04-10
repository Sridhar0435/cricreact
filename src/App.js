import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import SliderNav from "./component/Navbar/SliderNav";
import LandingLiveScore from "./component/LandingLiveScore";
import FooterContent from "./component/Footer/FooterContent";
import Match from "./component/Match";
import AllMatch from "./component/AllMatches";
import Serices from "./component/MainLayout/Serices";
import SeriesView from "./component/MainLayout/SeriesView";
import MatchDetails from "./component/MainLayout/matchdetails/MatchDetails";
import Team from "./component/Team/Team";
import { connect } from "react-redux";
import gif from "./images/loadercircle.gif";

function App(props) {
  console.log("app")
  console.log(props.mainApp)
  return (


    <Router>
      <div className="App">
        <Navbar />
        <SliderNav />
        {props.mainApp.length > 0 ?
          <>
            <Switch>
              <Route exact={true} path={process.env.PUBLIC_URL + '/'} component={Serices} />
              <Route path="/seriesview/:id" exact component={SeriesView} />
              <Route path="/matchdetails/:seriesId/:matchId" exact component={MatchDetails} />
              <Route path="/team/:teamId/:teamName" exact component={Team} />
            </Switch>
            <FooterContent />
          </>
          : <img src={gif} className="loadSpin" width="300px" alt="" />}

      </div>
    </Router>


  );
}

const mapStateToProps = (state) => {
  return {
    mainApp: state.series.sliderData
  }
}
export default connect(mapStateToProps)(App);
