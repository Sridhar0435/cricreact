import React, { Component } from "react";
import "../../css/Middle.css";
class Middle extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="middleSection">
                <article className="middleArticle hoverable">
                    <figure>
                        <a href="">
                            <img src="https://a.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1219759_1296x729.jpg" alt="" />
                        </a>
                        <figcaption>
                            <h5><a href="#">Will England be third-time lucky against 'cornered tigers' Pakistan?</a></h5>
                            <p>In our first of the series, we will be doing ball-by-ball commentary of the 1992 World Cup final</p>
                        </figcaption>
                    </figure>
                </article>
                <article className="middleArticle hoverable">
                    <figure>
                        <a href="">
                            <img src="https://a.espncdn.com/combiner/i?img=/i/cricket/cricinfo/1219759_1296x729.jpg" alt="" />
                        </a>
                        <figcaption>
                            <h5><a href="#">Will England be third-time lucky against 'cornered tigers' Pakistan?</a></h5>
                            <p>In our first of the series, we will be doing ball-by-ball commentary of the 1992 World Cup final</p>
                        </figcaption>
                    </figure>
                </article>
            </section>
        )
    }
}
export default Middle;