import React, { Component } from "react";
import "../css/Tweets.css";
class Tweets extends Component {
    componentDidMount() {
        var tweetLength = document.querySelectorAll(".timeline-TweetList .timeline-TweetList-tweet");
        console.log("tweetLength")
        console.log(tweetLength)
    }
    render() {
        return (
            <div className="tweets_div">

                <a className="twitter-timeline" data-width="280" data-theme="light" href="https://twitter.com/ICC?ref_src=twsrc%5Etfw">Tweets by ICC</a>
            </div>
        )
    }
}

export default Tweets;