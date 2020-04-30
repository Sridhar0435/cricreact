import React, { useEffect } from "react";
import "../css/Tweets.css";
import Zoom from 'react-reveal/Zoom';

// class Tweets extends Component {
//     componentDidMount() {
//         var tweetLength = document.querySelectorAll(".timeline-TweetList .timeline-TweetList-tweet");
//         console.log("tweetLength")
//         console.log(tweetLength)
//     }
//     render() {
//         return (
//             <div className="tweets_div">

//                 <a className="twitter-timeline" data-width="280" data-theme="light" href="https://twitter.com/ICC?ref_src=twsrc%5Etfw">Tweets by ICC</a>
//             </div>
//         )
//     }
// }<a class="twitter-timeline" data-width="600" data-theme="light" href="https://twitter.com/ICC?ref_src=twsrc%5Etfw">Tweets by ICC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
// export default Tweets;

const Tweets = () => {
    useEffect(() => {
        const anchor = document.createElement("a");
        anchor.setAttribute("class", "twitter-timeline");
        anchor.setAttribute("data-theme", "light");
        // anchor.setAttribute("data-tweet-limit", "5");
        anchor.setAttribute("data-width", "280");
        //   anchor.setAttribute("data-chrome", "noheader nofooter noborders");
        anchor.setAttribute("href", "https://twitter.com/ICC?ref_src=twsrc%5Etfw");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <Zoom left>
            <section className="twitterContainer">
                <Zoom left>
                    {/* <header className="sericeHeader tweets_header">Tweets</header> */}
                    <div className="twitter-embed"></div>
                </Zoom>
            </section>
        </Zoom>
    );
};

export default Tweets;