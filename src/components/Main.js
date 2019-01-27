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
        <p className="whoAmI">
          이제는 일상에서 빼놓을 수 없는, 무엇인가에 대한 정보를 가장 먼저
          접하게 되는 웹사이트를 만든다는 것에
          <br /> 매력을 느껴 개발을 시작하게 된 김현준이라고 합니다.
          <br /> 매일 성장하고 현실에 안주하지 않는 개발자가 되려고 노력하고
          있습니다.
        </p>
        <div className="icons animateIcons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/joonkim0625"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} color={"white"} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:joonkim0625@gmail.com"
            className="email"
          >
            <FontAwesomeIcon icon={faAt} color={"white"} />
          </a>
        </div>
      </div>
    );
  }
}
