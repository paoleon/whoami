import React, { Component } from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import TypedReactDemo from "../components/TypedReactDemo.js"
import WavingEmoji from "../emoji/WavingEmoji";
import Button from "../components/Button/Button";
import "./Header.css";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var occupationTarget = this.props.data.occupationTarget;
      var description = this.props.data.description;
      var splittedDescription = description !== undefined
      ? description.split("|")
      : [];
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home" className="header">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll logo desktop" href="#home">
                <span className="grey-color"> &lt;</span>
                <span className="logo-name"> Paolo Leoni</span>
                <span className="grey-color">/&gt;</span>
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#WhatIDo">
                WhatIDo
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#Certifications">
                Certifications
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
            <li>
              <a className="smoothscroll" href="#resume">
                resume
              </a>
            </li>
            <li>
              <a className="" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" id="theHeader">
          <div className="banner-text">
            <h1 className="responsive-headline">{/*👋*/}
              Hi all, I'm {name} <WavingEmoji symbol="👋" label="hi" />
            </h1>
            <h3>
              I'm a {city}-based <span>{occupation}</span> working hard to
              become a <span>{occupationTarget}</span>.
            </h3>
            <p className="greeting-text-p subTitle">{description}</p>
            <TypedReactDemo
              strings={splittedDescription} />
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
