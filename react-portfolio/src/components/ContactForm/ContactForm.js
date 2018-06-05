import React from "react";
import { Row, Col } from "../Grid";
import { Input } from "../Input";
import SubmitButton from "../SubmitButton";

class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {

    }

    handleFormSubmit = event => {

    }

    render() {
        return (
            <div className="contactForm">
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <h2>Get In Touch</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-6 md-6 sm-12">
                        <Row>
                            <Col size="lg-12 md-12 sm-12">
                                <label>
                                    First Name
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="lg-6 md-6 sm-12">
                                <Input
                                    value={this.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="Jane"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col size="lg-6 md-6 sm-12">
                        <Row>
                            <Col size="lg-12 md-12 sm-12">
                                <label>
                                    Last Name
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="lg-6 md-6 sm-12">
                                <Input
                                    value={this.lastName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="Doe"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <Row>
                            <Col size="lg-12 md-12 sm-12">
                                <label>
                                    E-mail
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Input
                                value={this.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="janedoe@gmail.com"
                            />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12">
                        <Row>
                            <Col size="lg-12 md-12 sm-12">
                                <label>
                                    Message
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="lg-12 md-12 sm-12">
                                <textarea
                                    value={this.message}
                                    onChange={this.handleInputChange}
                                    name="message"
                                    placeholder="Drop me a note..."
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-1">
                        <a href="https://github.com/carolinesrink" target="_blank">
                            <div class="githubIcon"></div>
                        </a>
                    </Col>
                    <Col size="lg-1">
                        <a href="https://www.linkedin.com/in/caroline-rink-3614a3120/" target="_blank">
                            <div class="linkedInIcon"></div>
                        </a>
                    </Col>
                    <Col size="lg-1">
                        <a href="https://www.instagram.com/carolinesrink/" target="_blank">
                            <div class="instagramIcon"></div>
                        </a>
                    </Col>
                    <Col size="lg-5">
                        <a href="https://twitter.com/caroline_scott1" target="_blank">
                            <div class="twitterIcon"></div>
                        </a>
                    </Col>
                    <Col size="lg-4">
                        <SubmitButton onClick={this.handleFormSubmit} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactForm;