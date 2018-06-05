import React from "react";
import { Row, Col } from "../Grid";
import "./About.css";

class About extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <h2>About Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <p>
                            I was born and raised in Atlanta, GA. After my high school graduation in 2013, I attended the University of West Georgia for my undergraduate degree. I graduated in December of 2017 and moved back to Atlanta shortly after. I am a recent graduate of the Georgia Tech Coding Bootcamp where I learned web development and computer programming. My favorite technologies include HTML, CSS, Javascript, and React.
                        </p>
                        <p>
                            My favorite hobby is traveling and I have been to seven countries so far. I participated in two study abroad program while I was completing my undergrad. The most memorable place I went to was my study abroad trip to Ireland. I also plan on visiting some Scandinavian countries this summer.
                        </p>
                        <p>
                            I also have two cats, Stella and Goose, who are always worth a mention.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;