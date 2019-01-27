import React, { Component } from "react";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <p>안녕하세요, 김현준의 포트폴리오 사이트 입니다.</p>
        <div className="icons animateIcons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/joonkim0625"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} color={"black"} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:joonkim0625@gmail.com"
            className="email"
          >
            <FontAwesomeIcon icon={faAt} color={"black"} />
          </a>
        </div>
      </div>
    );
  }
}
