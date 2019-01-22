import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolios">
        포폴 링크들과 그 썸네일들이 위치할 공간.
        <div className="item1">
          <div className="title">조기요 V2</div>
          <iframe
            title="jogiyo-v2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AELNQ2UShRk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="description">
            <p>주요기능: 이거쓰고 저거 쓰고 등등</p>
            <p>서비스 환경</p>
            <p>업무 분담?</p>
          </div>
          <div className="icons1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/joonkim0625"
            >
              <FontAwesomeIcon icon={faGithub} color={"black"} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/joonkim0625"
            >
              <FontAwesomeIcon icon={faExclamationCircle} color={"black"} />
              <span>프로젝트 이슈 관리</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
