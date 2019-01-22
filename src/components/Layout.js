import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "./Portfolio";
import "./Layout.scss";
import {
  Scroll,
  DirectLink,
  Link,
  Events,
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Main from "./Main";
import About from "./About";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.hideBtn);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBtn);
  }

  hideBtn = () => {
    if (window.scrollY === 0) {
      this.setState({
        isTop: true
      });
    } else {
      this.setState({
        isTop: false
      });
    }
  };

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    const classHide = this.state.isTop ? "hide" : "";
    return (
      <div className="container">
        <nav className="navBar">
          <a className="home" href="/">
            Joon's
          </a>
          <div className="menu">
            <Link to="element1" spy={true} smooth={true} duration={500}>
              <span className="menu1">about</span>
            </Link>
            <Link to="element2" spy={true} smooth={true} duration={500}>
              <span className="menu2">portfolio</span>
            </Link>
          </div>
        </nav>
        <Element name="element0">
          <div className="mainWrap">
            <Main />
            <Link to="element1" spy={true} smooth={true} duration={500}>
              <span className="next">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </Link>
          </div>
        </Element>

        <Element name="element1">
          <div className="aboutWrap">
            <About />
            <div className="arrows">
              <Link to="element2" spy={true} smooth={true} duration={500}>
                <span className="nextInAbout">
                  {" "}
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              </Link>
              <Link to="element0" spy={true} smooth={true} duration={500}>
                <span className="previousInAbout">
                  {" "}
                  <FontAwesomeIcon icon={faArrowUp} />
                </span>
              </Link>
            </div>
          </div>
        </Element>

        <Element name="element2">
          <div className="portfolioWrap">
            <Portfolio />
            <Link to="element1" spy={true} smooth={true} duration={500}>
              <span className="previous">
                {" "}
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </Link>
          </div>
        </Element>

        <div className="footer">2019 김현준</div>

        <div className={`toTop ${classHide}`} onClick={this.scrollToTop}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </div>
      </div>
    );
  }
}
