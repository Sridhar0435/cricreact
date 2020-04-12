import React, { Component } from "react";
import "../../css/About_us.css";
import mainLogo from "../../images/logomain.png";
import devImage from "../../images/dev2.jpg";
class About_us extends Component {
    render() {
        return (
            <section>
                <article>
                    <div className="main_div_about">
                        {/* <img src={devImage} alt="" /> */}
                        <h5><span> About Us </span></h5>
                    </div>

                </article>
            </section>
        )
    }
}

export default About_us;