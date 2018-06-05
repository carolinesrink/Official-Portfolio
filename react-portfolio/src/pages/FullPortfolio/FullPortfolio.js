import React from "react";
import { Row, Container, Col } from "../../components/Grid";
import Navbar from "../../components/Navbar"
import Home from "../../components/Home";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import ContactForm from "../../components/ContactForm";

class FullPortfolio extends React {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
            </div>
        )
    }
}

export default FullPortfolio;
