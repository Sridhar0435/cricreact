import React, { Component } from "react";
import "../../css/Right.css";
class Right extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="rightSection">
                <article className="rightArticle hoverable">
                    <div className="sericeContentRight">
                        <header className="sericeHeader">Top Headlines</header>
                        <ul>
                            <li>First Match</li>
                            <li>Second Match</li>
                            <li>Third Match</li>
                        </ul>
                    </div>
                </article>
                <article className="rightArticle hoverable">
                    <div className="sericeContentRight">
                        <header className="sericeHeader">Top Headlines</header>
                        <ul>
                            <li>First Match</li>
                            <li>Second Match</li>
                            <li>Third Match</li>
                        </ul>
                    </div>
                </article>
            </section>
        )
    }
}
export default Right;