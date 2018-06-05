import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import './App.css';


const App = () => (

  <Router>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactForm} />
    </div>
  </Router>

);

export default App;
