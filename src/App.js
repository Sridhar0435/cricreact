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
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SliderNav />
        <Switch>
          <Route exact={true} path="/" component={Serices} />
          {/* <Route path="/cric2react" exact component={Serices} /> */}
          <Route path="/seriesview/:id" exact component={SeriesView} />
          <Route path="/matchdetails/:seriesId/:matchId" exact component={MatchDetails} />
          <Route path="/team/:teamId/:teamName" exact component={Team} />
        </Switch>
        <FooterContent />
        {/* <Route path="/match" component={Match} />
          <Route path="/allmatch" component={AllMatch} /> */}

      </div>
    </Router>
  );
}

export default App;
