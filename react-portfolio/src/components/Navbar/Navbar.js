import React, { Component } from "react";
 
class Navbar extends Component {
  render() {
    return (
        <div>
            <nav class="navbar navbar-default navbar-static-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <span id="c">C</span><span id="r">R</span><span id="s">S</span>
                    </div>
                    <ul class="nav navbar-nav navbar-left">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}
 
export default Navbar;